# ---- Base Node ----
FROM node:alpine AS base
WORKDIR /app
COPY package.json .

# ---- Dependencies ----
FROM base AS dependencies
RUN npm install

# ---- Build ----
FROM dependencies AS build
COPY . .
RUN npm run build

# ---- Release with Distroless ----
FROM node:alpine AS release
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./package.json

# Expose the port that the Next.js application will run on (by default Next.js uses port 3000)
EXPOSE 3000

# With Next.js, the start command might look like "next start", but because we're using Distroless
# which doesn't have a global npm or next installation, you would point directly to the .next folder.
CMD ["node", "node_modules/next/dist/bin/next", "start"]
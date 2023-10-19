import { Paper } from "@mantine/core";
import React from "react";

export default function NewsPage() {
	return (
		<div className="container mx-auto">
			<h2 className="flex items-center justify-center text-center text-5xl text-white md:text-6xl">
				News & Announcments
			</h2>
			<div className="mx-auto justify-center pb-8 text-center text-2xl 2xl:px-64">
				Your <span className="font-bold text-white">one-stop access</span> to essential online platforms and
				tools. From your course material on Blackboard to student registration on reg and easy access to
				Microsoft tools, social media, and more. Explore these quick links and stay connected with
				Stamford&apos;s digital world.
			</div>

			<div className="grid h-[38rem] grid-cols-12 grid-rows-3 gap-x-5 gap-y-5">
				<Paper className="col-span-4 rounded-lg ">first</Paper>
				<Paper className="col-span-8 rounded-lg ">second</Paper>

				<Paper className="col-span-8 rounded-lg ">first</Paper>
				<Paper className="col-span-4 rounded-lg ">second</Paper>

				<Paper className="col-span-3 rounded-lg ">first</Paper>
				<Paper className="col-span-3 rounded-lg ">second</Paper>
				<Paper className="col-span-6 rounded-lg">second</Paper>
			</div>
		</div>
	);
}

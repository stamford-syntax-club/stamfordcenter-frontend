import { Paper, Text } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

import { Resource } from "@ourtypes/resources_page_types/ResourceTypes";
import Image from "next/image";

interface ResourceCardProps {
	resource: Resource;
	setCurrentResource: Dispatch<SetStateAction<Resource>>;
	openDrawer: () => void;
}

export default function ResourceCard({ resource, setCurrentResource, openDrawer }: ResourceCardProps) {
	const { name, iconURL } = resource;

	return (
		<Paper
			shadow="sm"
			className="h-44 w-full cursor-pointer p-2"
			onClick={() => {
				setCurrentResource(resource);
				openDrawer();
			}}
		>
			<div className="flex h-full w-full flex-col items-center justify-center">
				<div className="relative aspect-square h-16 w-16">
					{/* TODO: add sizes prop */}
					<Image src={iconURL} alt={`${name} icon`} fill />
				</div>
				<Text className="text-4xl" ta="center">
					{name}
				</Text>
			</div>
		</Paper>
	);
}

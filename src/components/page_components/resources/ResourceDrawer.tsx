import { Drawer } from "@mantine/core";
import { Resource, ResourceFile } from "@ourtypes/resources_page_types/ResourceTypes";
import Link from "next/link";

interface ResourceDrawerProps {
	selectedResource: Resource | null;
	isDrawerOpen: boolean;
	closeDrawer: () => void;
}

export default function ResourceDrawer({ selectedResource, isDrawerOpen, closeDrawer }: ResourceDrawerProps) {
	return (
		<Drawer
			title={selectedResource ? selectedResource.name : ""}
			opened={isDrawerOpen}
			onClose={closeDrawer}
			position="bottom"
			classNames={{
				title: "font-bold text-2xl",
			}}
		>
			<ul>
				{selectedResource
					? selectedResource.files.map((file: ResourceFile, index: number) => {
							return (
								<Link key={`file_${index}`} href={file.url} target="_blank">
									<li>{file.name}</li>
								</Link>
							);
					  })
					: ""}
			</ul>
		</Drawer>
	);
}

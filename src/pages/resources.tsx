import { Divider, Drawer, Paper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Dispatch, SetStateAction, useState } from "react";

interface ResourceCategory {
	name: string;
	description: string;
	iconURL: string;
	files: {
		fileKey: string;
		fileURL: string;
	}[];
}

interface ResourceCardProps {
	resourceCategory: ResourceCategory;
	setCurrentResource: Dispatch<SetStateAction<ResourceCategory>>;
	open: () => void;
}

function ResourceCard({ resourceCategory, setCurrentResource, open }: ResourceCardProps) {
	const { name, description, iconURL } = resourceCategory;

	return (
		<Paper
			className="h-64 w-full cursor-pointer p-2"
			onClick={() => {
				setCurrentResource(resourceCategory);
				open();
			}}
		>
			<p>{name}</p>
			<img src={iconURL} alt={`${name} icon`} />
			<Divider />
			<p>{description}</p>
		</Paper>
	);
}

export default function ResourcesPage() {
	const [resources, setResources] = useState<ResourceCategory[]>([
		{
			name: "Resource 1",
			description: "This is a sample resource for debugging.",
			iconURL: "https://example.com/icon1.png",
			files: [
				{ fileKey: "file1", fileURL: "https://example.com/file1" },
				{ fileKey: "file2", fileURL: "https://example.com/file2" },
			],
		},
		{
			name: "Resource 2",
			description: "Another sample resource for debugging.",
			iconURL: "https://example.com/icon2.png",
			files: [
				{ fileKey: "fileA", fileURL: "https://example.com/fileA" },
				{ fileKey: "fileB", fileURL: "https://example.com/fileB" },
			],
		},

		{
			name: "Resource 3",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus rerum labore mollitia amet quo quidem necessitatibus omnis exercitationem animi eaque!",
			iconURL: "https://example.com/icon3.png",
			files: [
				{ fileKey: "file22A", fileURL: "https://example.com/fileADD" },
				{ fileKey: "fileBawda", fileURL: "https://example.com/fileBDD" },
			],
		},
	]);

	const [currentResource, setCurrentResource] = useState(resources[0]);
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<div className="container mx-auto flex flex-col items-center gap-x-4 gap-y-4 md:grid md:grid-cols-2 xl:grid-cols-3">
			<Drawer
				title={currentResource.name}
				opened={opened}
				onClose={close}
				position="bottom"
				classNames={{
					title: "font-bold text-2xl",
				}}
			>
				<ul>
					{currentResource.files.map((file, ind) => {
						return <li key={`filekey_${ind}`}>{file.fileKey}</li>;
					})}
				</ul>
			</Drawer>

			{resources.map((resource, ind) => {
				return (
					<ResourceCard
						key={`resource_${ind}`}
						resourceCategory={resource}
						setCurrentResource={setCurrentResource}
						open={open}
					/>
				);
			})}
		</div>
	);
}

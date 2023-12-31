import { ActionIcon, Checkbox, Table, TextInput, Tooltip } from "@mantine/core";
import { useDebouncedState, useListState } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { StudyPlanElement } from "@ourtypes/study_plans_page_types/StudyPlanElement";
import { useState } from "react";
import { FaDownload, FaEye, FaSearch } from "react-icons/fa";
import { StudyPlanTableRowsTemplate } from "./StudyPlanTableRowsTemplate";

interface StudyPlanTableProps {
	API_BASE_LINK: string;
	elements: StudyPlanElement[];
}

// XD
async function downloadFile(API_BASE_LINK: string, element: StudyPlanElement) {
	const fileUrl = `${API_BASE_LINK}/api/files/${element.fileKey}?download=true`;

	try {
		const a = document.createElement("a");
		a.href = fileUrl;
		a.target = "_blank";
		a.download = `${element.major}_${element.year}_${element.language}.pdf`;
		a.style.display = "none"; // Hide the element from view

		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a); // Remove the element from the DOM
	} catch (error) {
		console.error(error);

		notifications.show({
			color: "red",
			title: "Download Failed",
			message: "Something went wrong with the download. Please try again later.",
		});
	}
}

export function StudyPlanTable({ elements, API_BASE_LINK }: StudyPlanTableProps) {
	const [values, handlers] = useListState(elements);
	const [searchString, setSearchString] = useDebouncedState("", 500);

	const [downloading, setDownloading] = useState(false);

	const allChecked = values.every((value) => value.checked);
	const indeterminate = values.some((value) => value.checked) && !allChecked;

	function getAllCheckedStudyPlanElements() {
		return values.filter((value) => value.checked);
	}

	async function handleDownload() {
		if (downloading) return;
		setDownloading(true);

		const checkedStudyPlanElements = getAllCheckedStudyPlanElements();

		for (const element of checkedStudyPlanElements) {
			await downloadFile(API_BASE_LINK, element);
		}

		setDownloading(false);
	}

	function handlePreview() {
		const checkedStudyPlanElements = getAllCheckedStudyPlanElements();

		for (const element of checkedStudyPlanElements) {
			window.open(`${API_BASE_LINK}/api/files/${element.fileKey}`, "_blank");
		}
	}

	const filteredValues = values.filter((value) => value.major.toLowerCase().includes(searchString.toLowerCase()));

	function handleAllCheckedChange(_: React.ChangeEvent<HTMLInputElement>) {
		handlers.setState((current) => current.map((value) => ({ ...value, checked: !allChecked })));
	}

	const hasSelection = values.some((value) => value.checked);

	return (
		<Table striped highlightOnHover captionSide="top">
			<Table.Caption>
				<div className="flex flex-row items-center">
					{/* Table search input */}
					<div className="ml-2">
						<TextInput
							leftSection={<FaSearch />}
							placeholder="Search in table"
							variant="filled"
							onChange={(event) => setSearchString(event.currentTarget.value)}
						/>
					</div>

					{/* Table action buttons, download/preview */}
					<div className="ml-auto mr-2 flex flex-row gap-x-2">
						<Tooltip.Group openDelay={500}>
							<Tooltip label="Download">
								<ActionIcon
									disabled={downloading || !hasSelection}
									variant="filled"
									onClick={handleDownload}
								>
									<FaDownload />
								</ActionIcon>
							</Tooltip>

							<Tooltip label="Preview">
								<ActionIcon disabled={!hasSelection} variant="outline" onClick={handlePreview}>
									<FaEye />
								</ActionIcon>
							</Tooltip>
						</Tooltip.Group>
					</div>
				</div>
			</Table.Caption>
			<Table.Thead>
				<Table.Tr>
					<Table.Th className="flex flex-row gap-x-2">
						<Checkbox
							className="mr-4"
							checked={allChecked}
							indeterminate={indeterminate}
							onChange={handleAllCheckedChange}
						/>
						Major
					</Table.Th>
					<Table.Th>Year</Table.Th>
					<Table.Th>Language</Table.Th>
				</Table.Tr>
			</Table.Thead>
			<Table.Tbody>
				<StudyPlanTableRowsTemplate allValues={values} filteredValues={filteredValues} handlers={handlers} />
			</Table.Tbody>
		</Table>
	);
}

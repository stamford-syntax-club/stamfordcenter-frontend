import { ActionIcon, Checkbox, Table, Tabs, Text, TextInput, Tooltip } from "@mantine/core";
import { UseListStateHandlers, randomId, useListState } from "@mantine/hooks";
import { useState } from "react";
import { FaDownload, FaEye, FaSearch } from "react-icons/fa";

interface StudyPlanElement {
	major: string;
	year: string;
	language: string;
	checked: boolean;
	key: string;
}

interface StudyPlanTableRowsTemplateProps {
	allValues: StudyPlanElement[];
	filteredValues: StudyPlanElement[];
	handlers: UseListStateHandlers<StudyPlanElement>;
}

interface StudyPlanTableProps {
	elements: StudyPlanElement[];
}

// TODO: These should come from the db
const businessStudyPlanElements: StudyPlanElement[] = [
	{ major: "Entrepreneurship (ENT)", year: "2022", language: "English", checked: false, key: randomId() },
	{ major: "Finance and Banking (FNB)", year: "2021", language: "Bilingual", checked: false, key: randomId() },
	{ major: "Marketing Management (MKT)", year: "2022", language: "Chinese", checked: false, key: randomId() },
	{ major: "International Business (IBS)", year: "2022", language: "Thai", checked: false, key: randomId() },
	{ major: "Supply Chain Management (SCM)", year: "2022", language: "English", checked: false, key: randomId() },
	{ major: "Human Resources Management (HRM)", year: "2022", language: "English", checked: false, key: randomId() },
];

const comArtsStudyPlanElements = [
	{ major: "Journalism (JRN)", year: "2022", language: "English", checked: false, key: randomId() },
	{ major: "Advertising (ADV)", year: "2021", language: "Bilingual", checked: false, key: randomId() },
	{ major: "Film and Television (FTV)", year: "2022", language: "Chinese", checked: false, key: randomId() },
	{ major: "Public Relations (PR)", year: "2022", language: "Thai", checked: false, key: randomId() },
	{ major: "Visual Communication Design (VCD)", year: "2022", language: "English", checked: false, key: randomId() },
	{ major: "Creative Writing (CRW)", year: "2022", language: "English", checked: false, key: randomId() },
];

function StudyPlanTableRowsTemplate({ allValues, filteredValues, handlers }: StudyPlanTableRowsTemplateProps) {
	const rows = filteredValues.map((element, ind) => (
		<tr key={"tr_" + element.key}>
			<td>
				<div className="flex flex-row gap-x-2">
					<Checkbox
						className="mr-4"
						checked={element.checked}
						onChange={(event) => {
							const key = element.key; // Get the key of the current element
							const index = allValues.findIndex((item) => item.key === key); // Find the index based on the key
							handlers.setItemProp(index, "checked", event.currentTarget.checked); // Use that index to update the item
						}}
					/>
					{element.major}
				</div>
			</td>
			<td>{element.year}</td>
			<td>{element.language}</td>
		</tr>
	));

	return <>{rows}</>;
}

function StudyPlanTable({ elements }: StudyPlanTableProps) {
	const [values, handlers] = useListState(elements);
	const [searchString, setSearchString] = useState("");

	const allChecked = values.every((value) => value.checked);
	const indeterminate = values.some((value) => value.checked) && !allChecked;

	function getAllCheckedStudyPlanElements() {
		return values.filter((value) => value.checked);
	}

	function handleDownload() {
		const checkedStudyPlanElements = getAllCheckedStudyPlanElements();
		// TODO: download all
		console.log("Download", checkedStudyPlanElements);
	}

	function handlePreview() {
		const checkedStudyPlanElements = getAllCheckedStudyPlanElements();
		// TODO: preview all in new tabs
		console.log("Preview", checkedStudyPlanElements);
	}

	const filteredValues = values.filter((value) => value.major.toLowerCase().includes(searchString.toLowerCase()));

	function handleAllCheckedChange(event: React.ChangeEvent<HTMLInputElement>) {
		handlers.setState((current) => current.map((value) => ({ ...value, checked: !allChecked })));
	}

	return (
		<Table striped highlightOnHover>
			<caption>
				<div className="flex flex-row items-center">
					{/* Table search input */}
					<div className="ml-2">
						<TextInput
							icon={<FaSearch />}
							placeholder="Search in table"
							variant="filled"
							value={searchString}
							onChange={(event) => setSearchString(event.currentTarget.value)}
						/>
					</div>

					{/* Table action buttons, download/preview */}
					<div className="ml-auto mr-2 flex flex-row gap-x-2">
						<Tooltip.Group openDelay={500}>
							<Tooltip label="Download">
								<ActionIcon variant="filled" onClick={handleDownload}>
									<FaDownload />
								</ActionIcon>
							</Tooltip>

							<Tooltip label="Preview">
								<ActionIcon variant="outline" onClick={handlePreview}>
									<FaEye />
								</ActionIcon>
							</Tooltip>
						</Tooltip.Group>
					</div>
				</div>
			</caption>
			<thead>
				<tr>
					<th>
						<div className="flex flex-row gap-x-2">
							<Checkbox
								className="mr-4"
								checked={allChecked}
								indeterminate={indeterminate}
								transitionDuration={0}
								onChange={handleAllCheckedChange}
							/>
							Major
						</div>
					</th>
					<th>Year</th>
					<th>Language</th>
				</tr>
			</thead>
			<tbody>
				<StudyPlanTableRowsTemplate allValues={values} filteredValues={filteredValues} handlers={handlers} />
			</tbody>
		</Table>
	);
}

export default function StudyPlansPage() {
	return (
		<div className="container relative mx-auto">
			<div className="w-full">
				<h1>Curriculum Resources</h1>
				<div className="max-w-2xl">
					<Text>
						Explore Stamford&apos;s collection of curriculum files for all majors. Find study plans, course
						outlines, and academic materials tailored to your program. Browse by major and access the
						resources to guide your academic journey at Stamford Center. Need help? Contact your academic
						advisor.
					</Text>
				</div>
			</div>

			<div className="mt-16">
				<Tabs radius={"xs"} variant="outline" defaultValue="fac_business">
					<Tabs.List>
						<Tabs.Tab value="fac_business">Faculty of Business and Technology</Tabs.Tab>
						<Tabs.Tab value="fac_comarts">Faculty of Communication Arts and Design</Tabs.Tab>
					</Tabs.List>

					<Tabs.Panel value="fac_business" pt="xs">
						<StudyPlanTable elements={businessStudyPlanElements} />
					</Tabs.Panel>

					<Tabs.Panel value="fac_comarts" pt="xs">
						<StudyPlanTable elements={comArtsStudyPlanElements} />
					</Tabs.Panel>
				</Tabs>
			</div>
		</div>
	);
}

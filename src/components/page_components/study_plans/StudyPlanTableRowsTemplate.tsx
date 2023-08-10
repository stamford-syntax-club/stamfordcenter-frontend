import { Checkbox } from "@mantine/core";
import { UseListStateHandlers } from "@mantine/hooks";
import { StudyPlanElement } from "@ourtypes/study_plans_page_types/StudyPlanElement";

interface StudyPlanTableRowsTemplateProps {
	allValues: StudyPlanElement[];
	filteredValues: StudyPlanElement[];
	handlers: UseListStateHandlers<StudyPlanElement>;
}

export function StudyPlanTableRowsTemplate({ allValues, filteredValues, handlers }: StudyPlanTableRowsTemplateProps) {
	const rows = filteredValues.map((element, ind) => (
		<tr key={"tr_" + element.key}>
			<td>
				<div className="flex flex-row items-center gap-x-2">
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

import { StudyPlanTable } from "@components/page_components/study_plans/StudyPlanTable";
import { Skeleton, Tabs, Text } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { StudyPlanElement } from "@ourtypes/study_plans_page_types/StudyPlanElement";
import { useEffect, useState } from "react";

import useSWR from "swr";

async function fetcher(url: string): Promise<StudyPlanElement[]> {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("Network response was not ok");
	}

	return response.json();
}

export default function StudyPlansPage() {
	const { data, error, isLoading } = useSWR("https://center-be.stamford.dev/api/study_plans", fetcher);
	const [faculties, setFaculties] = useState(new Map<string, StudyPlanElement[]>());

	useEffect(() => {
		if (data && !error) {
			const uniqueFaculties = new Map();

			for (const element of data) {
				const faculty = element.faculty;

				if (!uniqueFaculties.has(faculty)) {
					uniqueFaculties.set(faculty, []);
				}

				uniqueFaculties.get(faculty).push({
					...element,
					checked: false,
					key: randomId(),
				});
			}

			setFaculties(uniqueFaculties);
		} else if (error) {
			console.error(error);
		}
	}, [data, error]);

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
				<Skeleton height={400} visible={isLoading}>
					<Tabs className="mb-16" radius={"xs"} variant="outline" defaultValue="Business and Technology">
						<Tabs.List>
							{Array.from(faculties.keys()).map((faculty) => (
								<Tabs.Tab key={"tabtab" + faculty} value={faculty}>
									Faculty of {faculty}
								</Tabs.Tab>
							))}
						</Tabs.List>

						{Array.from(faculties.entries()).map(([faculty, elements]) => (
							<Tabs.Panel key={"tabpanel" + faculty} value={faculty} pt="xs">
								<StudyPlanTable elements={elements} />
							</Tabs.Panel>
						))}
					</Tabs>
				</Skeleton>
			</div>
		</div>
	);
}
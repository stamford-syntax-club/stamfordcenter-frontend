import { Alert } from "@mantine/core";
import { FaExclamationTriangle } from "react-icons/fa";

export const Announcement = () => {
	const icon = <FaExclamationTriangle />;
	return (
		<div className="container mx-auto">
			<Alert variant="light" color="yellow" icon={icon}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus
				placeat saepe.
			</Alert>
		</div>
	);
};
// WIP

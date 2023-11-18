import { Image, Paper, Grid, ThemeIcon, UnstyledButton } from "@mantine/core";
import ImageSlideShow from "@components/core/ImageSlideShow";
import { useScrollIntoView } from "@mantine/hooks";
import React from "react";
import { FaArrowDown, FaInstagram, FaTiktok } from "react-icons/fa";
import NextImage from "next/image";

const cards = [
	{
		id: 1,
		name: "Anuj Thapa",
		position: "Vice-President Internationality & Creativity",
		imgURL: "/assets/images/student_council/Anuj.jpg",
		style: {
			marginLeft: "auto",
			marginBottom: "30px",
		},
	},
	{
		id: 2,
		name: "Isarapan Kotchaphong",
		position: "Vice-President Social Media & Marketing",
		imgURL: "/assets/images/student_council/Ice.jpg",
		style: {
			marginLeft: "10px",
			marginTop: "30px",
		},
	},
	{
		id: 3,
		name: "Ayham A.H. Tamim",
		position: "President",
		imgURL: "/assets/images/student_council/Ayham.jpg",
		style: {
			marginLeft: "10px",
			marginBottom: "30px",
		},
	},
	{
		id: 4,
		name: "Napasorn Kitireanglarp",
		position: "Vice-President Clubs, Activites & Events",
		imgURL: "/assets/images/student_council/Ploy.jpg",
		style: {
			marginLeft: "10px",
			marginTop: "30px",
		},
	},
	{
		id: 5,
		name: "Ousa Hem",
		position: "Vice-President Academic Affairs",
		imgURL: "/assets/images/student_council/Sky.jpg",
		style: {
			marginRight: "auto",
			marginBottom: "30px",
			marginLeft: "10px",
		},
	},
];

const carouselSlides = [
	{ src: "/assets/images/student_council/farewell.jpg", alt: "Welcoming And Farewell Party Student Council 2023" },
	{ src: "/assets/images/student_council/stiu-talk.jpg", alt: "STIU Talk 2023" },
	{ src: "/assets/images/student_council/cultural-trip.jpg", alt: "Auytthaya Cultural Trip 2023" },
	{ src: "/assets/images/student_council/welcome-freshmen.jpg", alt: "Welcome Freshmen Term 1/2023" },
	{ src: "/assets/images/student_council/club-fair.jpg", alt: "Student Club Fair Term 1/2023" },
];

export default function StudentCouncilPage() {
	const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
		offset: 60,
	});

	return (
		<div className="container mx-auto">
			<h2 className="flex items-center justify-center text-center text-5xl text-white md:text-5xl">
				Student Council 2023
			</h2>
			<div className="flex flex-row">
				{cards.map((card) => (
					<div
						className="group relative h-[30rem] w-64 transform cursor-default rounded-lg transition-all duration-100 hover:-translate-y-2"
						style={card.style}
						key={"profile_card" + card.id}
					>
						<div className="h-full w-full rounded-lg bg-black">
							<Image
								component={NextImage}
								className="h-full w-full rounded-lg object-cover"
								src={card.imgURL}
								alt={card.name}
								width={1000}
								height={1000}
							/>
							<div className="fixed bottom-0 left-0 right-0 p-4 text-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
								<h3 className="text-xs font-bold md:text-xl">{card.name}</h3>
								<p className="text-xs font-bold md:text-base">{card.position}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="flex animate-bounce items-center justify-center">
				<UnstyledButton
					onClick={() =>
						scrollIntoView({
							alignment: "center",
						})
					}
				>
					<ThemeIcon radius="xl" className="bouncy">
						<FaArrowDown />
					</ThemeIcon>
				</UnstyledButton>
			</div>

			<Grid className="container mx-auto pt-80" ref={targetRef} justify="center" align="center">
				<Grid.Col span={{ base: 12, md: 6 }}>
					<Paper className="flex flex-col rounded-lg p-6 md:h-96 md:flex-row">
						<div>
							<h1 className="text-xl md:text-4xl">About</h1>
							<p className="w-72 text-lg">
								The Student Council is the official student body of Stamford International University.
								The council is responsible for representing the student body, organizing events, and
								communicating with the university&apos;s administration.
							</p>
						</div>
						<Image
							component={NextImage}
							className="rounded-md md:ml-auto"
							src="/assets/images/student_council/group.jpg"
							alt="Student Council Group Photo"
							width={3641 / 11}
							height={3545 / 11}
						/>
					</Paper>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 6 }}>
					<Paper className="flex flex-col rounded-lg p-6 md:h-96 md:flex-row">
						<div>
							<h1 className="text-xl md:text-4xl">Upcoming Events</h1>
							<p className="w-96 text-base">
								The &quot;Welcome Freshmen&quot; event, orchestrated by the Student Council at Stamford
								International University, symbolizes the warm embrace awaiting new students. This event
								serves as an introduction to the vibrant community, showcasing the Council&rsquo;s
								dedication to fostering a welcoming environment and facilitating a smooth transition
								into university life.
							</p>
						</div>
						<Image
							component={NextImage}
							className="rounded-md md:ml-auto"
							src="/assets/images/student_council/example.png"
							alt="Example Event Poster"
							width={3456 / 14}
							height={4608 / 14}
						/>
					</Paper>
				</Grid.Col>
			</Grid>

			<div className="pt-20">
				<ImageSlideShow carouselImages={carouselSlides} />
			</div>

			<div className="flex flex-row items-center justify-center space-x-5 pt-10">
				<a href="https://www.instagram.com/studentcouncilstiu/" target="_blank">
					<UnstyledButton>
						<FaInstagram className="h-10 w-10" />
					</UnstyledButton>
				</a>
				<a href="https://www.tiktok.com/@studentcouncilstiu?is_from_webapp=1&sender_device=pc" target="_blank">
					<UnstyledButton>
						<FaTiktok className="h-10 w-10" />
					</UnstyledButton>
				</a>
			</div>
		</div>
	);
}

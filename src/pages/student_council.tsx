import { Image, Paper, Grid, ThemeIcon, UnstyledButton } from "@mantine/core";
import { useScrollIntoView } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import React from "react";
import { FaArrowDown, FaInstagram, FaTiktok } from "react-icons/fa";



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
    { src: "/assets/images/student_council/1.jpg", alt: "Slide 1" },
    { src: "/assets/images/student_council/2.jpg", alt: "Slide 2" },
    { src: "/assets/images/student_council/3.jpg", alt: "Slide 3" },
    { src: "/assets/images/student_council/4.jpg", alt: "Slide 4" },
    { src: "/assets/images/student_council/5.jpg", alt: "Slide 5" },
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
                        className="w-64 h-[30rem] rounded-lg transition-all duration-100 transform cursor-default hover:-translate-y-2 relative group"
                        style={card.style}
                        key={"profile_card" + card.id}
                    >
                        <div className="w-full h-full bg-black rounded-lg">
                            <Image
                                className="w-full h-full object-cover rounded-lg"
                                src={card.imgURL}
                                alt={card.name}
                            />
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 fixed text-center left-0 right-0 bottom-0 text-white p-4">
                                <h3 className="md:text-xl text-xs font-bold">{card.name}</h3>
                                <p className="md:text-base text-xs font-bold">{card.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center animate-bounce">
                <UnstyledButton onClick={() =>
                    scrollIntoView({
                        alignment: 'center',
                    })
                }>
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
                <Carousel withIndicators
                    slideSize="25%" height={200} slideGap="md" align="start" >
                    {carouselSlides.map((slide, index) => (
                        <Carousel.Slide key={index}>
                            <Image src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>

            <div className="pt-10 flex flex-row items-center justify-center space-x-5">
                <a href="https://www.instagram.com/studentcouncilstiu/" target="_blank">
                    <UnstyledButton>
                        <FaInstagram className="w-10 h-10" />
                    </UnstyledButton>
                </a>
                <a href="https://www.tiktok.com/@studentcouncilstiu?is_from_webapp=1&sender_device=pc" target="_blank">
                    <UnstyledButton>
                        <FaTiktok className="w-10 h-10" />
                    </UnstyledButton>
                </a>
            </div>
        </div>
    );
}

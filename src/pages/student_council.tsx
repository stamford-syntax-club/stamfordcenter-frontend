import { Button, Card, Group, Paper, ThemeIcon, UnstyledButton } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import React from "react";
import { FaArrowDown, FaInstagram, FaTiktok } from "react-icons/fa";
import { start } from "repl";



const cards = [
    {
        id: 1,
        description: "Vice-President Internationality & Creativity",
        title: "Anuj Thapa",
        imgURL: "/assets/images/student_council/Anuj.jpg",
        style: {
            marginLeft: "auto",
            marginBottom: "30px",
        },
    },
    {
        id: 2,
        description: "Vice-President Social Media & Marketing",
        title: "Isarapan Kotchaphong",
        imgURL: "/assets/images/student_council/Ice.jpg",
        style: {
            marginLeft: "10px",
            marginTop: "30px",
        },
    },
    {
        id: 3,
        description: "President",
        title: "Ayham A.H. Tamim",
        imgURL: "/assets/images/student_council/Ayham.jpg",
        style: {
            marginLeft: "10px",
            marginBottom: "30px",
        },
    },
    {
        id: 4,
        description: "Vice-President Clubs, Activites & Events",
        title: "Napasorn Kitireanglarp",
        imgURL: "/assets/images/student_council/Ploy.jpg",
        style: {
            marginLeft: "10px",
            marginTop: "30px",
        },
    },
    {
        id: 5,
        description: "Vice-President Academic Affairs",
        title: "Ousa Hem",
        imgURL: "/assets/images/student_council/Sky.jpg",
        style: {
            marginRight: "auto",
            marginBottom: "30px",
            marginLeft: "10px",
        },
    },
];

export default function StudentCouncilPage() {
    const scrollToSecondContainer = () => {
        const secondContainer = document.getElementById("second-container");
        if (secondContainer) {
            secondContainer.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="container mx-auto">
            <h2 className="flex items-center justify-center text-center text-5xl text-white md:text-5xl">
                Student Council 2023
            </h2>
            <div className="flex flex-row">
                {cards.map((card) => (
                    <div
                        className="w-[250px] h-[480px] rounded-lg transition-all duration-100 transform cursor-default hover:-translate-y-2"
                        style={card.style}
                        key={"profile_card" + card.id}
                    >
                        <Paper className="w-full h-full bg-black">
                            <div className="relative w-full h-full">
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src={card.imgURL}
                                    alt={card.title}
                                />
                            </div>
                            <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 fixed text-center left-0 right-0 bottom-0 text-white p-4">
                                <h3 className="md:text-xl text-xs font-bold">{card.title}</h3>
                                <p className="md:text-base text-xs font-bold">{card.description}</p>
                            </div>
                        </Paper>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center">
                <UnstyledButton onClick={scrollToSecondContainer}>
                    <ThemeIcon radius="xl" className="bouncy">
                        <FaArrowDown />
                    </ThemeIcon>
                </UnstyledButton>
            </div>

            <div className="container mx-auto pt-80" id="second-container">
                <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-4 justify-between w-[100%]">
                    <Paper className="flex md:w-[47%] md:h-[27rem] h-72 w-[100%] rounded-lg">
                        <div className="relative">
                            <h1 className="md:pl-6 md:text-4xl pl-3 text-xl">About</h1>
                            <p className="md:pl-6 pl-3 md:w-[350px] w-[250px] text-base">
                                The Student Council is the official student body of Stamford International University. The
                                council is responsible for representing the student body, organizing events, and
                                communicating with the university&apos;s administration.
                            </p>
                            <div className="absolute top-0 md:ml-[380px] ml-[280px] md:mt-7 mt-4">
                                <img className="md:w-80 md:h-96 w-52 h-64 rounded-lg object-cover" src="/assets/images/student_council/group.jpg" alt="" />
                            </div>
                        </div>
                    </Paper>
                    <Paper className="flex md:w-[47%] md:h-[27rem] h-72 w-[100%] rounded-lg">
                        <div className="relative">
                            <h1 className="md:pl-6 md:text-4xl pl-3 text-xl">Upcoming Event</h1>
                            <p className="md:pl-6 pl-3 md:w-[350px] w-[250px] text-base">
                                The Student Council is the official student body of Stamford International University. The
                                council is responsible for representing the student body, organizing events, and
                                communicating with the university&apos;s administration.
                            </p>
                            <div className="absolute top-0 md:ml-[380px] ml-[280px] md:mt-7 mt-4">
                                <img className="md:w-80 md:h-96 w-52 h-64 rounded-lg object-cover" src="/assets/images/student_council/example.png" alt="" />
                            </div>
                        </div>
                    </Paper>
                </div>
                <div className="pt-20">
                    <Carousel withIndicators
                        slideSize="25%" height={200} slideGap="md" align="start" >
                        <Carousel.Slide>
                            <img src="/assets/images/student_council/1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src="/assets/images/student_council/2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src="/assets/images/student_council/3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src="/assets/images/student_council/4.jpg" alt="Slide 4" className="w-full h-full object-cover" />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <img src="/assets/images/student_council/5.jpg" alt="Slide 4" className="w-full h-full object-cover" />
                        </Carousel.Slide>
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
        </div >
    );
}

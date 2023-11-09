import { Card, Paper, ThemeIcon, UnstyledButton } from "@mantine/core";
import React from "react";
import { FaArrowDown } from "react-icons/fa";



const cards = [
    {
        id: 1,
        description: "Vice-President Internationality & Creativity",
        title: "Anuj Thapa",
        imgURL: "/assets/images/logos/Anuj.jpg",
        style: {
            marginLeft: "auto",
            marginBottom: "30px",
        },
    },
    {
        id: 2,
        description: "Vice-President Social Media & Marketing",
        title: "Isarapan Kotchaphong",
        imgURL: "/assets/images/logos/Ice.jpg",
        style: {
            marginLeft: "10px",
            marginTop: "30px",
        },
    },
    {
        id: 3,
        description: "President",
        title: "Ayham A.H. Tamim",
        imgURL: "/assets/images/logos/Ayham.jpg",
        style: {
            marginLeft: "10px",
            marginBottom: "30px",
        },
    },
    {
        id: 4,
        description: "Vice-President Clubs, Activites & Events",
        title: "Napasorn Kitireanglarp",
        imgURL: "/assets/images/logos/Ploy.jpg",
        style: {
            marginLeft: "10px",
            marginTop: "30px",
        },
    },
    {
        id: 5,
        description: "Vice-President Academic Affairs",
        title: "Ousa Hem",
        imgURL: "/assets/images/logos/Sky.jpg",
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
                        key={card.id}
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
                                <h3 className="text-2xl font-bold">{card.title}</h3>
                                <p className=" font-bold">{card.description}</p>
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
                <div className="flex flex-row justify-between w-[100%]">
                    <Paper className="flex w-[47%] h-[27rem] rounded-lg bg-gray-800">
                        <div className="relative">
                            <h1 className="pl-6">About</h1>
                            <p className="pl-6 w-[350px]">
                                The Student Council is the official student body of Stamford International University. The
                                council is responsible for representing the student body, organizing events, and
                                communicating with the university&apos;s administration.
                            </p>
                            <div className="absolute top-0 ml-[360px] mt-7">
                                <img className="w-80 h-96 rounded-lg object-cover" src="/assets/images/logos/group.jpg" alt="" />
                            </div>
                        </div>
                    </Paper>
                    <Paper className="flex w-[47%] h-[27rem] rounded-lg bg-gray-800">
                        <div className="relative">
                            <h1 className="pl-6">Upcoming Event</h1>
                            <p className="pl-6 w-[350px]">
                                The Student Council is the official student body of Stamford International University. The
                                council is responsible for representing the student body, organizing events, and
                                communicating with the university&apos;s administration.
                            </p>
                            <div className="absolute top-0 ml-[360px] mt-7">
                                <img className="w-80 h-96 rounded-lg" src="/assets/images/logos/example.png" alt="" />
                            </div>
                        </div>
                    </Paper>
                </div>
                <div className="pt-36">
                    <div>
                        <div>
                            <img src="/assets/images/carousel/slide1.jpg" alt="Slide 1" />
                        </div>
                        <div>
                            <img src="/assets/images/carousel/slide2.jpg" alt="Slide 2" />
                        </div>
                        <div>
                            <img src="/assets/images/carousel/slide3.jpg" alt="Slide 3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { useEffect, useRef, useState } from "react";
import { Text, Image } from "@mantine/core";
import { Carousel, Embla } from "@mantine/carousel";
import AutoPlay from "embla-carousel-autoplay";

interface ClubActivitySlideShowProps {
	carouselImages: { src: string; alt: string }[];
}

export default function ClubActivitySlideShow({ carouselImages }: ClubActivitySlideShowProps) {
	const autoplay = useRef(AutoPlay({ delay: 2000 }));
	const [embla, setEmbla] = useState<Embla | null>(null);

	// fix for embla carousel collapsing animation during resize
	useEffect(() => {
		const handleResize = () => {
			if (embla) {
				embla.reInit();
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [embla]);

	return (
		<Carousel
			loop
			align="start"
			getEmblaApi={setEmbla}
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
			slideGap="md"
			slideSize={{ base: "100%", sm: "50%", md: "33%" }}
            className="mb-8"
		>
			{carouselImages.map((image, index) => (
				<Carousel.Slide key={`carouselImages-${index}`}>
					<Image height={300} width={300} src={image.src} alt={image.alt} />
					<Text>{image.alt}</Text>
				</Carousel.Slide>
			))}
		</Carousel>
	);
}

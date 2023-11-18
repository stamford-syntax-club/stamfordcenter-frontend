import { Carousel, Embla } from "@mantine/carousel";
import { Image, Text } from "@mantine/core";
import AutoPlay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";


interface ImageSlideShowShowProps {
	carouselImages: { src: string; alt: string }[];
}

export default function ImageSlideShow({ carouselImages }: ImageSlideShowShowProps) {
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
			slideGap="xs"
			slideSize={{ base: "100%", sm: "50%", md: "33%" }}
			className="mb-4"
		>
			{carouselImages.map((image, index) => (
				<Carousel.Slide key={`carouselImages-${index}`}>
					<Image component={NextImage}
						height={300} width={300} src={image.src} alt={image.alt} />
					<Text>{image.alt}</Text>
				</Carousel.Slide>
			))}
		</Carousel>
	);
}

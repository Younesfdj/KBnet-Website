"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"


import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import reseau from "../../public/reseau.jpg"
import dev from "../../public/dev.jpg"
import electricite from "../../public/electricite.jpg"
import genieCivil from "../../public/genie-civil.jpg"
import telephonie from "../../public/telephonie.jpg"
import champMetal from "../../public/champ-metal.jpg"
import energieSolar from "../../public/Energie-Solaire-scaled.jpg"



const slidesContent = [
    {
        title: "Reseaux",
        informations: "KBNET vous assure l'installation, la configuration et la résolution des problèmes liés aux différents réseaux informatiques.",
        backgroundImage: reseau
    },
    {
        title: "Telephonie",
        informations: "KBNET assure l'installation et la maintenance de la téléphonie analogique et IP.",
        backgroundImage: telephonie
    },
    {
        title: "Developement",
        informations: "KBNET assure le développement de solutions sur mesure, la construction de mat et pylône, ainsi que l'installation de panneaux autoroute et shelters.",
        backgroundImage: dev
    },
    {
        title: "Electricté",
        informations: "KBNET assure l'alimentation fiable des équipements et met en place des solutions de redondance.",
        backgroundImage: electricite
    },
    {
        title: "Genie cevil",
        informations: "KBNET s'occupe de la construction de structures génie civil, tels que les mats, pylônes, panneaux autoroute et shelters.",
        backgroundImage: genieCivil
    },
    {
        title: "Champ metal",
        informations: "KBNET propose des solutions dans le domaine du métal, notamment la construction de structures adaptées à vos besoins.",
        backgroundImage: champMetal
    },
    {
        title: "Energie solaire",
        informations: "KBNET offre des solutions d'énergie solaire, incluant la construction de mats, pylônes, panneaux autoroute et shelters.",
        backgroundImage: energieSolar
    }
];

export function Slider() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false, loop: true, })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-md"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {slidesContent.map((slide, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="bg-transparent border-none">
                                <CardContent className="flex aspect-square  items-center justify-center p-6 cursor-grab bg-transparent border-none ">
                                    <Image alt={slide.title} src={slide.backgroundImage} className="rounded-md blur-xs h-80 w-100" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const slidesContent = [
    {
        title: "Reseaux",
        informations: "KBNET vous assure l'installation, la configuration et la résolution des problèmes liés aux différents réseaux informatiques.",
        backgroundImage: ""
    },
    {
        title: "Telephonie",
        informations: "KBNET assure l'installation et la maintenance de la téléphonie analogique et IP.",
        backgroundImage: ""
    },
    {
        title: "Developement",
        informations: "KBNET assure le développement de solutions sur mesure, la construction de mat et pylône, ainsi que l'installation de panneaux autoroute et shelters.",
        backgroundImage: ""
    },
    {
        title: "Electricté",
        informations: "KBNET assure l'alimentation fiable des équipements et met en place des solutions de redondance.",
        backgroundImage: ""
    },
    {
        title: "Genie cevil",
        informations: "KBNET s'occupe de la construction de structures génie civil, tels que les mats, pylônes, panneaux autoroute et shelters.",
        backgroundImage: ""
    },
    {
        title: "Champ metal",
        informations: "KBNET propose des solutions dans le domaine du métal, notamment la construction de structures adaptées à vos besoins.",
        backgroundImage: ""
    },
    {
        title: "Energie solaire",
        informations: "KBNET offre des solutions d'énergie solaire, incluant la construction de mats, pylônes, panneaux autoroute et shelters.",
        backgroundImage: ""
    }
];

export function Slider() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-md"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6 bg-red-300 cursor-grab">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
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

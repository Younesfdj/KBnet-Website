import { Slider } from "@/components/Slider"
function Services() {
    return (
        <section id="services" className="grid grid-cols-17 lg:grid-cols-16 h-screen bg-gray-100">
            <div className="flex justify-center items-center flex-col row-start-2 lg:row-start-1">
                <Slider />
            </div>
            <div className="flex justify-center items-center px-10 ">
                <div className="flex flex-col justify-around h-[22rem] py-10">
                    <h2 className="font-bold text-4xl">A propos de nos services</h2>
                    <p><span className="font-bold">KBNET</span> pilote votre transformation digitale et vous accompagne dans la réalisation de vos objectifs. Nous mettons à votre service notre expertise en stratégie et création digitales pour vous permettre de développer votre business.</p>
                </div>
            </div>
        </section>
    )
}

export default Services
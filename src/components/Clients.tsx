import Image from "next/image"

function Clients() {
    const clientGrid = [
        {
            alt: "ooredoo",
            logoPath: ""
        },
        {
            alt: "djezzy",
            logoPath: ""
        },
        {
            alt: "zte",
            logoPath: ""
        },
        {
            alt: "huawei",
            logoPath: ""
        },
        {
            alt: "mobilis",
            logoPath: ""
        },
        {
            alt: "algerie telecome",
            logoPath: ""
        },
    ]
    return (
        <section id="clients" className="h-screen grid grid-cols-16 justify-center items-center">
            <div className="flex justify-center items-center px-10 ">
                <div className="flex flex-col justify-around h-[22rem] py-10">
                    <h2 className="font-bold text-4xl">Nos clients</h2>
                    <p><span className="font-bold">KBNET</span>, nous sommes fiers de collaborer avec divers clients provenant de différents secteurs d'activité. Nous travaillons avec des entreprises de toutes tailles, des startups aux grandes entreprises internationales.</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                {
                    clientGrid.map((client, index) => (
                        <div key={index}>
                            <Image src={client.logoPath} alt={client.alt} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Clients
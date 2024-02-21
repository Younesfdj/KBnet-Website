import { ContactForm } from "./ContactForm"
import { ContactMap } from "./ContactMap"
import { Mail, Phone, Linkedin, Instagram, Youtube } from "lucide-react";
export default function Contact() {
    return (
        <section id="contact" className="h-screen">
            <div className="grid grid-cols-17 lg:grid-cols-16 h-[94%]">
                <ContactForm />
                <ContactMap />
            </div>
            <div className="h-[6%] bg-gray-700 text-white text-sm grid grid-cols-3">
                <div className="flex justify-center items-center gap-6 ">
                    <div className="flex gap-2 items-center">
                        <Mail size={20} />
                        <a href="mailto:contact@kbnet.com">contact@kbnet.com</a>
                    </div>
                    <div className="flex gap-2">
                        <Phone size={20} />
                        +213 560 15 26 18
                    </div>
                </div>
                <div className="flex justify-center items-center"><p>&copy; 2024 KBNET. All rights reserved.</p></div>
                <div className="flex gap-5 justify-center items-center">
                    <a href="https://www.linkedin.com/company/kbnet"><Linkedin size={20} /></a>
                    <a href="https://www.instagram.com"><Instagram size={20} /></a>
                    <a href="https://www.youtube.com"><Youtube size={20} /></a>
                </div>
            </div>
        </section>
    )
}

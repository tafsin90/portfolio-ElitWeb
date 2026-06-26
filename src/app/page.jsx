import Link from "next/link";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import CV from "@/images/cv.png";
import Image from "next/image";
import CTA from "@/components/shared/CTA";

export default function Home() {
  return (
    <section className="max-w-10/12 mx-auto px-6 py-10 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      <div className="">
        <p className="text-blue-600 font-semibold mb-2">Hello, I'm</p>

        <h1 className="text-5xl font-bold">K M Tafsin</h1>

        <h2 className="text-2xl mt-3 text-slate-600">Full Stack Developer</h2>

        <p className="mt-6 text-slate-500 pr-50 leading-7">
          Passionate about building responsive web applications using modern
          technologies while continuously expanding my knowledge in
          cybersecurity and software development.
        </p>

        <CTA></CTA>
      </div>

      <div className="flex justify-center">
        <Image
          src={CV}
          alt="Profile"
          width={700}
          height={500}
          className="rounded-full object-cover border-8 border-indigo-400 shadow-xl"
        ></Image>

      </div>
    </section>
  );
}

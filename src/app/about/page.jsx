import Image from "next/image";
import Link from "next/link";
import CV from "@/images/cv.png";
import {
  FaMapMarkerAlt,
  FaUserGraduate,
  FaBriefcase,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";
import CTA from "@/components/shared/CTA";



const AboutPage = () => {
  return (
    <section className="relative w-10/12 mx-auto py-10">
      {/* header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-blue-600 font-semibold tracking-[4px] text-sm uppercase">
          About Me
        </p>
        <h1 className="text-5xl font-bold mt-2 text-blue-900">Who I Am</h1>
        <p className="mt-3 text-slate-500 ">
          A passionate developer on a journey to build meaningful software and
          grow every single day.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src={CV}
              alt="K M Tafsin"
              width={360}
              height={360}
              className="rounded-full object-cover border-8 border-indigo-400  shadow-xl "
            />

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2  rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-lg ring-1 ring-blue-100">
              Full Stack Developer
            </div>
          </div>
        </div>

        {/* Bio & info */}
        <div>
          <p className="text-slate-600 text-justify">
            I am a Computer Science and Engineering student at Bangladesh Army
            International University of Science and Technology with a strong
            passion for Full Stack Web Development and Software Engineering. I
            enjoy building responsive and user-friendly web applications while
            continuously learning modern technologies. My goal is to become a
            skilled Full Stack Developer and create impactful software
            solutions, with a growing interest in Artificial Intelligence.
          </p>

          {/* info */}
          <div className="flex gap-3 mt-8">
            <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FaMapMarkerAlt className="text-sm" />
              </span>
              <div>
                <p className="text-xs text-slate-400 font-medium">Location</p>
                <p className="text-sm font-semibold text-slate-700">
                  Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FaUserGraduate className="text-sm" />
              </span>
              <div>
                <p className="text-xs text-slate-400 font-medium">
                  Availability
                </p>
                <p className="text-sm font-semibold text-slate-700">
                  CSE Student
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <FaBriefcase className="text-sm" />
              </span>
              <div>
                <p className="text-xs text-slate-400 font-medium">Location</p>
                <p className="text-sm font-semibold text-slate-700">
                  Open to Opportunities
                </p>
              </div>
            </div>
          </div>

          <CTA></CTA>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

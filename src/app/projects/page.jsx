import { projects } from "@/utils/projectsData";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <section className="max-w-10/12 mx-auto py-10 ">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold">Projects</h1>
        <p className="text-gray-400 max-w-3xl mx-auto ">
          A collection of projects I've built while learning full-stack
          development. Check my{" "}
          <Link
            href={"https://github.com/tafsin90"}
            target="_blank"
            className="text-blue-500 font-bold underline hover:cursor-pointer"
          >
            Github
          </Link>{" "}
          to see all.
        </p>
      </div>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`grid lg:grid-cols-2 gap-14 items-center border-b border-gray-300 py-20 ${
            index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}

          <div>
            <div className=" text-8xl font-black text-gray-500">
              {project.id}
            </div>

            <div className="overflow-hidden rounded-3xl border border-base-300">
              <Image
                src={project.image}
                width={1200}
                height={700}
                alt={project.title}
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}

          <div className="space-y-4">
            <h2 className="text-4xl font-bold">{project.title}</h2>

            <p className="text-gray-600 leading-8">{project.description}</p>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <div key={tech} className="badge badge-soft badge-info text-black px-3 py-3">
                  {tech}
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-3">
              <Link href={project.live} target="_blank" className="btn btn-primary">
                Live Demo
              </Link>

              <Link href={project.github} target="_blank" className="btn btn-outline">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsPage;

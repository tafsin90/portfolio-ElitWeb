import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/projectsData";

const ProjectsPage = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-20 space-y-36">
      <div className="text-center space-y-3 mb-20">
        <h1 className="text-5xl font-bold">Projects</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of projects I've built while learning full-stack
          development, cybersecurity, and embedded systems.
        </p>
      </div>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`grid lg:grid-cols-2 gap-14 items-center ${
            index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}

          <div className="relative group">
            <div className="absolute -top-10 -left-4 text-8xl font-black text-gray-800/20 select-none">
              {project.id}
            </div>

            <div className="overflow-hidden rounded-3xl border border-base-300">
              <Image
                src={project.image}
                width={1200}
                height={700}
                alt={project.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}

          <div className="space-y-6">
            <h2 className="text-4xl font-bold">{project.title}</h2>

            <p className="text-gray-400 leading-8">{project.description}</p>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-base-200 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-3">
              <Link href={project.live} className="btn btn-primary">
                Live Demo
              </Link>

              <Link href={project.github} className="btn btn-outline">
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

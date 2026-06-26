import SkillCard from "@/components/SkillCard";
import { skills } from "@/utils/skillsData";


export default function SkillsPage() {
  return (
    <section className="w-10/12 mx-auto py-10">
      <div className="text-center mb-16">
        <p className="text-blue-600 font-semibold tracking-[4px]">
          MY SKILLS
        </p>

        <h2 className="text-5xl font-bold mt-2">Technologies I Work With</h2>

      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <SkillCard title="Frontend Development" data={skills.frontend} />
        <SkillCard title="Tools & Version Control" data={skills.tools} />
        <SkillCard title="Currently Learning" data={skills.learning} />
        <SkillCard title="Future Learning Goals" data={skills.future} />
      </div>
    </section>
  );
}

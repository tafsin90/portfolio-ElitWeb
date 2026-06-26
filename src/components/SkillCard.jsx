const SkillCard = ({ title, data }) => {
  return (
    <div className="bg-white border border-slate-300 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>

      <div className="grid grid-cols-2 gap-4">
        {data.map((skill,index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-xl p-4 bg-base-300 hover:bg-base-200 transition"
          >
            <span className="text-3xl">{skill.icon}</span>
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;

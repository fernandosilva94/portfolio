const skillCategories = [
  {
    title: 'Backend',
    skills: ['Java 8/17+', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'PL/SQL'],
  },
  {
    title: 'Frontend',
    skills: ['Angular', 'TypeScript', 'Next.js'],
  },
  {
    title: 'Ferramentas',
    skills: ['Docker', 'Git', 'SQL Server'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Skills
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Tecnologias e ferramentas que utilizo no meu dia a dia como desenvolvedor.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              <h3 className="text-teal-400 font-bold text-lg mb-4 uppercase tracking-wider">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 text-sm bg-gray-700/50 rounded-md px-3 py-2"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

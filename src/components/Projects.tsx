import type { Project } from '../types'

const base = import.meta.env.BASE_URL

const projects: Project[] = [
  {
    title: 'StockControl',
    description:
      'Aplicação de controle de estoque desenvolvida com Angular 15 e TypeScript. Gerencia produtos, quantidades e movimentações de entrada e saída.',
    technologies: ['Angular', 'TypeScript', 'SCSS'],
    image: `${base}img/github_logo.png`,
    github: 'https://github.com/fernandosilva94/stock-control',
  },
  {
    title: 'WeatherApp',
    description:
      'Aplicação meteorológica que consome API de clima em tempo real, desenvolvida com Angular 15, TypeScript e SCSS.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'API REST'],
    image: `${base}img/github_logo.png`,
    github: 'https://github.com/fernandosilva94/weather-app',
  },
  {
    title: 'TopCasaFina Arquitetura',
    description:
      'Site responsivo MobileFirst para uma empresa de arquitetura. Utiliza HTML, CSS e Bootstrap com design moderno e adaptável.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    image: `${base}img/projTopCasaFina.png`,
    github: 'https://github.com/fernandosilva94/knowledge_in_Bootstrap',
  },
  {
    title: 'Tabela Nutricional',
    description:
      'Aplicação web para consulta de informações nutricionais. Utiliza JavaScript com AJAX para requisições assíncronas e tratamento de erros.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AJAX'],
    image: `${base}img/projPacientesNutricao.png`,
    github: 'https://github.com/fernandosilva94/knowledge_in_js',
  },
  {
    title: 'Barbearia',
    description:
      'Página institucional para uma barbearia, criada com HTML e CSS. Foco em estilização e estruturação semântica de tags.',
    technologies: ['HTML', 'CSS'],
    image: `${base}img/projBarbearia.png`,
    github: 'https://github.com/fernandosilva94/scope_site_html_css',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projetos
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi, desde os primeiros
            passos até aplicações mais robustas com Angular e TypeScript.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={`Captura de tela do projeto ${project.title}`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-500 text-sm font-semibold transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Código fonte
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

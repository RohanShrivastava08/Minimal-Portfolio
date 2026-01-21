import { resumeData } from "../data/resumeData"

function Projects() {
  const { projects = [] } = resumeData

  return (
    <section className="max-w-4xl mx-auto px-6">

      {/* Header */}
      <header className="mb-32 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Projects
        </h1>

        <p className="mt-4 mx-auto max-w-2xl
                      text-neutral-600 dark:text-neutral-400
                      leading-relaxed">
          Selected projects highlighting impact, performance improvements,
          and real-world problem solving.
        </p>
      </header>

      {/* Projects list */}
      <div className="space-y-32">
        {projects.map((project, index) => (
          <article key={index} className="relative">

            {/* Index */}
            <span className="block mb-4 text-xs font-medium tracking-wide
                             text-neutral-400 dark:text-neutral-500">
              P-{String(index + 1).padStart(2, "0")}
            </span>

            {/* Title */}
            <h2 className="text-2xl font-medium tracking-tight">
              {project.name}
            </h2>

            {/* Metrics */}
            <div className="mt-4 flex flex-wrap gap-3">
              {project.metrics.map((metric, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full
                             border border-neutral-300 dark:border-neutral-700
                             text-neutral-600 dark:text-neutral-400"
                >
                  {metric}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-6 h-px w-full
                            bg-neutral-200 dark:bg-neutral-800" />

            {/* Impact points */}
            <div className="mt-6 space-y-3 max-w-3xl">
              {project.points.map((point, idx) => (
                <p
                  key={idx}
                  className="text-sm leading-relaxed
                             text-neutral-700 dark:text-neutral-300"
                >
                  {point}
                </p>
              ))}
            </div>

            {/* Tech stack */}
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs tracking-wide
                             text-neutral-500 dark:text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

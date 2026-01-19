import { resumeData } from "../data/resumeData"

function Projects() {
  const { projects = [] } = resumeData

  return (
    <section className="max-w-4xl mx-auto">

      {/* Page Header */}
      <header className="mb-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Projects
        </h1>
        <p className="mt-4 mx-auto max-w-2xl text-neutral-600 dark:text-neutral-400">
          A selection of projects where I focused on clean architecture,
          performance, and real-world problem solving.
        </p>
      </header>

      {/* Projects List */}
      <div className="space-y-20">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-4">

            {/* Project Name */}
            <h2 className="text-lg font-medium">
              {project.name}
            </h2>

            {/* Description */}
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="text-sm text-neutral-500">
              <span className="font-medium text-neutral-600 dark:text-neutral-400">
                Tech:
              </span>{" "}
              {project.tech.join(" · ")}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

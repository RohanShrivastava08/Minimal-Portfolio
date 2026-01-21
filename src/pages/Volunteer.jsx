import { resumeData } from "../data/resumeData"

function Volunteer() {
  const { volunteer = [] } = resumeData

  return (
    <section className="max-w-4xl mx-auto px-6">

      {/* Header */}
      <header className="mb-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Volunteering
        </h1>

        <p className="mt-4 mx-auto max-w-2xl
                      text-neutral-600 dark:text-neutral-400
                      leading-relaxed">
          Leadership roles, community initiatives, and contributions
          beyond formal work experience.
        </p>
      </header>

      {/* Volunteer Entries */}
      <div className="space-y-10">
        {volunteer.map((item, index) => (
          <div
            key={index}
            className="relative pl-5 py-4
                       border-l border-neutral-200
                       dark:border-neutral-800"
          >
            {/* Role */}
            <h2 className="text-base font-medium leading-snug">
              {item.role}
            </h2>

            {/* Organization + Duration */}
            <div className="mt-1 flex flex-col sm:flex-row
                            sm:items-center sm:gap-2 text-sm">
              <span className="text-neutral-700 dark:text-neutral-300">
                {item.organization}
              </span>

              <span className="hidden sm:inline text-neutral-400">•</span>

              <span className="text-neutral-500">
                {item.duration}
              </span>
            </div>

            {/* Description */}
            <p className="mt-3 max-w-3xl
                          text-sm leading-relaxed
                          text-neutral-700 dark:text-neutral-300">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Volunteer

import { resumeData } from "../data/resumeData"

function Volunteer() {
  const { volunteer = [] } = resumeData

  return (
    <section className="max-w-4xl mx-auto">

      {/* Page Header */}
      <header className="mb-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Volunteering
        </h1>
        <p className="mt-4 mx-auto max-w-2xl text-neutral-600 dark:text-neutral-400">
          Leadership roles, community initiatives, and contributions beyond
          formal work experience.
        </p>
      </header>

      {/* Volunteer List */}
      <div className="space-y-16">
        {volunteer.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">

            {/* Role + Organization */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h2 className="text-lg font-medium">
                  {item.role}
                </h2>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {item.organization}
                </p>
              </div>

              <span className="text-sm text-neutral-500">
                {item.duration}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Volunteer

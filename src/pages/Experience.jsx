import { resumeData } from "../data/resumeData"

function Experience() {
  const { experience = [] } = resumeData

  return (
    <section className="max-w-4xl mx-auto">

      {/* Page Header (CENTERED) */}
      <header className="mb-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Experience
        </h1>
        <p className="mt-4 mx-auto max-w-2xl text-neutral-600 dark:text-neutral-400">
          A snapshot of my professional journey, internships, and hands-on
          experience building real-world web applications.
        </p>
      </header>

      {/* Experience List */}
      <div className="space-y-14">
        {experience.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">

            {/* Role + Company + Duration */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h2 className="text-lg font-medium">
                  {item.role}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {item.company}
                </p>
              </div>

              <span className="text-sm text-neutral-500">
                {item.duration}
              </span>
            </div>

            {/* Details */}
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed
                           text-neutral-700 dark:text-neutral-300 max-w-3xl">
              {item.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

import { resumeData } from "../data/resumeData"

function Education() {
  const { education = [] } = resumeData

  return (
    <section className="max-w-4xl mx-auto px-6">

      {/* Header */}
      <header className="mb-24 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Education
        </h1>

        <p className="mt-4 mx-auto max-w-2xl
                      text-neutral-600 dark:text-neutral-400
                      leading-relaxed">
          Academic background that shaped my technical foundation,
          analytical thinking, and engineering mindset.
        </p>
      </header>

      {/* Education Entries */}
      <div className="space-y-20">
        {education.map((item, index) => (
          <div
            key={index}
            className="relative pl-6"
          >
            {/* Subtle vertical accent */}
            <div className="absolute left-0 top-1
                            h-full w-px
                            bg-neutral-200 dark:bg-neutral-800" />

            {/* Content */}
            <div className="space-y-4">

              {/* Course */}
              <h2 className="text-lg font-medium leading-snug">
                {item.course}
              </h2>

              {/* Stream */}
              <p className="text-sm
                            text-neutral-700 dark:text-neutral-300">
                {item.stream}
              </p>

              {/* Institute */}
              <p className="text-sm
                            text-neutral-600 dark:text-neutral-400">
                {item.institute}
              </p>

              {/* Duration + Score */}
              <p className="text-xs text-neutral-500">
                {item.duration}
                {item.score && ` · ${item.score}`}
              </p>

              {/* Highlights */}
              <ul className="pt-3 space-y-2 max-w-3xl">
                {item.description.map((line, idx) => (
                  <li
                    key={idx}
                    className="relative pl-4
                               text-sm leading-relaxed
                               text-neutral-700 dark:text-neutral-300"
                  >
                    <span
                      className="absolute left-0 top-2
                                 h-1 w-1 rounded-full
                                 bg-neutral-400 dark:bg-neutral-500"
                    />
                    {line}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education

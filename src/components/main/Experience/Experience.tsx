import { experienceItems } from "../../../data/experienceItems";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  // const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 bg-[#03001C]/80 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <ol className="group/list">
        {experienceItems.map((data, id) => (
          <ExperienceItem data={data} key={id} />
        ))}
      </ol>
      <div className="mt-12">
        <a
          className="inline-flex items-baseline font-normal leading-tight text-slate-200 hover:text-[#B7ADFF] focus-visible:text-[#B7ADFF] group/link text-base transition"
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Resume (opens in a new tab)"
          title="View Full Resume (opens in a new tab)"
        >
          <span>
            View Full{" "}
            <span className="inline-block">
              Resume (rus)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 mb-[2px] ml-2 shrink-0 transition-transform group-hover/link:-translate-y-[2px] group-hover/link:translate-x-[2px] group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none translate-y-px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};

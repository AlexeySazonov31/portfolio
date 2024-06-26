import { SkillItem } from "./SkillItem";

interface ExperienceItem {
  header: string;
  position: string;
  company: string;
  content: string;
  skills: string[];
  link: string;
}

const experienceItems: ExperienceItem[] = [
  {
    header: "2024 — pesent",
    position: "Junior Fullstack Engineer",
    company: "BHub · freelance",
    content: "As a freelancer at BHub, I continue to build web solutions using Javascript and PHP. I use tools like Tilda, Webflow, ManyChat, and Shopify to deliver projects efficiently. Details are provided below.",
    skills: ["Javascript", "PHP", "Shopify", "Tilda", "React", "Webflow", "Meta Ads", "ManyChat"],
    link: "https://www.linkedin.com/company/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D1%85%D0%B0%D0%B1/",
  },
  {
    header: "2022 — 2024",
    position: "Junior Fullstack Engineer",
    company: "BHub",
    content: "At BusinessHub, I developed web applications using Javascript, PHP, HTML, CSS, and React. I also worked with platforms like Tilda, Webflow, ManyChat, and Shopify to create custom web solutions. Additionally, I optimized Facebook Ads and managed contractors to ensure project success.",
    skills: ["Javascript", "PHP", "Shopify", "Tilda", "React", "Webflow", "Meta Ads", "ManyChat"],
    link: "https://www.linkedin.com/company/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D1%85%D0%B0%D0%B1/",
  },
  {
    header: "AUG — OCT 2022",
    position: "Junior Frontend Engineer",
    company: "Fiverr, Kwork · freelance",
    content:
      "During my time freelancing on platforms like Fiverr and Kwork, I focused on using HTML, CSS, and Javascript to create customized websites. I built and fine-tuned these sites to ensure they worked smoothly, handling everything from essential components to overall functionality across various projects.",
    skills: ["HTML", "CSS", "Javascript"],
    link: "https://www.fiverr.com/",
  },
];

export const Experience = () => {
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

function ExperienceItem({ data }: { data: ExperienceItem }) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header
          className="z-10 mb-2 mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label={data.header}
        >
          {data.header}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <a
                className="inline-flex items-baseline font-normal leading-snug text-slate-200 hover:text-[#B7ADFF] focus-visible:text-[#B7ADFF] group/link text-base transition"
                href={data.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${data.position} at ${data.company} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {data.position} ·{" "}
                  <span className="inline-block">
                    {data.company}
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
          </h3>
          <p className="mt-2 text-sm leading-normal font-extralight text-slate-400 tracking-wide">
            {data.content}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {data.skills.map((elem) => (
              <SkillItem>{elem}</SkillItem>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

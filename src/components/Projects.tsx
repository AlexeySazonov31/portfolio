import { SkillItem } from "./SkillItem";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected commercial projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 bg-[#03001C]/80 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <ol className="group/list">
        {projectsItems.map((data, id) => (
          <ProjectItem data={data} key={id} />
        ))}
      </ol>
      <div className="py-1 mb-14">
        <h2 className="text-2xl text-slate-200">Pet-Projects</h2>
        <a
          className="mt-3 inline-flex items-baseline font-normal leading-tight text-slate-200 hover:text-[#B7ADFF] focus-visible:text-[#B7ADFF] group/link text-base transition"
          href="https://github.com/AlexeySazonov31"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View on GitHub (opens in a new tab)"
          title="View on GitHub (opens in a new tab)"
        >
          <span>
            View on GitHub{" "}
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
        </a>
      </div>
      <ol className="group/list">
        {petProjectsItems.map((data, id) => (
          <ProjectItem data={data} key={id} />
        ))}
      </ol>
    </section>
  );
};

function ProjectItem({ data }: { data: ProjectItem }) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <a
                className="inline-flex items-baseline font-normal leading-snug text-slate-200 hover:text-[#B7ADFF] focus-visible:text-[#B7ADFF] group/link text-base transition"
                href={data.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${data.title} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span className="inline-block">
                  {data.title}{" "}
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
        <img
          alt={data.title + " image"}
          loading="lazy"
          width="200"
          height="48"
          decoding="async"
          data-nimg="1"
          className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/15 sm:order-1 sm:col-span-2 sm:translate-y-1"
          style="color:transparent"
          src={data.imageSrc}
        />
      </div>
    </li>
  );
}

// * projects data:

interface ProjectItem {
  title: string;
  content: string;
  skills: string[];
  link: string;
  imageSrc: string;
}

// TODO contents for commercial projects
const projectsItems: ProjectItem[] = [
  {
    title: "GummiMi Store",
    content:
      "Crafted a visually captivating Shopify site for Gummimi's Hеmp Gummies, emphasizing meticulous design and graphics. The project successfully implemented a unique brand identity, enhancing user engagement and driving sales through an immersive online experience.",
    skills: ["PHP", "Shopify"],
    link: "https://gummimi.com/",
    imageSrc: "/projects/gummimi.jpg",
  },
  // {
  //   title: "Gifto Box Store",
  //   content:
  //     "Created and managed a high-quality Shopify store offering Gift Baskets for Women, featuring 11 unique items designed for a spa experience. Led the project with teamwork and collaboration.",
  //   skills: ["PHP", "Shopify", "Meta Ads", "SmartSender"],
  //   link: "https://gifto.vip/",
  //   imageSrc: "/projects/gifto.jpg",
  // },
  {
    title: "FluidFuel Info",
    content:
      "Create a Webflow site to elevate the FluidFuel brand, specializing in electrolyte powder packets. Develop the project with a focus on brand development and user-friendly design, emphasizing the product's nutritional benefits and travel-friendly convenience.",
    skills: ["Javascript", "HTML", "CSS", "Webflow"],
    link: "https://www.fluidfuel.co/",
    imageSrc: "/projects/fluid.jpg",
  },
  {
    title: "Remedial Pax Store",
    content:
      "Developed a Shopify store specializing in Remedial Pax creams and serums. Custom widgets and add-ons were integrated to enhance user experience and streamline product selection, providing a seamless shopping journey.",
    skills: ["PHP", "Shopify", "ManyChat"],
    link: "https://remedial.store/",
    imageSrc: "/projects/remedial.jpg",
  },
];

// TODO fill pet-projects
const petProjectsItems: ProjectItem[] = [
  {
    title: "Search Movies App by TMDB",
    content:
      "Created a web app using TypeScript, React, React Query, React Router Dom, Axios, and Mantine. It lets users browse and pick movies effortlessly, using modern tech for a smooth, user-friendly experience.",
    skills: ["TypeScript", "React", "React Query", "Mantine", "Node.js", "Express (Proxy Server)"],
    link: "https://sas-movies.vercel.app/",
    imageSrc: "/projects/movies.jpg",
  },
  {
    title: "Discord Clone App",
    content:
      "Developed a Discord Clone app using Next.js, TypeScript, React, React Query, Socket.io, Tailwind, Shadcn/ui, ORM - Prisma, MySQL, Uploadthing, Clerk, and LiveKit. It allows users to chat and connect seamlessly, leveraging a robust tech stack for a modern experience.",
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "React Query",
      "Socket.io",
      "Tailwind",
      "Shadcn/ui",
      "ORM - Prisma",
      "MySQL",
      "Clerk Auth",
    ],
    link: "https://disclone.sasdev.space/",
    imageSrc: "/projects/disclone.jpg",
  },
  {
    title: "Choice App: Decision Support",
    content:
      "Built the Choice app using TypeScript, React, React Router Dom, and Tailwind CSS. It enables users to make selections effortlessly, leveraging modern technologies for a streamlined and intuitive experience.",
    skills: ["TypeScript", "React", "React Router Dom", "Tailwind"],
    link: "https://choice-react.vercel.app/",
    imageSrc: "/projects/choice.jpg",
  },
  {
    title: "Super Mario Clone",
    content:
      "Developed a web-based Super Mario Clone using Kaboom, blending classic gameplay with modern web technologies for an engaging experience.",
    skills: ["Kaboom", "Node.js", "Express"],
    link: "https://mario-clone.vercel.app/",
    imageSrc: "/projects/mario.jpg",
  },
];

import { useLocation } from "preact-iso";
import { ReactElement, useEffect, useState } from "preact/compat";
import SocialIcons from "../lib/social-icons";

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

export function Header() {
  const { url } = useLocation();

  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  const [active, setActive] = useState<string>("about");

  let about: HTMLElement | undefined;
  let experience: HTMLElement | undefined;
  let projects: HTMLElement | undefined;

  useEffect(() => {
    about = document.getElementById("about");
    experience = document.getElementById("experience");
    projects = document.getElementById("projects");

    const handle = (elem: Element) => {
      if (elem) {
        setIsAboutVisible(elementIsVisibleInViewport(about, true));
        setIsExperienceVisible(elementIsVisibleInViewport(experience, true));
        setIsProjectsVisible(elementIsVisibleInViewport(projects));
      }
    };

    window.addEventListener("scroll", () => handle(about));
    // Initial check on component mount
    handle(about);

    return () => {
      window.removeEventListener("scroll", () => handle(about));
    };
  }, []);

  useEffect(() => {

    if(isAboutVisible){
      setActive("about");
    } else if (isExperienceVisible && !isProjectsVisible ){
      setActive("experience");
    } else if (isProjectsVisible){
      setActive("projects");
    } 

    console.log(isAboutVisible)
    console.log(isExperienceVisible)
    console.log(isProjectsVisible)

  }, [isAboutVisible, isExperienceVisible, isProjectsVisible])

  return (
    <>
      <div>
        <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Sazonau Aliaksei</a>
        </h1>
        <h2 class="mt-3 text-lg font-normal tracking-tight text-slate-200 sm:text-xl">
          Junior+ Frontend Engineer
        </h2>
        <p class="mt-4 max-w-xs leading-normal text-slate-400">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <nav class="nav hidden lg:block" aria-label="In-page jump links">
          <ul class="mt-16 w-max">
            {["about", "experience", "projects"].map((elem, index) => (
              <li key={index}>
                <a
                  data-active={active === elem}
                  class="group flex items-center py-3"
                  href={`#${elem}`}
                >
                  <span class="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-data-[active='true']:w-16 group-data-[active='true']:bg-slate-200 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none delay-100"></span>
                  <span class="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 group-data-[active='true']:text-slate-200 transition-colors delay-100">
                    {elem}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
        {socialData.map((elem, index) => (
          <SocialIcon data={elem} key={index} />
        ))}
      </ul>
    </>
    // <nav>
    //   <a href="/" class={url == "/" && "active"}>
    //     Home
    //   </a>
    //   <a href="/404" class={url == "/404" && "active"}>
    //     404
    //   </a>
    // </nav>
  );
}

interface SocialIconDataProps {
  link: string;
  ariaLabel: string;
  title: string;
  icon: ReactElement;
}

const socialData: SocialIconDataProps[] = [
  {
    link: "https://github.com/AlexeySazonov31",
    ariaLabel: "GitHub (opens in a new tab)",
    title: "GitHub",
    icon: SocialIcons.github,
  },
  {
    link: "https://www.linkedin.com/in/alexey-sazonov-089a0023a/",
    ariaLabel: "Linkedin (opens in a new tab)",
    title: "Linkedin",
    icon: SocialIcons.linkedin,
  },
  {
    link: "https://t.me/alexeusazonov",
    ariaLabel: "Telegram (opens in a new tab)",
    title: "Telegram",
    icon: SocialIcons.telegram,
  },
  {
    link: "https://wa.me/+375447410980",
    ariaLabel: "Whatsapp (opens in a new tab)",
    title: "Whatsapp",
    icon: SocialIcons.whatsapp,
  },
  {
    link: "tel:+375447410980",
    ariaLabel: "Phone (opens in a new tab)",
    title: "Phone",
    icon: SocialIcons.phone,
  },
  {
    link: "mailto:name@sazonaualiaksei@gmail.com",
    ariaLabel: "Mail (opens in a new tab)",
    title: "Mail",
    icon: SocialIcons.mail,
  },
];

function SocialIcon({ data }: { data: SocialIconDataProps }) {
  return (
    <li class="mr-5 text-xs shrink-0">
      <a
        class="block hover:text-slate-200"
        href={data.link}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={data.ariaLabel}
        title={data.title}
      >
        <span class="sr-only">{data.title}</span>
        {data.icon}
      </a>
    </li>
  );
}

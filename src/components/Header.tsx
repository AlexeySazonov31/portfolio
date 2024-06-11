import { useLocation } from "preact-iso";
import { ReactElement } from "preact/compat";
import SocialIcons from "../lib/social-icons";

export function Header() {
  const { url } = useLocation();

  console.log(url);

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
              <li key={index} data-active={url === `/#${elem}`}>
                <a class="group flex items-center py-3" href={`#${elem}`}>
                  <span class="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span class="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {elem.toLocaleUpperCase()}
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
    link: "mailto:name@sazonaualiaksei@gmail.com",
    ariaLabel: "Gmail (opens in a new tab)",
    title: "Gmail",
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

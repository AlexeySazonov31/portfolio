import { ReactElement } from "preact/compat";
import { useActiveElementByIds } from "../hooks/use-active-element-by-ids";
import { useTranslation, Trans } from "react-i18next";

import SocialIcons from "../lib/social-icons";

export function Header() {
  const active = useActiveElementByIds(["about", "experience", "projects"]);

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    console.log(i18n.language);
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <>
      <div>
        <a href="/">
          <div className="flex flex-row flex-nowrap gap-4 items-center">
            <img
              className="w-24 h-24 rounded-xl pointer-events-none"
              src="/avatar.jpg"
              alt="Avatar"
            />
            <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-[44px] leading-[45px]">
              <Trans i18nKey="header.name"></Trans>
            </h1>
          </div>
        </a>
        <h2 class="mt-3 text-lg font-normal tracking-tight text-slate-200 sm:text-xl">
          Junior+ Fullstack Engineer
        </h2>
        <p class="mt-3 max-w-xs text-slate-400 font-extralight leading-7">
          {t("header.shortDesc")}
        </p>
        <nav class="nav hidden lg:block" aria-label="In-page jump links">
          <ul class="mt-12 w-max">
            {(t("header.sectionsNames", { returnObjects: true }) as []).map((elem, index) => (
              <li key={index}>
                <a
                  data-active={active === elem}
                  class="group flex items-center py-3"
                  href={`#${elem}`}
                >
                  <span class="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-data-[active='true']:w-16 group-data-[active='true']:bg-slate-200 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none delay-100"></span>
                  <span class="text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 group-data-[active='true']:text-slate-200 transition-colors delay-100">
                    {elem}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li class="mr-5 pr-5 text-xs shrink-0 border-r-[1px] border-r-slate-600 cursor-pointer select-none">
          <span
            className="block text-slate-100 hover:text-white transition hover:scale-110 border-[1px] rounded w-7 py-[2px] border-slate-100 text-center"
            onClick={() => changeLanguage()}
          >
            <span class="sr-only">title</span>
            {i18n.language === "en" ? "ru" : "en"}
          </span>
        </li>
        {socialData.map((elem, index) => (
          <SocialIcon data={elem} key={index} />
        ))}
      </ul>
    </>
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
        className="block text-slate-100 hover:text-white transition hover:scale-110"
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

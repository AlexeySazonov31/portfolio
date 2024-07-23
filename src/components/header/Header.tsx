import { useActiveElementByIds } from "../../hooks/use-active-element-by-ids";
import { useTranslation, Trans } from "react-i18next";

import { LangCvButtons } from "./LangCvButtons";
import { SocialIcon } from "./SocialIcon";

import { socialData } from "../../lib/data/socialData";
import { cn } from "../../lib/utils";

export function Header() {
  const active = useActiveElementByIds(["about", "experience", "projects"]);
  const { t, i18n } = useTranslation();

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
            <h1 class={cn("text-4xl font-bold tracking-tight text-slate-200 leading-[45px]", i18n.language === "en" ? "sm:text-[44px]" : "sm:text-[42px]")}>
              <Trans i18nKey="header.name"></Trans>
            </h1>
          </div>
        </a>
        <h2 class="mt-3 text-lg font-normal font-poppins tracking-tight text-slate-200 sm:text-xl">
          Pre-Middle Fullstack Engineer
        </h2>
        <p class={cn("mt-3 max-w-xs text-slate-400 font-extralight", i18n.language === "en" ? "leading-7" : "text-[17px] pb-[5px]")}>
          {t("header.shortDesc")}
        </p>
        <nav class="nav hidden lg:block" aria-label="In-page jump links">
          <ul class="mt-12 w-max">
            {(t("header.sectionsNames", { returnObjects: true }) as []).map(
              (elem: { id: string; name: string }, index) => (
                <li key={index}>
                  <a
                    data-active={active === elem.id}
                    class="group flex items-center py-3"
                    href={`#${elem.id}`}
                  >
                    <span class="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-data-[active='true']:w-16 group-data-[active='true']:bg-slate-200 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none delay-100"></span>
                    <span class="text-xs font-semibold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 group-data-[active='true']:text-slate-200 transition-colors delay-100">
                      {elem.name}
                    </span>
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
      <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
        <LangCvButtons />
        {socialData.map((elem, index) => (
          <SocialIcon data={elem} key={index} />
        ))}
      </ul>
    </>
  );
}

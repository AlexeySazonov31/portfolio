import { useTranslation } from "react-i18next";

export const LangCvButtons = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <>
      <li class="mr-4 text-xs shrink-0 cursor-pointer">
        <span
          className="block text-slate-100 hover:text-white transition hover:scale-110 border-[1px] rounded w-7 py-[2px] border-slate-100 text-center select-none font-poppins"
          onClick={() => changeLanguage()}
        >
          <span class="sr-only">language</span>
          {i18n.language === "en" ? "ru" : "en"}
        </span>
      </li>
      <li class="mr-5 pr-5 text-xs shrink-0 border-r-[1px] border-r-slate-600 cursor-pointer select-none">
        <a
          className="block text-slate-100 hover:text-white transition hover:scale-110 border-[1px] rounded w-7 py-[2px] border-slate-100 text-center font-poppins"
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="CV (opens in a new tab)"
          title="CV"
        >
          <span class="sr-only">CV</span>
          cv
        </a>
      </li>
    </>
  );
};

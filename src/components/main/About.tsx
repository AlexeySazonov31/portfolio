import { Trans, useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative -top-24 pt-24 text-slate-400 font-extralight leading-7"
      id="about"
      aria-label="About me"
    >
      <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 bg-[#03001C]/80 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {t("main.aboutSection.name")}
        </h2>
      </div>

      <Trans i18nKey="main.aboutSection.content" components={{ span: <span />, p: <p /> }}></Trans>

    </section>
  );
};

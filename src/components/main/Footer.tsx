import { Trans } from "react-i18next";

export const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 font-extralight">
      <Trans i18nKey="main.footer" components={{ a: <a />, p: <p /> }}></Trans>
    </footer>
  );
};

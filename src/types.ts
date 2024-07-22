import { ReactElement } from "preact/compat";

export interface SocialIconDataProps {
  link: string;
  ariaLabel: string;
  title: string;
  icon: ReactElement;
}

export interface ExperienceItem {
  header: string;
  position: string;
  company: string;
  content: string;
  skills: string[];
  link: string;
}
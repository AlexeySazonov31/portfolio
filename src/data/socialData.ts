import { SocialIconDataProps } from "../types";
import SocialIcons from "../lib/social-icons";

export const socialData: SocialIconDataProps[] = [
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
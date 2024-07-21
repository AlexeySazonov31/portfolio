import { SocialIconDataProps } from "../types";

export const SocialIcon = ({ data }: { data: SocialIconDataProps }) => {
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

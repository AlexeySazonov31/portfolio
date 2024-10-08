import { ReactNode } from "preact/compat";

export const SkillItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-[#B7ADFF]">
        {children}
      </div>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 font-extralight">
      <p>
        Coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-light text-slate-400 hover:text-[#B7ADFF] focus-visible:text-[#B7ADFF] transition"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code.
        </a>{" "}
        Built with{" "}
        <a
          href="https://preactjs.com/"
          className="font-light text-slate-400 hover:text-[#B7ADFF] focus-visible:text-[#B7ADFF] transition"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Preact (opens in a new tab)"
        >
          Preact
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-light text-slate-400 hover:text-[#B7ADFF] focus-visible:text-[#B7ADFF] transition"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </a>
        . All text is set in the{" "}
        <a
          href="https://fonts.google.com/specimen/Poppins/"
          className="font-light text-slate-400 hover:text-[#B7ADFF] focus-visible:text-[#B7ADFF] transition"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Poppins (opens in a new tab)"
        >
          Poppins
        </a>{" "}
        typeface.
      </p>
    </footer>
  );
};

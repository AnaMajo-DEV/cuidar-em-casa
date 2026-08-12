type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[#5D7C59] text-white shadow-md hover:-translate-y-1 hover:bg-[#4B6547] hover:shadow-xl",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:-translate-y-1 hover:border-[#5D7C59] hover:text-[#5D7C59]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}
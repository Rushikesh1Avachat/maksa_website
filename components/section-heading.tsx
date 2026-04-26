type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <div className="text-xs uppercase tracking-[0.35em] text-[#9a7156]">{eyebrow}</div>
      <h2 className="mt-2 text-3xl font-semibold text-[#1f1612]">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-6 text-[#685246]">{description}</p> : null}
    </div>
  );
}


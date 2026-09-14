type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

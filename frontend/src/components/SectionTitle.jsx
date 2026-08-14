export default function SectionTitle({ title, subtitle, link }) {
  return <div className="section-title"><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{link}</div>;
}

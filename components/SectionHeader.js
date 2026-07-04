export default function SectionHeader({eyebrow,title,children,center=false}){
  return <div className={center?'section-head center':'section-head'}><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{children&&<p>{children}</p>}</div>
}

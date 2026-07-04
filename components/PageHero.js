export default function PageHero({eyebrow,title,text,img='/images/hero-health-intelligence.png'}){
  return <section className="page-hero"><div className="container page-hero-inner"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{text}</p></div><div className="visual-card"><img src={img} alt={title}/></div></div></section>
}

import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { site } from "../data/site";

export default function Services() {
  return <>
    <section className="section shell page-head"><div className="section-kicker">SERVICES / WHAT WE BUILD</div><div className="intro-grid"><Reveal><h1 className="display">Hire Bytes for the part that should not be duct-taped.</h1></Reveal><Reveal><p className="body-xl">Full-stack products, AI applications, business automation, custom software and modernization — scoped around an outcome.</p></Reveal></div></section>
    <section className="section architecture"><div className="shell"><div className="service-list">{site.services.map(s=><article className="service" key={s.number}><span className="service-num">{s.number}</span><div><h2>{s.title}</h2><p>{s.text}</p></div><span className="service-arrow">↗</span></article>)}</div></div></section>
    <section className="section shell"><div className="section-kicker">02 / GOOD FIT</div><div className="intro-grid"><Reveal><h2 className="display">A hard problem with a clear owner.</h2></Reveal><div><p className="body-xl">The best engagements have someone who knows why the product needs to exist and can make decisions quickly.</p><p className="body-copy">Send the context. We can start from the problem rather than forcing it into a package.</p></div></div></section>
    <section className="contact-section"><div className="shell contact-grid"><h2 className="display">Tell us what needs fixing.</h2><Link className="button" to="/work">See relevant work ↗</Link></div></section>
  </>;
}
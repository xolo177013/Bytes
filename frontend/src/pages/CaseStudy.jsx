import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import ProjectPreview from "../components/ProjectPreview";
import { projects } from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <section className="section shell page-head"><h1 className="display">Project not found.</h1><Link className="project-link" to="/work">Back to work →</Link></section>;

  return (
    <>
      <section className="section shell page-head">
        <div className="section-kicker">CASE {project.number} / {project.category}</div>
        <Reveal><h1 className="display">{project.title}</h1></Reveal>
        <div className="intro-grid case-intro"><Reveal><p className="body-xl">{project.summary}</p></Reveal><div className="manifest"><div className="manifest-row"><small>STACK</small><strong>{project.stack.join(" · ")}</strong></div><div className="manifest-row"><small>ROLE</small><strong>Product thinking · interface · engineering</strong></div></div></div>
      </section>
      <section className="section work-section"><div className="shell"><ProjectPreview project={project} /></div></section>
      <section className="section shell"><div className="intro-grid"><div><div className="section-kicker">01 / PROBLEM</div><h2 className="display">Solve the actual constraint.</h2></div><div><p className="body-xl">{project.problem}</p><p className="body-copy">{project.solution}</p></div></div></section>
      <section className="section architecture"><div className="shell"><div className="section-kicker">02 / SYSTEM SHAPE</div><div className="system">{project.architecture.map((x,i)=><div className="sys-row" key={x.title}><span className="num">0{i+1}</span><div><h3>{x.title}</h3><p>{x.text}</p></div></div>)}</div></div></section>
      <section className="contact-section"><div className="shell contact-grid"><h2 className="display">Have a similar problem?</h2><Link className="button" to="/contact">Talk to Bytes ↗</Link></div></section>
    </>
  );
}
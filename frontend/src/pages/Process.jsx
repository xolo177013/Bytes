import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const steps = [
  ["01","Understand","Goals, users, constraints, existing systems and success criteria. We leave with a problem we can actually solve."],
  ["02","Model","Map product flows, data boundaries, APIs, permissions and the technical risks worth testing early."],
  ["03","Build","Ship the smallest complete product slice with production behavior rather than a throwaway prototype."],
  ["04","Validate","Test edge cases, accessibility, responsive behavior, performance and the parts real users will stress."],
  ["05","Ship","Deploy cleanly, observe what happens, document decisions and iterate using evidence."]
];

export default function Process() {
  return <>
    <section className="section shell page-head"><div className="section-kicker">PROCESS / DELIVERY</div><div className="intro-grid"><Reveal><h1 className="display">Less ceremony.<br />More useful software.</h1></Reveal><Reveal><p className="body-xl">Our process is deliberately lean. Each phase exists to remove a specific kind of product or engineering risk before it gets expensive.</p></Reveal></div></section>
    <section className="section architecture"><div className="shell"><div className="section-kicker">01 / FIVE MOVES</div><div className="system">{steps.map(([n,t,d])=><Reveal key={n} className="sys-row"><span className="num">{n}</span><div><h2>{t}</h2><p>{d}</p></div></Reveal>)}</div></div></section>
    <section className="section shell"><div className="section-kicker">02 / ENGAGEMENT</div><div className="intro-grid"><Reveal><h2 className="display">Direct access to the people doing the work.</h2></Reveal><div><p className="body-xl">No handoff maze between strategy, design and engineering.</p><p className="body-copy">For an agency, the advantage is simple: the people making architectural decisions stay close to product decisions and the client.</p></div></div></section>
    <section className="contact-section"><div className="shell contact-grid"><div><div className="section-kicker contact-kicker">03 / CONTACT</div><h2 className="display">Start with the constraint.</h2></div><Link className="button" to="/contact">Talk to Bytes ↗</Link></div></section>
  </>;
}
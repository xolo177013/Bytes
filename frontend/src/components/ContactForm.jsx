import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({name:"",email:"",company:"",message:""});
  const [status, setStatus] = useState("");

  function update(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  async function submit(e) {
    e.preventDefault();
    setStatus("Sending…");
    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error("Request failed");
      setForm({name:"",email:"",company:"",message:""});
      setStatus("Thanks — we’ll get back to you.");
    } catch {
      setStatus("Could not send right now. Email us directly at sougat141@gmail.com.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <input name="name" value={form.name} onChange={update} placeholder="Your name" required />
      <input name="email" type="email" value={form.email} onChange={update} placeholder="Work email" required />
      <input name="company" value={form.company} onChange={update} placeholder="Company (optional)" />
      <textarea name="message" value={form.message} onChange={update} placeholder="What are you trying to build or improve?" required />
      <button className="button" type="submit">Send enquiry ↗</button>
      {status && <p>{status}</p>}
    </form>
  );
}
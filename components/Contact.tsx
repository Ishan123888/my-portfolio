"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Sparkles, Check, Loader2, Phone, Linkedin, Github, MessageCircle } from "lucide-react"; // 'lucide-react' ලෙස නිවැරදි කරන ලදී
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/constants"; 

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    contact_number: "",
    message: "",
  });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSent(true);
      setFormData({ from_name: "", reply_to: "", contact_number: "", message: "" });
      form.current.reset();
      
      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/ishan-ekanayaka-6682ba344",
      color: "hover:text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/ishan123888",
      color: "hover:text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      link: "https://wa.me/94785493978",
      color: "hover:text-green-500",
      bg: "bg-green-500/10"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute inset-0 -z-10">
        {/* Canonical Classes Fixed: w-125, h-125 */}
        <div className="absolute top-1/2 left-1/4 w-125 h-125 bg-blue-500/10 rounded-full blur-[120px]" />
        {/* Canonical Classes Fixed: w-100, h-100 */}
        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Card Container */}
          <div className="relative bg-slate-900/50 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl">
            {/* Background Line Pattern Fixed: bg-size-[20px_20px] */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px]" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16">
              
              {/* Left Column: Content & Socials */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-inner"
                  >
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-semibold text-blue-400 uppercase tracking-[0.2em]">Contact Me</span>
                  </motion.div>
                  
                  <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                    Let&apos;s build <br />
                    <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic">
                      the future together.
                    </span>
                  </h2>
                  <p className="text-slate-400 text-lg md:text-xl max-w-md leading-relaxed">
                    Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities.
                  </p>
                </div>

                {/* Direct Contact Info */}
                <div className="grid gap-4">
                  <div className="group flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="bg-blue-500/20 p-4 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                      <p className="text-white font-medium text-lg">ishandilhara57@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="bg-pink-500/20 p-4 rounded-2xl text-pink-400 group-hover:scale-110 transition-transform">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">WhatsApp / Call</p>
                      <p className="text-white font-medium text-lg">+94 78 549 3978</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-6">
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">Follow Me</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className={`p-4 rounded-2xl ${social.bg} border border-white/5 text-slate-400 ${social.color} transition-all duration-300`}
                        title={social.name}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-blue-500/10 to-purple-500/10 blur-3xl rounded-[3rem] -z-10" />
                <form ref={form} onSubmit={sendEmail} className="space-y-5 bg-white/5 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase ml-2 tracking-widest">Your Name</label>
                      <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Ishan Ekanayaka"
                        className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase ml-2 tracking-widest">Email Address</label>
                      <input
                        type="email"
                        name="reply_to"
                        value={formData.reply_to}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-2 tracking-widest">Contact Number</label>
                    <input
                      type="text"
                      name="contact_number"
                      value={formData.contact_number}
                      onChange={handleChange}
                      placeholder="+94 7X XXX XXXX"
                      className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase ml-2 tracking-widest">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi, I'd like to talk about a project..."
                      rows={4}
                      className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-blue-500/50 resize-none transition-all placeholder:text-slate-600"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSending || isSent}
                    className={`w-full px-8 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 overflow-hidden relative group ${
                      isSent 
                        ? "bg-green-500 text-white cursor-default" 
                        : "bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/20 active:scale-95"
                    }`}
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : isSent ? (
                      <>
                        <Check className="w-6 h-6" />
                        <span>Message Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
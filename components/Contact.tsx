"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Send, Sparkles, Check, Loader2, Phone, MapPin, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    contact_number: "",
    message: "",
  });

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSending(true);
    setError("");

    try {
      const result = await emailjs.sendForm(
        'service_lyw30iw', 
        'template_tfgfcq6', 
        formRef.current,
        'enFVrQEcG2OLmaq0-'
      );

      if (result.text === 'OK') {
        setIsSent(true);
        setFormData({ from_name: "", reply_to: "", contact_number: "", message: "" });
        formRef.current.reset();
        setTimeout(() => setIsSent(false), 5000);
      }
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const contactInfo = [
    { 
        icon: Mail, 
        label: "Email", 
        value: "ishandilhara57@gmail.com", 
        color: "from-blue-500 to-cyan-500", 
        action: () => window.location.href = "mailto:ishandilhara57@gmail.com" 
    },
    { 
        icon: Linkedin, 
        label: "LinkedIn", 
        value: "Ishan Ekanayaka", 
        color: "from-blue-600 to-blue-800", 
        action: () => window.open("https://www.linkedin.com/in/ishan-ekanayaka-6682ba344", "_blank") 
    },
    { 
        icon: Github, 
        label: "GitHub", 
        value: "Ishan123888", 
        color: "from-slate-700 to-slate-900", 
        action: () => window.open("https://github.com/Ishan123888", "_blank") 
    },
    { 
        icon: Phone, 
        label: "WhatsApp", 
        value: "+94 78 549 3978", 
        color: "from-green-500 to-emerald-500", 
        action: () => window.open("https://wa.me/94785493978", "_blank") 
    },
    { 
        icon: MapPin, 
        label: "Location", 
        value: "Colombo, Sri Lanka", 
        color: "from-purple-500 to-indigo-500", 
        action: () => {} 
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-slate-950">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
          className="perspective-2000"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side: Text & Info */}
              <div style={{ transform: "translateZ(50px)" }} className="space-y-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Sparkles size={16} />
                  <span className="text-xs font-bold uppercase tracking-tighter">Get in Touch</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                  Let&apos;s craft <br />
                  <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent italic">something epic.</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {contactInfo.map((info, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      onClick={info.action}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div className={`p-3 rounded-xl bg-linear-to-br ${info.color} shadow-lg shadow-black/20`}>
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{info.label}</p>
                        <p className="text-white font-semibold text-sm truncate max-w-50">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side: The Form */}
              <div style={{ transform: "translateZ(80px)" }} className="relative">
                <div className="bg-slate-900/50 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-xl relative z-20">
                  <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                      <input
                        type="email"
                        name="reply_to"
                        required
                        value={formData.reply_to}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Contact</label>
                      <input
                        type="text"
                        name="contact_number"
                        required
                        value={formData.contact_number}
                        onChange={handleChange}
                        placeholder="+94 ..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-blue-500/50 resize-none transition-all placeholder:text-slate-600"
                      />
                    </div>

                    {error && <p className="text-red-400 text-sm">{error}</p>}

                    <motion.button
                      type="submit"
                      disabled={isSending || isSent}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
                        isSent ? "bg-green-500 text-white" : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                      }`}
                    >
                      {isSending ? <Loader2 className="animate-spin" /> : isSent ? <Check /> : <Send size={18} />}
                      {isSending ? "Sending..." : isSent ? "Sent!" : "Send Message"}
                    </motion.button>
                  </form>
                </div>
                <div className="absolute -inset-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20 -z-10" />
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { PERSONAL_INFO } from '../../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 xs:px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Let's build <br className="hidden xs:block" />
                <span className="text-gradient">something epic.</span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-md mx-auto lg:mx-0">
                I'm currently seeking new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Email */}
              <div className="flex items-center space-x-4 sm:space-x-6 group cursor-pointer">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass border border-white/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                  <Mail size={20} sm:size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider sm:tracking-widest">Email me at</p>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="text-lg sm:text-xl font-bold text-slate-100 hover:text-blue-400 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 sm:space-x-6 group cursor-pointer">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass border border-white/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                  <Phone size={20} sm:size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider sm:tracking-widest">Call me at</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-100">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 sm:space-x-6 group">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass border border-white/10 text-blue-400 shrink-0">
                  <MapPin size={20} sm:size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider sm:tracking-widest">Based in</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-100">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form 
            className="p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl sm:rounded-[40px] glass border border-white/10 space-y-6 sm:space-y-8" 
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-slate-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-900 border border-white/10 focus:border-blue-500 focus:outline-none transition-all text-slate-100 placeholder:text-slate-600 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-slate-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-900 border border-white/10 focus:border-blue-500 focus:outline-none transition-all text-slate-100 placeholder:text-slate-600 text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold text-slate-400 ml-1">Project Message</label>
              <textarea 
                rows={4} 
                sm:rows={5}
                placeholder="Hi Sanku, I'm interested in working with you..." 
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-900 border border-white/10 focus:border-blue-500 focus:outline-none transition-all text-slate-100 placeholder:text-slate-600 resize-none text-sm sm:text-base"
              ></textarea>
            </div>

            <button className="group w-full py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg sm:shadow-xl shadow-blue-500/20 active:scale-95 text-sm sm:text-base">
              Send Message
              <Send size={16} sm:size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
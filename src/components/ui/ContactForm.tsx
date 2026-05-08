import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<"IDLE" | "SUCESSO" | "ERRO">("IDLE");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xojnpaow", { 
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCESSO");
        form.reset();
      } else {
        setStatus("ERRO");
      }
    } catch (error) {
      setStatus("ERRO");
    } finally {
      setIsSubmitting(false);
      if (status === "SUCESSO") {
        setTimeout(() => setStatus("IDLE"), 5000);
      }
    }
  };

  return (
    <div className="w-full bg-bg3/40 backdrop-blur-sm border border-white/5 p-8 rounded-sm shadow-2xl relative overflow-hidden group">
      {/* Glow effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple/20 transition-colors duration-700" />
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-purple font-bold ml-1">{t('contact.form.name')}</label>
            <input
              type="text"
              name="name"
              placeholder={t('contact.form.name_placeholder')}
              required
              className="w-full p-4 bg-bg2/50 border border-white/10 rounded-sm text-sm text-text placeholder:text-muted/40 outline-none focus:border-purple/50 focus:bg-bg2/80 transition-all duration-300"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-purple font-bold ml-1">{t('contact.form.email')}</label>
            <input
              type="email"
              name="email"
              placeholder={t('contact.form.email_placeholder')}
              required
              className="w-full p-4 bg-bg2/50 border border-white/10 rounded-sm text-sm text-text placeholder:text-muted/40 outline-none focus:border-purple/50 focus:bg-bg2/80 transition-all duration-300"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-purple font-bold ml-1">{t('contact.form.message')}</label>
          <textarea
            name="message"
            placeholder={t('contact.form.message_placeholder')}
            rows={5}
            required
            className="w-full p-4 bg-bg2/50 border border-white/10 rounded-sm text-sm text-text placeholder:text-muted/40 outline-none focus:border-purple/50 focus:bg-bg2/80 transition-all duration-300 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative w-full md:w-fit px-12 py-4 bg-transparent border border-purple text-purple text-xs font-bold uppercase tracking-[0.2em] overflow-hidden group/btn transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:text-white"
        >
          <span className="relative z-10">{isSubmitting ? t('contact.form.sending') : t('contact.form.send')}</span>
          <div className="absolute inset-0 bg-purple translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
        </button>

        {/* Feedback Visual */}
        {status === "SUCESSO" && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-xs font-bold tracking-wide"
          >
            {t('contact.form.success')}
          </motion.p>
        )}
        {status === "ERRO" && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs font-bold tracking-wide"
          >
            {t('contact.form.error')}
          </motion.p>
        )}
      </form>
    </div>
  );
};

import { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { personal } from '@/lib/portfolioData';
import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const { ref, inView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  // FUNGSI KIRIM PESAN KE NETLIFY (SEKARANG KE VERCEL) SERVERLESS FUNCTION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        if (response.ok) {
          setSubmitted(true);
          setForm({ name: '', email: '', company: '', message: '' });
          setTimeout(() => {
            setSubmitted(false);
          }, 4000);
        } else {
          setErrorMessage(data.message || 'Gagal mengirim pesan.');
        }
      } else {
        setErrorMessage('Fungsi backend Netlify belum aktif / ter-deploy di server Netlify.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Terjadi kesalahan koneksi. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'text-safety-green',
      bg: 'bg-safety-green/10',
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (!isMobile) {
          e.preventDefault();
          window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`,
            '_blank'
          );
        }
      },
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: personal.whatsappLabel,
      href: `https://wa.me/${personal.whatsapp}`,
      color: 'text-safety-green',
      bg: 'bg-safety-green/10',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Aykel Daely',
      href: personal.linkedin,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      icon: MapPin,
      label: 'Lokasi',
      value: personal.location,
      href: null,
      color: 'text-safety-amber',
      bg: 'bg-safety-amber/10',
    },
  ];

  return (
    <section
      id="kontak"
      ref={ref}
      className="py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-2xl mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-safety-green/10 rounded-full mb-4">
            <Mail className="w-4 h-4 text-safety-green" />
            <span className="text-xs font-semibold text-safety-green uppercase tracking-wider">Kontak</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Mari Berdiskusi & Bekerja Sama
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Tersedia untuk peluang HSE Officer, Safety Inspector, dan posisi terkait Keselamatan & Kesehatan Kerja.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT: Contact Details */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-4">
              {contactItems.map((item) => {
                const content = (
                  <div className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-safety-green/30 hover:shadow-md transition-all duration-300">
                    <div className={`flex items-center justify-center w-12 h-12 ${item.bg} rounded-xl shrink-0`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={item.onClick}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div
            className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 lg:p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  label="Nama"
                  type="text"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <FormField
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
              </div>
              <FormField
                label="Perusahaan/Instansi"
                type="text"
                value={form.company}
                onChange={(v) => setForm({ ...form, company: v })}
              />
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Pesan
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-safety-green/40 focus:border-safety-green transition-all resize-none"
                  placeholder="Tuliskan pesan Anda..."
                />
              </div>

              {/* Tampilan jika ada error */}
              {errorMessage && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-500 font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Tombol Kirim */}
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl shadow-lg transition-all duration-300 ${
                  submitted
                    ? 'bg-safety-green-dark text-white shadow-safety-green/20'
                    : isSubmitting
                    ? 'bg-slate-600 text-white cursor-not-allowed opacity-80'
                    : 'bg-safety-green hover:bg-safety-green-dark text-white shadow-safety-green/20 hover:shadow-safety-green/30 hover:scale-[1.01]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Mengirim Pesan...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Pesan Terkirim!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-safety-green/40 focus:border-safety-green transition-all"
        placeholder={`Masukkan ${label.toLowerCase()} Anda...`}
      />
    </div>
  );
}
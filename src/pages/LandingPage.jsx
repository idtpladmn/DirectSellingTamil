import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Play,
  AlertTriangle,
  TrendingUp,
  Users,
  Target,
  MessageCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Flame,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, margin: "-80px" },
};

const scrollToFinal = () => {
  const el = document.getElementById("final-cta");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const PrimaryCTA = ({ children = "Join Now", testId, className = "" }) => (
  <button
    data-testid={testId}
    onClick={scrollToFinal}
    className={`group inline-flex items-center justify-center gap-2.5 bg-[#FFD700] text-black font-bold text-lg sm:text-xl tracking-wide py-5 px-10 md:py-6 md:px-16 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.25)] hover:shadow-[0_0_50px_rgba(255,215,0,0.55)] hover:-translate-y-0.5 transition-all duration-300 ${className}`}
  >
    {children}
    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
  </button>
);

const SectionOverline = ({ children, tone = "gold" }) => (
  <div
    className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-5 ${
      tone === "gold"
        ? "text-[#FFD700]"
        : tone === "red"
        ? "text-[#E63946]"
        : "text-neutral-500"
    }`}
  >
    <span className="h-px w-8 bg-current opacity-60" />
    {children}
    <span className="h-px w-8 bg-current opacity-60" />
  </div>
);

/* ---------------- 1. HERO ---------------- */
const HeroSection = () => (
  <section
    data-testid="hero-section"
    className="relative bg-[#0B0B0B] overflow-hidden"
  >
    {/* ambient glow */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#FFD700]/10 blur-[120px]" />
    </div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.05),_transparent_50%)]" />

    <div className="relative max-w-5xl mx-auto px-6 py-28 sm:py-36 md:py-44 text-center">
      <motion.div {...fadeUp}>
        <SectionOverline>Exclusive Masterclass for Tamil Direct Sellers</SectionOverline>
      </motion.div>

      <motion.h1
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="font-[Outfit] font-extrabold tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05]"
      >
        I’m on a Mission to Help{" "}
        <span className="text-[#FFD700]">1000+ Tamil Direct Sellers</span>{" "}
        Earn Their <span className="text-[#FFD700]">First Crore</span> &amp; Build a{" "}
        <span className="text-[#FFD700]">6-Figure Income in Direct Selling Industry</span>
      </motion.h1>

      <motion.ul
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="mt-12 sm:mt-14 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-5 text-neutral-300 font-[Manrope]"
      >
        {[
          "Without quitting their job",
          "Without spending money they can’t afford",
          "For any company direct sellers",
        ].map((item) => (
          <li
            key={item}
            className="inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/10 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base md:text-lg"
          >
            <CheckCircle2 className="h-5 w-5 text-[#FFD700] shrink-0" />
            {item}
          </li>
        ))}
      </motion.ul>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
        className="mt-14 sm:mt-16 flex flex-col items-center gap-5"
      >
        <PrimaryCTA testId="hero-cta-button">Join Now</PrimaryCTA>
        <p className="text-sm sm:text-base text-neutral-500 font-[Manrope] flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-[#FFD700]/70" />
          Trusted by 500+ direct sellers across Tamil Nadu
        </p>
      </motion.div>
    </div>
  </section>
);

/* ---------------- 2. VIDEO ---------------- */
const VideoSection = () => (
  <section
    data-testid="video-section"
    className="bg-[#141414] py-24 md:py-36 border-t border-white/5"
  >
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.h2
        {...fadeUp}
        className="font-[Outfit] font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]"
      >
        Watch This <span className="text-[#FFD700]">Before You Continue</span>
      </motion.h2>
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="mt-6 text-neutral-400 font-[Manrope] text-lg sm:text-xl"
      >
        A 3-minute message that could change the next 5 years of your life.
      </motion.p>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="relative mt-14 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,215,0,0.12)] group"
      >
        <div
          className="aspect-video w-full bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/29708260/pexels-photo-29708260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <button
            data-testid="video-play-button"
            onClick={scrollToFinal}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video"
          >
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-24 w-24 rounded-full bg-[#FFD700]/30 animate-ping" />
              <span className="relative inline-flex h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[#FFD700] items-center justify-center shadow-[0_0_60px_rgba(255,215,0,0.6)] group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 sm:h-10 sm:w-10 text-black fill-black ml-1" />
              </span>
            </span>
          </button>
        </div>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
        className="mt-14"
      >
        <PrimaryCTA testId="video-cta-button">Yes, I’m Ready — Join Now</PrimaryCTA>
      </motion.div>
    </div>
  </section>
);

/* ---------------- 3. CORE PROMISE ---------------- */
const CorePromiseSection = () => (
  <section
    data-testid="core-promise-section"
    className="bg-[#FAFAFA] py-24 md:py-36"
  >
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div {...fadeUp}>
        <SectionOverline tone="dark">The Core Promise</SectionOverline>
      </motion.div>
      <motion.h2
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="font-[Outfit] font-extrabold text-[#0B0B0B] text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]"
      >
        Build a Successful Direct Selling Business With the{" "}
        <span className="underline decoration-[#FFD700] decoration-4 underline-offset-4">
          Right Skills
        </span>
        , a{" "}
        <span className="underline decoration-[#FFD700] decoration-4 underline-offset-4">
          Proven System
        </span>
        , and a{" "}
        <span className="underline decoration-[#FFD700] decoration-4 underline-offset-4">
          Strong Team
        </span>
      </motion.h2>
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="mt-8 text-neutral-700 font-[Manrope] text-xl sm:text-2xl leading-relaxed"
      >
        So you can leave your 9 to 5 when you’re ready.
      </motion.p>
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
        className="mt-4 text-neutral-500 italic font-['Noto_Sans_Tamil'] text-lg sm:text-xl leading-relaxed"
      >
        சரியான திறமை, நிரூபிக்கப்பட்ட சிஸ்டம் மற்றும் வலுவான டீமுடன் வெற்றிகரமான டைரக்ட் செல்லிங் வணிகத்தை உருவாக்குங்கள்.
      </motion.p>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.4 }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {[
          { icon: Sparkles, title: "Right Skills", desc: "Communication, closing, prospecting" },
          { icon: Target, title: "Proven System", desc: "Step-by-step funnel framework" },
          { icon: Users, title: "Strong Team", desc: "Duplicatable leadership blueprint" },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white border border-black/5 rounded-2xl p-8 text-left hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="h-14 w-14 rounded-xl bg-[#0B0B0B] flex items-center justify-center mb-6">
              <item.icon className="h-6 w-6 text-[#FFD700]" />
            </div>
            <h3 className="font-[Outfit] font-bold text-[#0B0B0B] text-xl sm:text-2xl">{item.title}</h3>
            <p className="text-neutral-600 font-[Manrope] text-base sm:text-lg mt-2 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ---------------- 4. PROBLEM ---------------- */
const ProblemSection = () => (
  <section
    data-testid="problem-section"
    className="bg-[#0B0B0B] py-24 md:py-32 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(230,57,70,0.12),_transparent_60%)]" />
    <div className="relative max-w-4xl mx-auto px-5 text-center">
      <motion.div {...fadeUp}>
        <AlertTriangle className="h-12 w-12 text-[#E63946] mx-auto mb-6" />
      </motion.div>
      <motion.h2
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="font-[Outfit] font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]"
      >
        Let me be brutally honest with you...
      </motion.h2>
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="mt-8 font-[Outfit] text-white text-2xl sm:text-3xl lg:text-4xl font-bold"
      >
        Most direct sellers aren’t failing because of a bad product.
      </motion.p>
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
        className="mt-4 font-[Outfit] text-neutral-300 text-xl sm:text-2xl font-medium"
      >
        They’re failing because of{" "}
        <span className="relative inline-block font-extrabold text-[#E63946]">
          MENTAL OVERLOAD
          <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-[#E63946]/80" />
        </span>
        .
      </motion.p>
    </div>
  </section>
);

/* ---------------- 5. PAIN POINTS ---------------- */
const painPoints = [
  { label: "Monthly Income Pressure", value: 90 },
  { label: "Finding New People", value: 70 },
  { label: "Inactive Team", value: 75 },
  { label: "Team Members Quitting", value: 80 },
  { label: "Prospect Rejection", value: 70 },
  { label: "Sales Closing Problems", value: 95 },
  { label: "Social Media No Results", value: 90 },
];

const PainPointsSection = () => (
  <section
    data-testid="pain-points-section"
    className="bg-white py-20 md:py-28"
  >
    <div className="max-w-4xl mx-auto px-5">
      <motion.div {...fadeUp} className="text-center">
        <SectionOverline tone="dark">Do any of these feel familiar?</SectionOverline>
        <h2 className="font-[Outfit] font-extrabold text-[#0B0B0B] text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
          The 7 Pain Points{" "}
          <span className="text-[#E63946]">Killing Your Business</span>
        </h2>
      </motion.div>

      <div className="mt-14 space-y-6">
        {painPoints.map((p, idx) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            viewport={{ once: true, margin: "-80px" }}
            data-testid={`pain-point-${idx}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-[Outfit] font-bold text-[#0B0B0B] text-base sm:text-lg">
                {p.label}
              </span>
              <span className="font-[Outfit] font-extrabold text-[#E63946] text-base sm:text-lg tabular-nums">
                {p.value}%
              </span>
            </div>
            <div className="h-3 w-full bg-black/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${p.value}%` }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + idx * 0.05 }}
                viewport={{ once: true, margin: "-80px" }}
                className="h-full rounded-full bg-gradient-to-r from-[#E63946] to-[#ff6b73]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- 6. EMOTIONAL ---------------- */
const EmotionalSection = () => (
  <section
    data-testid="emotional-section"
    className="bg-[#141414] py-24 md:py-32"
  >
    <div className="max-w-3xl mx-auto px-5 text-center">
      <motion.div {...fadeUp} className="space-y-6 font-[Outfit] text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.3]">
        <p>When your mind is overloaded,</p>
        <p className="text-neutral-400">your business becomes inconsistent.</p>
        <p>Your confidence drops...</p>
        <p className="text-[#FFD700]">and you stop approaching people.</p>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="mt-14"
      >
        <PrimaryCTA testId="emotional-cta-button">Break the Cycle — Join Now</PrimaryCTA>
      </motion.div>
    </div>
  </section>
);

/* ---------------- 7. SOLUTION ---------------- */
const SolutionSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Build Skills",
      desc: "Master prospecting, closing, objection handling, and retention — the 4 pillars every top earner has.",
    },
    {
      icon: Users,
      title: "Build Strong Team",
      desc: "Duplicate yourself with a proven leadership system that turns inactive teams into revenue engines.",
    },
    {
      icon: TrendingUp,
      title: "Build Consistent Income",
      desc: "Switch from one-off luck to predictable monthly income with our plug-and-play funnel framework.",
    },
  ];
  return (
    <section
      data-testid="solution-section"
      className="bg-[#FAFAFA] py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-5">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
          <SectionOverline tone="dark">Introducing</SectionOverline>
          <h2 className="font-[Outfit] font-extrabold text-[#0B0B0B] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Direct Selling <span className="text-[#FFD700] drop-shadow-[0_2px_0_rgba(0,0,0,0.1)]">Tamil Academy</span>
          </h2>
          <p className="mt-4 text-neutral-600 font-[Manrope] text-base sm:text-lg">
            A skill-first training ecosystem built for Tamil direct sellers — regardless of your company.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-black/5 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all"
              data-testid={`solution-card-${idx}`}
            >
              <div className="h-14 w-14 rounded-xl bg-[#0B0B0B] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,215,0,0.15)]">
                <f.icon className="h-6 w-6 text-[#FFD700]" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#FFD700]" />
                <h3 className="font-[Outfit] font-extrabold text-[#0B0B0B] text-xl sm:text-2xl">
                  {f.title}
                </h3>
              </div>
              <p className="text-neutral-600 font-[Manrope] text-base leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- 8. OFFER ---------------- */
const OfferSection = () => (
  <section
    data-testid="offer-section"
    className="bg-[#141414] py-20 md:py-28 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.1),_transparent_60%)]" />
    <div className="relative max-w-4xl mx-auto px-5">
      <motion.div {...fadeUp} className="text-center mb-10">
        <SectionOverline>Exclusive Offer</SectionOverline>
        <h2 className="font-[Outfit] font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight">
          A Low-Risk Entry, A <span className="text-[#FFD700]">High-Return</span> Path
        </h2>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="relative rounded-3xl bg-gradient-to-br from-[#FFD700] via-[#FFDA1F] to-[#E6C200] p-[2px] shadow-[0_0_80px_rgba(255,215,0,0.25)]"
      >
        <div className="rounded-3xl bg-[#FFD700] p-8 md:p-12 text-center">
          <div className="inline-flex items-center gap-2 bg-black text-[#FFD700] rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6">
            <Flame className="h-3.5 w-3.5" /> Limited Offer
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            <div className="flex items-baseline gap-2">
              <span className="font-[Outfit] font-black text-black text-5xl sm:text-6xl lg:text-7xl">₹49</span>
              <span className="font-[Manrope] font-semibold text-black/70 text-base sm:text-lg">Landing Page Funnel</span>
            </div>
            <ArrowRight className="h-8 w-8 text-black hidden md:block" />
            <div className="flex items-baseline gap-2">
              <span className="font-[Outfit] font-black text-black text-4xl sm:text-5xl lg:text-6xl">₹4999</span>
              <span className="font-[Manrope] font-semibold text-black/70 text-base sm:text-lg">Conversion Model</span>
            </div>
          </div>
          <p className="mt-6 text-black/80 font-[Manrope] text-base sm:text-lg max-w-xl mx-auto">
            Start with <span className="font-bold">₹49</span>, experience the full system, then unlock the
            complete blueprint — no guesswork, no fluff.
          </p>
          <div className="mt-8">
            <button
              onClick={scrollToFinal}
              data-testid="offer-cta-button"
              className="inline-flex items-center gap-2 bg-black text-[#FFD700] font-bold text-base sm:text-lg py-4 px-10 rounded-lg hover:scale-105 transition-transform"
            >
              Claim My ₹49 Seat <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ---------------- 9. AUTHORITY ---------------- */
const AuthoritySection = () => (
  <section
    data-testid="authority-section"
    className="bg-[#0B0B0B] py-20 md:py-28 border-t border-white/5"
  >
    <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      <motion.div {...fadeUp} className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-[#FFD700]/10 blur-3xl rounded-full" />
        <img
          src="/images/mentor.png"
          alt="Senthilkumar Thanigachalam - Direct Selling Skill Trainer"
          className="relative w-full max-w-md md:max-w-lg h-auto object-contain mx-auto drop-shadow-[0_20px_60px_rgba(255,215,0,0.25)]"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-[#FFD700] text-black rounded-full px-4 py-1.5 text-xs font-bold shadow-lg z-10">
          <ShieldCheck className="h-3.5 w-3.5" /> 20+ Years Experience
        </div>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.15 }}
      >
        <SectionOverline>Meet Your Mentor</SectionOverline>
        <h2 className="font-[Outfit] font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
          Senthilkumar<br />
          <span className="text-[#FFD700]">Thanigachalam</span>
        </h2>
        <p className="mt-4 text-[#FFD700] font-[Manrope] font-semibold text-lg sm:text-xl">
          India’s Leading Direct Selling Skill Trainer
        </p>
        <div className="mt-6 space-y-4 text-neutral-300 font-[Manrope] text-base sm:text-lg leading-relaxed">
         <p>
  Mr. Senthil Kumar Thanigachalam has a deep interest in the network marketing industry and personality development.
</p>
<p>
  After more than 20 years of experience and research, he discovered a new system called <strong>“NME365”</strong> and its impact on the network marketing business.
</p>
<p>
  He has trained more than 1 lakh people from various companies, helping them achieve remarkable positions in their fields and succeed in their careers.
</p>
<p>
  The <strong>NME365</strong> system is unique and the first of its kind in India. It has empowered common people to break free from the rat race and become high-income earners.
</p>
          <p>
            My mission is simple:{" "}
            <span className="text-white font-semibold">
              make ₹1 Crore achievable for 1000+ Tamil direct sellers.
            </span>
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
          {[
            { n: "10K+", l: "Trained" },
            { n: "500+", l: "6-figure earners" },
            { n: "10+", l: "Years" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-white/[0.04] border border-white/10 rounded-xl px-3 py-4 text-center"
            >
              <div className="font-[Outfit] font-extrabold text-[#FFD700] text-2xl">
                {s.n}
              </div>
              <div className="text-xs text-neutral-400 font-[Manrope] mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ---------------- 10. URGENCY ---------------- */
const UrgencySection = () => (
  <section
    data-testid="urgency-section"
    className="bg-[#E63946] py-20 md:py-24 relative overflow-hidden"
  >
    <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.4)_0,rgba(0,0,0,0.4)_2px,transparent_2px,transparent_14px)]" />
    <div className="relative max-w-3xl mx-auto px-5 text-center">
      <motion.div {...fadeUp} className="inline-flex items-center gap-2 bg-black/90 text-white rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6">
        <Clock className="h-3.5 w-3.5 text-[#FFD700]" /> Enrollment Closing Soon
      </motion.div>
      <motion.h2
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="font-[Outfit] font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight"
      >
        Limited Seats Only
      </motion.h2>
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="mt-5 text-white/95 font-[Manrope] text-lg sm:text-xl font-medium"
      >
        This is not for everyone.{" "}
        <span className="font-bold">Only serious people.</span>
      </motion.p>
      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
        className="mt-10"
      >
        <button
          onClick={scrollToFinal}
          data-testid="urgency-cta-button"
          className="inline-flex items-center gap-2 bg-black text-[#FFD700] font-bold text-base sm:text-lg py-4 px-10 rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform"
        >
          I’m Serious — Reserve My Seat <ArrowRight className="h-5 w-5" />
        </button>
      </motion.div>
    </div>
  </section>
);

/* ---------------- 11. FINAL CTA ---------------- */
const FinalCTASection = () => (
  <section
    id="final-cta"
    data-testid="final-cta-section"
    className="bg-[#0B0B0B] py-24 md:py-36 relative overflow-hidden"
  >
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#FFD700]/10 blur-[140px]" />
    </div>
    <div className="relative max-w-3xl mx-auto px-5 text-center">
      <motion.div {...fadeUp}>
        <SectionOverline>Your Next Move</SectionOverline>
      </motion.div>
      <motion.h2
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="font-[Outfit] font-extrabold text-white text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.05]"
      >
        Are you ready to{" "}
        <span className="text-[#FFD700]">change your life?</span>
      </motion.h2>
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="mt-6 text-neutral-400 font-[Manrope] text-base sm:text-lg"
      >
        One decision today can rewrite the next 10 years. The seat is yours if you take it.
      </motion.p>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
        className="mt-12"
      >
        <button
          data-testid="final-cta-button"
          onClick={() => window.open("https://wa.me/910000000000", "_blank")}
          className="group inline-flex items-center justify-center gap-3 bg-[#FFD700] text-black font-bold text-lg sm:text-2xl tracking-wide py-5 px-12 md:py-6 md:px-16 rounded-xl shadow-[0_0_50px_rgba(255,215,0,0.4)] hover:shadow-[0_0_80px_rgba(255,215,0,0.7)] hover:-translate-y-1 transition-all duration-300"
        >
          Join Now
          <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
        </button>
        <p className="mt-6 text-xs sm:text-sm text-neutral-500 font-[Manrope]">
          © {new Date().getFullYear()} Direct Selling Tamil Academy — Senthilkumar Thanigachalam. All rights reserved.
        </p>
      </motion.div>
    </div>
  </section>
);

/* ---------------- STICKY WHATSAPP ---------------- */
const StickyWhatsApp = () => (
  <a
    href="https://wa.me/910000000000"
    target="_blank"
    rel="noopener noreferrer"
    data-testid="whatsapp-fab"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-20 right-5 sm:right-6 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-green-500/50 animate-ping" />
    <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-[0_10px_30px_rgba(34,197,94,0.45)] hover:scale-110 transition-transform">
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </span>
    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap">
      Chat on WhatsApp
    </span>
  </a>
);

/* ---------------- PAGE ---------------- */
const LandingPage = () => {
  return (
    <main data-testid="landing-page" className="bg-[#0B0B0B] text-white antialiased">
      <HeroSection />
      <VideoSection />
      <CorePromiseSection />
      <ProblemSection />
      <PainPointsSection />
      <EmotionalSection />
      <SolutionSection />
      <OfferSection />
      <AuthoritySection />
      <UrgencySection />
      <FinalCTASection />
      <StickyWhatsApp />
    </main>
  );
};

export default LandingPage;

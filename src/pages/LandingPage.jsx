import React, { useState } from "react";
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
        className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-5 ${tone === "gold"
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


/* ---------------- 0. COVER PAGE ---------------- */
const CoverPageSection = () => (
    <section
        data-testid="cover-page-section"
        className="w-full bg-black overflow-hidden"
    >
        <img
            src="/images/cover-page3.png"
            alt="The Bridge - Tamil Nadu Direct Selling Academy"
            className="block w-full h-auto"
        />
    </section>
);


/* ---------------- 0.5 WORKSHOP PROMOTION ---------------- */
const WorkshopPromotionSection = () => (
    <section
        data-testid="workshop-promotion-section"
        className="bg-black py-12 sm:py-16 md:py-20 px-5"
    >
        <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-[28px] border-2 border-[#FF9F1C] bg-black px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-14 shadow-[0_0_50px_rgba(255,159,28,0.12)]">

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,159,28,0.10),_transparent_65%)]" />

                <div className="relative text-center">
                    <div className="text-center">

                        {/* Tamil Nadu Direct Selling Academy */}
                        <motion.p
                            {...fadeUp}
                            className="font-[Outfit] font-medium text-[#FFD700] text-sm sm:text-base md:text-lg leading-none tracking-[0.08em] text-center"
                        >
                            — TAMILNADU DIRECT SELLING ACADEMY —
                        </motion.p>
                        {/* First Line */}
                        <motion.p
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.1 }}
                            className="mt-5 font-[Outfit] font-medium text-[#FF8C00] text-lg sm:text-xl md:text-5xl leading-tight"
                        >
                            DOUBLE YOUR SALES AND TEAM
                        </motion.p>

                        {/* Second Line */}
                        <motion.p
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.2 }}
                            className="font-[Outfit] font-medium text-[#FF8C00] text-lg sm:text-xl md:text-4xl leading-tight"
                        >
                            in the Next 30 Days with {" "}
                            <span className="text-[#FFFF00] text-xl sm:text-2xl md:text-5xl font-semibold">
                                “The Bridge”
                            </span>{" "}
                            Workshop
                        </motion.p>

                        {/* Third Line */}
                        <motion.p
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.3 }}
                            className="mt-2 font-[Manrope] font-normal text-[#FF8C00] text-sm sm:text-base md:text-lg leading-tight"
                        >
                            Even if you are stuck in your business.
                        </motion.p>
                    </div>

                    <motion.div
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.4 }}
                        className="mt-8 sm:mt-10 inline-flex flex-col items-center justify-center rounded-2xl bg-[#E63946] px-8 py-5 sm:px-12 sm:py-6 shadow-[0_0_40px_rgba(230,57,70,0.25)]"
                    >
                        <span className="font-[Outfit] font-extrabold text-white text-xl sm:text-2xl md:text-3xl">
                            Register Now For Just Rs.499/-
                        </span>
                        <span className="mt-1 font-[Manrope] font-medium text-white/90 text-sm sm:text-base md:text-lg">
                            (3 Days / 5 Hours)
                        </span>
                    </motion.div>

                    <motion.div
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.5 }}
                        className="mt-8 sm:mt-10 font-[Manrope] text-white"
                    >
                        <p className="font-bold text-lg sm:text-xl md:text-2xl">
                            Next Batch on{" "}
                            <span className="text-[#FFD700]">
                                18th / 19th / 20th Sept’26
                            </span>
                        </p>

                        <p className="mt-2 font-semibold text-base sm:text-lg md:text-xl text-neutral-300">
                            Time — 5:00 AM to 6:30 AM
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
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
            <motion.div {...fadeUp} className="flex items-center justify-center gap-3">
                <span className="h-px w-9 bg-[#FFD700]" />

                <span className="font-[Manrope] font-semibold uppercase tracking-[0.25em] text-[#FFD700] text-lg sm:text-xl lg:text-2xl">
                    TAMILNADU DIRECT SELLING ACADEMY
                </span>

                <span className="h-px w-9 bg-[#FFD700]" />
            </motion.div>

            <motion.h1
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="font-[Outfit] font-extrabold tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]"
            >
                We’re  on a Mission to Help{" "}
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
                className="font-[Outfit] font-extrabold text-white text-center tracking-tight leading-none px-2"
            >
                {/* English — always one line */}
                <span className="block whitespace-nowrap text-[20px] sm:text-3xl md:text-5xl lg:text-6xl">
                    Watch This{" "}
                    <span className="text-[#FFD700]">
                        Before You Continue
                    </span>
                </span>

                {/* Tamil — always one line */}
                <span className="block whitespace-nowrap mt-2 sm:mt-3 text-[13px] sm:text-xl md:text-2xl lg:text-4xl">
                    தொடர்வதற்கு முன்{" "}
                    <span className="text-[#FFD700]">
                        இதைப் பாருங்கள்
                    </span>
                </span>
            </motion.h2>
            <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                className="mt-5 text-neutral-400 font-[Manrope] text-center px-2"
            >
                <span className="block whitespace-nowrap text-[11px] sm:text-base md:text-lg lg:text-xl">
                    A 3-Minute Message for All Those Involved in the Direct Selling Industry in Tamil Nadu
                </span>

                <span className="block whitespace-nowrap mt-1.5 text-[9px] sm:text-sm md:text-base lg:text-lg">
                    தமிழ்நாட்டில் நேரடி வணிகத்தில் ஈடுபடுவோருக்கான 3 நிமிடச் சிறப்புச் செய்தி
                </span>
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
                className="mx-auto w-full max-w-[1450px] font-[Outfit] font-extrabold text-[#0B0B0B] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-[1.1] text-center px-4"
            >

                {/* English Heading */}
                <span className="block">
                    Build a Successful
                </span>

                <span className="block">
                    Direct Selling Business Using
                </span>

                <span className="block">
                    <span className="underline decoration-[#FFD700] decoration-4 underline-offset-4">
                        New-Age Methods
                    </span>
                    ,
                </span>

                <span className="block">
                    a {" "}
                    <span className="underline decoration-[#FFD700] decoration-4 underline-offset-4">
                        Fast Lane System
                    </span>
                    ,
                </span>

                <span className="block lg:whitespace-nowrap">
                    and the{" "}
                    <span className="underline decoration-[#FFD700] decoration-4 underline-offset-4">
                        2D CopyCat Framework
                    </span>
                </span>



                {/* Tamil Translation */}
                <span
                    className="
      block
      mt-5 sm:mt-6
      font-[Manrope]
      font-medium
      text-neutral-500
      text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl
      leading-[1.4]
    "
                >
                    நவீன யுக முறைகளையும், விரைவுப் பாதை அமைப்பு
                    முறையையும், 2D பிரதியெடுக்கக்கூடிய
                    முறையையும் பயன்படுத்தி வெற்றிகரமான
                    நேரடி வணிகத்தை கட்டமைங்கள்.
                </span>
            </motion.h2>
            <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.2 }}
                className="mt-8 text-neutral-700 font-[Manrope] text-xl sm:text-2xl leading-relaxed"
            >
                So you can leave your 9 to 5 when you’re ready.
            </motion.p>


            <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.4 }}
                className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
                {[
                    {
                        icon: Sparkles,
                        title: "New-Age Methods",
                        desc: "Communication, closing, prospecting",
                    },
                    {
                        icon: Target,
                        title: "Fast Lane System",
                        desc: "Step-by-step funnel framework",
                    },
                    {
                        icon: Users,
                        title: "2D CopyCat Framework",
                        desc: "Duplicatable leadership blueprint",
                    },
                ].map((item) => (
                    <div
                        key={item.title}
                        className="bg-white border border-black/5 rounded-2xl p-6 sm:p-7 lg:p-8 text-left hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                        {/* Icon */}
                        <div className="h-14 w-14 rounded-xl bg-[#0B0B0B] flex items-center justify-center mb-5 sm:mb-6">
                            <item.icon className="h-6 w-6 text-[#FFD700]" />
                        </div>

                        {/* Heading */}
                        <h3
                            className="
          font-[Outfit]
          font-bold
          text-[#0B0B0B]
          text-xl
          sm:text-xl
          lg:text-2xl
          leading-tight
          lg:whitespace-nowrap
        "
                        >
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p
                            className="
          text-neutral-600
          font-[Manrope]
          text-base
          sm:text-lg
          mt-2
          leading-relaxed
        "
                        >
                            {item.desc}
                        </p>
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
                Most direct sellers aren’t failing <br />
                because of their product or plan.
            </motion.p>

            <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.3 }}
                className="mt-4 font-[Outfit] text-neutral-300 text-xl sm:text-2xl font-medium"
            >
                They’re failing because of{" "}
                <span className="relative inline-block whitespace-nowrap font-extrabold text-[#E63946]">
                    MENTAL OVERLOAD
                    <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-[#E63946]/80" />
                </span>
                .
            </motion.p>

        </div>
    </section>
);
/* ---------------- 5. PAIN POINTS ---------------- */

/* ---------------- 5. PAIN POINTS ---------------- */

const detailedPainPoints = [
    {
        title: "Monthly Income Pressure",
        tamilTitle: "மாதாந்திர வருமான அழுத்தம்",
        description:
            "ஒரு மாதம் வருமானம் வந்தாலும், அடுத்த மாதத்திற்கான income-ஐ மீண்டும் புதிதாக உருவாக்க வேண்டிய அழுத்தம்.",
        graphLabel: "Monthly Income Pressure",
        value: 90,
    },
    {
        title:
            "Social Media-வில் தொடர்ந்து Content போடுகிறீர்கள்… ஆனால் Business வரவில்லை",
        description:
            "Views, Likes, Followers இருக்கிறது. ஆனால் அவை எதிர்பார்த்த Business Results-ஆக மாறவில்லை.",
        graphLabel: "Social Media No Results",
        value: 90,
    },
    {
        title:
            "சரியான Prospects கிடைக்கவில்லை… கிடைத்த Leads-ல் யார் Qualified என்று தெரியவில்லை",
        description:
            "Friends & Family circle-ல் Prospects குறைந்து வருகிறது.. புதிய Unlimited Prospects-களை உருவாக்குவது எப்படி?, Social Media-வில் வரும் enquiries-ல் யார் Qualified Lead, யார் வெறும் Random Lead என்பதை அடையாளம் கண்டு qualify செய்ய முடியவில்லை.",
        graphLabel: "Finding New People",
        value: 80,
    },
    {
        title: "Team Active-ஆக இருக்கிறது… ஆனால் Productive-ஆக இல்லை",
        description:
            "Team members செயல்பாட்டில் இருக்கிறார்கள், ஆனால் consistent results உருவாகவில்லை. காலப்போக்கில் சிலர் business-ஐ விட்டு விலகிவிடுகிறார்கள்.",
        graphLabel: "Small Team, Low Result, Members Quitting",
        value: 85,
    },
    {
        title: "உங்களை மட்டுமே சார்ந்து இயங்கும் வணிகம்",
        description:
            "நீங்கள் தொடர்ந்து follow-up செய்தால்தான் sales நடக்கிறது. நீங்கள் motivate செய்யவில்லை என்றால் Team inactive-ஆக மாறுகிறது.No Leverage Income.Only Active Income",
        highlight: "No Leverage Income. Only Active Income.",
        graphLabel: "Team Performance 20%, Leader's Performance 80%",
        value: 80,
    },
    {
        title: "கற்றுக்கொண்டது அதிகம்… Results மாறவில்லை",
        description:
            "Training, webinars, books, videos என்று தொடர்ந்து கற்றுக்கொள்கிறீர்கள். Motivation மட்டுமே கிடைக்கிறது… ஆனால் Business Results மாறுவதில்லை.",
        graphLabel: "Same Result Month on Month",
        value: 80,
    },
    {
        title: "வேலை செய்கிறீர்கள்… ஆனால் உங்கள் வியாபாரம் விரிவடைகிறதா?",
        description:
            "நாள் முழுவதும் busy-ஆக இருக்கிறீர்கள். ஆனால் உங்கள் செயல்பாடுகள் நீண்டகால வணிக வளர்ச்சிக்கான அடித்தளத்தை உருவாக்குகிறதா? உங்கள் Team-ல் Duplication — பிரதியெடுத்தல் நடைபெறுகிறதா?",
        graphLabel: "No Market Expansion",
        value: 95,
    },
];

const PainPointsSection = () => (
    <section
        data-testid="pain-points-section"
        className="bg-white py-20 md:py-28"
    >
        <div className="max-w-4xl mx-auto px-5">

            {/* Tamil Heading */}
            <motion.div
                {...fadeUp}
                className="text-center mb-10 sm:mb-12"
            >
                <p className="font-[Manrope] text-neutral-500 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-4">
                    இந்த 7 சவால்களில் எத்தனை உங்களுக்கு இருக்கிறது?
                </p>

                <h2 className="font-[Outfit] font-extrabold text-[#0B0B0B] text-2xl sm:text-3xl lg:text-4xl leading-tight">
                    <span className="block">
                        நேரடி விற்பனையில்,
                    </span>

                    <span className="block">
                        உங்கள் வளர்ச்சியைத் தடுத்து நிறுத்தும்
                    </span>

                    <span className="block text-[#E63946]">
                        7 முக்கிய சவால்கள்
                    </span>
                </h2>
            </motion.div>


            {/* 7 Pain Point Cards */}
            <div className="space-y-5 sm:space-y-6">

                {detailedPainPoints.map((point, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: idx * 0.06,
                        }}
                        viewport={{
                            once: true,
                            margin: "-80px",
                        }}
                        className="
                            bg-white
                            border border-black/10
                            rounded-2xl
                            p-5 sm:p-7 lg:p-8
                            shadow-sm
                            hover:shadow-md
                            transition-shadow
                        "
                    >

                        {/* Number + Title */}
                        <h3
                            className="
                                font-[Outfit]
                                font-extrabold
                                text-[#0B0B0B]
                                text-lg sm:text-xl lg:text-2xl
                                leading-snug
                            "
                        >
                            <span className="text-[#E63946]">
                                {idx + 1}.
                            </span>{" "}
                            {point.title}

                            {point.tamilTitle && (
                                <span className="font-[Manrope] font-semibold text-neutral-500">
                                    {" "}— {point.tamilTitle}
                                </span>
                            )}
                        </h3>


                        {/* Description */}
                        <p
                            className="
                                mt-3
                                font-[Manrope]
                                text-neutral-600
                                text-base sm:text-lg
                                leading-relaxed
                            "
                        >
                            {point.description}
                        </p>


                        {/* Highlight */}
                        {point.highlight && (
                            <p
                                className="
                                    mt-4
                                    font-[Outfit]
                                    font-bold
                                    text-[#0f0e0e]
                                    text-base sm:text-lg
                                "
                            >
                                {point.highlight}
                            </p>
                        )}


                        {/* Graph */}
                        <div className="mt-6">

                            {/* Graph Heading + Percentage */}
                            <div className="flex items-center justify-between mb-2">
                                <span
                                    className="
                                        font-[Outfit]
                                        font-bold
                                        text-[#0B0B0B]
                                        text-sm sm:text-base
                                    "
                                >
                                    {point.graphLabel}
                                </span>

                                <span
                                    className="
                                        font-[Outfit]
                                        font-extrabold
                                        text-[#E63946]
                                        text-sm sm:text-base
                                        tabular-nums
                                    "
                                >
                                    {point.value}%
                                </span>
                            </div>


                            {/* Progress Bar */}
<div className="h-3 w-full bg-black/5 rounded-full overflow-hidden">
    <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{
            duration: 1.2,
            ease: "easeOut",
        }}
        viewport={{
            once: true,
            amount: 0.5,
        }}
        style={{
            width: `${point.value}%`,
            transformOrigin: "left center",
        }}
        className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-[#E63946]
            to-[#ff6b73]
        "
    />
</div>

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
            title: "Master New-Age Methods",
            desc: "புதிய தலைமுறை நேரடி வணிக முறைகளைப் பயன்படுத்தி, இன்றைய Social Media உலகில் உங்கள் வணிகத்தை வளர்க்கும் நடைமுறை முறைகளைக் கற்றுக்கொள்ளுங்கள்.",
        },
        {
            icon: Users,
            title: "Build a Duplicatable Team",
            desc: "நீங்கள் மட்டுமே செயல்படாமல், உங்கள் Team உங்களைப் பிரதியெடுத்து செயல்படும் வகையில் ஒரு எளிய Leadership Framework-ஐ உருவாக்குங்கள்.",
        },
        {
            icon: TrendingUp,
            title: "Accelerate Your Growth",
            desc: "Fast Lane System மூலம், நீங்கள் நினைத்ததைவிட வேகமாக உங்கள் நேரடி வணிக வளர்ச்சியை அடுத்த கட்டத்திற்கு கொண்டு செல்லுங்கள்.",
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
                        அனைத்து நேரடி விற்பனை நிறுவனங்களைச் சேர்ந்த தமிழ் நேரடி விற்பனையாளர்களுக்காக உருவாக்கப்பட்ட
                        நவீன நடைமுறை கற்றல் அமைப்பு
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



/* ---------------- 9. AUTHORITY ---------------- */
const AuthoritySection = () => (
    <section
        data-testid="authority-section"
        className="relative bg-[#0B0B0B] py-20 md:py-28 border-t border-white/5 overflow-hidden"
        style={{
            backgroundImage: "url('/images/training-crowd.JPG')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
    >
        {/* Faded training crowd background */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.08),_transparent_65%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div {...fadeUp} className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#FFD700]/10 blur-3xl rounded-full" />
                <img
                    src="/images/mentor2.png"
                    alt="Senthilkumar Thanigachalam - Direct Selling Skill Trainer"
                    className="relative w-full max-w-md md:max-w-lg h-auto object-contain mx-auto drop-shadow-[0_20px_60px_rgba(255,215,0,0.25)]"
                />

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
                    DIRECT SELLING BUSINESS GROWTH STRATEGIST
                </p>
                <div className="mt-6 space-y-4 text-neutral-300 font-[Manrope] text-base sm:text-lg leading-relaxed">
                    <p className="text-justify [text-align-last:left]">
                        செந்தில்குமார் தனிகாசலம் is an Entrepreneur, Author, Motivational Speaker and Direct Selling Business Growth Strategist. Direct Selling துறையில் 22+ ஆண்டுகள் அனுபவம் கொண்ட இவர், பல்வேறு Training Programs, Events மற்றும் Workshops மூலம் இதுவரை  1 லட்சத்திற்கும் மேற்பட்டோரை சென்றடைந்துள்ளார்.
                    </p>

                    <p className="text-justify [text-align-last:left]">
                        இவருடைய Direct Selling வணிகமும் பயிற்சி அமைப்பும் இந்தியாவின் 14 மாநிலங்களிலும், 5 நாடுகளிலும் விரிவடைந்துள்ளன.
                    </p>

                    <p className="text-justify [text-align-last:left]">
                        22+ ஆண்டுகால நடைமுறை அனுபவம் மற்றும் களப்பணியின் அடிப்படையில், இன்றைய Direct Sellers-க்கு தேவையான Digital Transformation, Mindset, Field Skills, New-Age Methods, Fast Lane System மற்றும் Duplication & Leadership Frameworks ஆகியவற்றை உருவாக்கி வழி நடத்தி வருகிறார்.
                    </p>
                    <div className="text-center w-full">
                        <h3 className="font-[Outfit] font-extrabold text-[#FFD700] text-xl sm:text-2xl lg:text-3xl tracking-wide">
                            MY MISSION
                        </h3>

                        <p className="mt-4 font-[Manrope] text-neutral-300 font-bold text-[13px] sm:text-base lg:text-lg leading-relaxed">
                            <span className="block whitespace-nowrap">
                                1000+ தமிழ் Direct Sellers-ஐ ₹1 Crore / Six-Figure Income
                            </span>

                            <span className="block mt-1">
                                இலக்கை நோக்கி வழிநடத்துவது.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
                    {[
                        { n: "1 Lakh+", l: "People Trained" },
                        { n: "14+", l: "Indian States" },
                        { n: "22+", l: "Years Experience" },
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

const UrgencySection = () => {
    const [showBookForm, setShowBookForm] = React.useState(false);

    const [formData, setFormData] = React.useState({
        name: "",
        whatsapp: "",
        city: "",
    });

    const [submitting, setSubmitting] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.name.trim() ||
            !formData.whatsapp.trim() ||
            !formData.city.trim()
        ) {
            alert("Please fill in all the details.");
            return;
        }

        if (formData.whatsapp.replace(/\D/g, "").length < 10) {
            alert("Please enter a valid WhatsApp number.");
            return;
        }

        setSubmitting(true);

        try {
            const params = new URLSearchParams();

            params.append("name", formData.name.trim());
            params.append("whatsapp", formData.whatsapp.trim());
            params.append("city", formData.city.trim());

            await fetch(
                "https://script.google.com/macros/s/AKfycbxxAji5mgvANjJ7aMBd7eqIH08eFRK1I0n_IFn1f5c62Y--2MfniP-bpdGG-_xZgDtLeg/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: params,
                }
            );

            setSubmitted(true);
        } catch (error) {
            console.error("Free e-book registration error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <section
                data-testid="urgency-section"
                className="bg-[#E63946] py-14 md:py-18 relative overflow-hidden"
            >
                {/* Diagonal background */}
                <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.4)_0,rgba(0,0,0,0.4)_2px,transparent_2px,transparent_14px)]" />

                <div className="relative max-w-[1450px] mx-auto px-4 sm:px-6">

                    {/* =====================================================
                        BOOK 1 | CENTER CONTENT | BOOK 2
                    ===================================================== */}
                    <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_240px] xl:grid-cols-[270px_minmax(0,1fr)_270px] gap-6 xl:gap-10 items-center">

                        {/* ================= LEFT BOOK ================= */}
                        <motion.div
                            {...fadeUp}
                            transition={{
                                ...fadeUp.transition,
                                delay: 0.05,
                            }}
                            className="flex justify-center lg:justify-start order-1"
                        >
                            <img
                                src="/images/free-book-1.png"
                                alt="Direct Selling as Side Hustle"
                                className="w-full max-w-[210px] lg:max-w-[225px] xl:max-w-[260px] h-auto rounded-lg shadow-2xl"
                            />
                        </motion.div>


                        {/* ================= CENTER ================= */}
                        <div className="text-center order-2">

                            {/* E-Book */}
                            <motion.div
                                {...fadeUp}
                                className="inline-flex items-center gap-2 bg-black/90 text-white rounded-full px-5 py-2 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase mb-5"
                            >
                                <Clock className="h-3.5 w-3.5 text-[#FFD700]" />
                                E-BOOK
                            </motion.div>


                            {/* Get Your Free E-Books */}
                           {/* Claim Your E-Books */}
<motion.h2
    {...fadeUp}
    transition={{
        ...fadeUp.transition,
        delay: 0.1,
    }}
    className="font-[Outfit] font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-5xl tracking-tight leading-tight"
>
    Claim Your E-Books
</motion.h2>


{/* E-Book Value */}
<motion.div
    {...fadeUp}
    transition={{
        ...fadeUp.transition,
        delay: 0.2,
    }}
    className="mt-4 flex items-center justify-center gap-3 font-[Manrope] font-bold"
>
    <span className="text-white text-lg sm:text-xl md:text-2xl">
        E-Book Value
    </span>

    {/* ₹299 with X cancellation mark */}
    <span className="relative inline-flex items-center justify-center text-[#FFD700] font-extrabold text-2xl sm:text-3xl md:text-4xl px-1">
        ₹299

        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="absolute w-[35%] h-[4px] bg-black rounded-full rotate-45" />
            <span className="absolute w-[35%] h-[4px] bg-black rounded-full -rotate-45" />
        </span>
    </span>

    <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
        →
    </span>

    <span className="text-[#FFD700] font-extrabold text-2xl sm:text-3xl md:text-4xl">
        FREE
    </span>
</motion.div>


{/* Description */}
<motion.p
    {...fadeUp}
    transition={{
        ...fadeUp.transition,
        delay: 0.3,
    }}
    className="mt-6 text-white/95 font-[Manrope] text-[11px] sm:text-base md:text-xl font-medium leading-relaxed text-center whitespace-nowrap"
>
    உங்கள் பெயர் மற்றும் WhatsApp எண்ணை பதிவு செய்யுங்கள்.
    <br />
    இந்த Exclusive E-Books உங்கள் WhatsApp-க்கு அனுப்பப்படும்.
</motion.p>

{/* Get Access Button */}
<motion.div
    {...fadeUp}
    transition={{
        ...fadeUp.transition,
        delay: 0.4,
    }}
    className="mt-7"
>
    <button
        type="button"
        onClick={() => {
            setShowBookForm(true);
            setSubmitted(false);
        }}
        data-testid="urgency-cta-button"
        className="w-full max-w-[520px] inline-flex items-center justify-center gap-2 bg-[#FFD700] text-black font-extrabold text-base sm:text-lg py-3.5 px-8 rounded-lg shadow-[0_0_35px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-transform"
    >
        GET ACCESS
        <ArrowRight className="h-5 w-5" />
    </button>
</motion.div>
                     

                        </div>


                        {/* ================= RIGHT BOOK ================= */}
                        <motion.div
                            {...fadeUp}
                            transition={{
                                ...fadeUp.transition,
                                delay: 0.1,
                            }}
                            className="flex justify-center lg:justify-end order-3"
                        >
                            <img
                                src="/images/free-book-2.png"
                                alt="நேரடி விற்பனை எனும் சைட் ஹஸ்ல்"
                                className="w-full max-w-[210px] lg:max-w-[225px] xl:max-w-[260px] h-auto rounded-lg shadow-2xl"
                            />
                        </motion.div>

                    </div>

                </div>
            </section>


            {/* =========================================================
                FREE E-BOOK REGISTRATION POPUP
            ========================================================= */}

            {showBookForm && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setShowBookForm(false)}
                >
                    <div
                        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Close */}
                        <button
                            type="button"
                            onClick={() => setShowBookForm(false)}
                            className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold"
                            aria-label="Close"
                        >
                            ×
                        </button>


                        {!submitted ? (
                            <>

                                <div className="text-center mb-6">

                                    <h3 className="font-[Outfit] font-extrabold text-black text-2xl sm:text-3xl">
                                        Get Your Free E-Books
                                    </h3>

                                    <p className="mt-2 text-gray-600 font-[Manrope] text-sm sm:text-base">
                                        Enter your details to receive the books.
                                    </p>

                                </div>


                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >

                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-black outline-none focus:border-black focus:ring-2 focus:ring-black/10"
                                            required
                                        />
                                    </div>


                                    {/* WhatsApp */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                            WhatsApp Number
                                        </label>

                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder="Enter your WhatsApp number"
                                            inputMode="numeric"
                                            maxLength="10"
                                            className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-black outline-none focus:border-black focus:ring-2 focus:ring-black/10"
                                            required
                                        />
                                    </div>


                                    {/* City */}
                                    <div>
                                        <label className="block text-sm font-bold text-gray-800 mb-1.5">
                                            City
                                        </label>

                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Enter your city"
                                            className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-black outline-none focus:border-black focus:ring-2 focus:ring-black/10"
                                            required
                                        />
                                    </div>


                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-black text-[#FFD700] font-extrabold text-base sm:text-lg py-4 px-6 rounded-lg hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:hover:scale-100"
                                    >
                                        {submitting
                                            ? "Submitting..."
                                            : "GET MY FREE E-BOOKS"}
                                    </button>

                                </form>

                            </>
                        ) : (

                            <div className="text-center py-6">

                                <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                                    <span className="text-green-600 text-3xl">
                                        ✓
                                    </span>
                                </div>

                                <h3 className="font-[Outfit] font-extrabold text-black text-2xl sm:text-3xl">
                                    Registration Successful!
                                </h3>

                                <p className="mt-3 text-gray-600 font-[Manrope]">
                                    Thank you for registering for the free e-books.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setShowBookForm(false)}
                                    className="mt-6 bg-black text-[#FFD700] font-bold px-6 py-3 rounded-lg"
                                >
                                    Close
                                </button>

                            </div>

                        )}

                    </div>
                </div>
            )}

        </>
    );
};
/* ---------------- 11. FINAL CTA ---------------- */
const FinalCTASection = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (status !== "idle") {
            setStatus("idle");
            setMessage("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.phone.trim()) {
            setStatus("error");
            setMessage("Please enter your name and WhatsApp number.");
            return;
        }

        setStatus("submitting");
        setMessage("");

        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    phone: formData.phone.trim(),
                    email: formData.email.trim(),
                }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || "Unable to submit your details.");
            }

            setStatus("success");
            setMessage("Thank you! Your details have been received. We’ll contact you shortly.");

            setFormData({
                name: "",
                phone: "",
                email: "",
            });
        } catch (error) {
            console.error("Lead form error:", error);
            setStatus("error");
            setMessage(
                "Something went wrong. Please try again in a moment."
            );
        }
    };

    return (
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
                    <span className="text-[#FFD700]"> change the way you work?</span>
                </motion.h2>

                <motion.p
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: 0.2 }}
                    className="mt-6 text-neutral-400 font-[Manrope] text-base sm:text-lg"
                >
                    One decision today can save your time and help you step into a new-age way of working.
                </motion.p>

                <motion.form
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: 0.3 }}
                    onSubmit={handleSubmit}
                    className="mt-12 mx-auto max-w-xl bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 text-left shadow-[0_0_50px_rgba(255,215,0,0.08)]"
                >
                    <div className="space-y-5">
                        <div>
                            <label
                                htmlFor="lead-name"
                                className="block mb-2 text-sm font-semibold text-neutral-200 font-[Manrope]"
                            >
                                Name <span className="text-[#FFD700]">*</span>
                            </label>
                            <input
                                id="lead-name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                autoComplete="name"
                                required
                                className="w-full rounded-xl bg-white text-[#0B0B0B] border border-white/10 px-4 py-4 font-[Manrope] text-base outline-none focus:ring-2 focus:ring-[#FFD700] transition"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="lead-phone"
                                className="block mb-2 text-sm font-semibold text-neutral-200 font-[Manrope]"
                            >
                                WhatsApp Number <span className="text-[#FFD700]">*</span>
                            </label>
                            <input
                                id="lead-phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your WhatsApp number"
                                autoComplete="tel"
                                inputMode="tel"
                                required
                                className="w-full rounded-xl bg-white text-[#0B0B0B] border border-white/10 px-4 py-4 font-[Manrope] text-base outline-none focus:ring-2 focus:ring-[#FFD700] transition"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="lead-email"
                                className="block mb-2 text-sm font-semibold text-neutral-200 font-[Manrope]"
                            >
                                Email <span className="text-neutral-500">(Optional)</span>
                            </label>
                            <input
                                id="lead-email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                autoComplete="email"
                                className="w-full rounded-xl bg-white text-[#0B0B0B] border border-white/10 px-4 py-4 font-[Manrope] text-base outline-none focus:ring-2 focus:ring-[#FFD700] transition"
                            />
                        </div>

                        <button
                            type="submit"
                            data-testid="final-cta-button"
                            disabled={status === "submitting"}
                            className="group w-full inline-flex items-center justify-center gap-3 bg-[#FFD700] text-black font-bold text-lg sm:text-xl tracking-wide py-5 px-8 rounded-xl shadow-[0_0_50px_rgba(255,215,0,0.4)] hover:shadow-[0_0_80px_rgba(255,215,0,0.7)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {status === "submitting" ? "Submitting..." : "Join Now"}
                            {status !== "submitting" && (
                                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                            )}
                        </button>

                        {message && (
                            <div
                                role="status"
                                className={`rounded-xl px-4 py-3 text-center font-[Manrope] text-sm sm:text-base ${status === "success"
                                    ? "bg-green-500/10 border border-green-500/30 text-green-300"
                                    : "bg-red-500/10 border border-red-500/30 text-red-300"
                                    }`}
                            >
                                {message}
                            </div>
                        )}

                        <p className="text-center text-xs text-neutral-500 font-[Manrope]">
                            Your details are securely submitted for our team to contact you.
                        </p>
                    </div>
                </motion.form>

                <p className="mt-6 text-xs sm:text-sm text-neutral-500 font-[Manrope]">
                    © {new Date().getFullYear()} Direct Selling Tamil Academy — Senthilkumar Thanigachalam. All rights reserved.
                </p>
            </div>
        </section>
    );
};

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
           
            <WorkshopPromotionSection />
            <CoverPageSection />
            <HeroSection />
            <VideoSection />
            <CorePromiseSection />
            <ProblemSection />
            <PainPointsSection />
            <EmotionalSection />
            <SolutionSection />
            <AuthoritySection />
            <UrgencySection />
            <FinalCTASection />
            <StickyWhatsApp />
        </main>
    );
};

export default LandingPage;

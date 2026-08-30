import {
    Sparkles,
    ArrowRight,
    BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function HomeButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
    };

    function HeroSection() {
        return (
            <div
                className="bg-center md:pt-32 md:pb-20 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a72ca2f3-9dd1-4fe4-84ba-fe86468a5237_3840w.webp?w=800&q=80')] bg-cover pt-24 pb-12 relative"
                style={{
                    maskImage:
                        "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                <div className="lg:px-8 md:mt-20 md:mb-40 sm:px-6 max-w-7xl mt-12 mx-auto mb-20 px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* ================= LEFT CONTENT ================= */}
                        <div className="lg:col-span-7 space-y-4 sm:space-y-6">

                            {/* Badge */}
                            <div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
                                <div className="border-gradient inline-flex before:rounded-full bg-white/5 rounded-full py-2 px-3 sm:px-4 backdrop-blur-lg gap-x-2 sm:gap-x-3 items-center">
                                    <span className="text-[10px] sm:text-xs tracking-wider uppercase flex items-center gap-1.5 sm:gap-2 font-sans text-zinc-300">
                                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                        Smart Academic Workspace
                                    </span>
                                </div>
                            </div>

                            {/* Main Heading */}
                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll font-medium tracking-tighter font-manrope drop-shadow-lg animate"
                                style={{
                                    maskImage:
                                        "linear-gradient(150deg, transparent, black 0%, black 40%, transparent)",
                                    WebkitMaskImage:
                                        "linear-gradient(150deg, transparent, black 0%, black 40%, transparent)",
                                }}
                            >
                                Teach Smarter.
                                <br />

                                <span className="bg-clip-text font-medium text-transparent tracking-tighter font-manrope bg-gradient-to-br from-white to-[#ffcd75] pr-1">
                                    Track Better.
                                </span>

                                <br />

                                Make an Impact.
                            </h1>

                            {/* Description */}
                            <p className="[animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll text-base sm:text-lg text-white/70 max-w-xl animate">
                                A centralized workspace for faculty to manage
                                courses, monitor student progress, review academic
                                performance, and stay on top of teaching
                                responsibilities.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">

                                {/* Primary Button */}
                                <button onClick={handleClick} className="cursor-pointer group inline-flex transition-all duration-300 hover:shadow-lg hover:bg-zinc-200 text-sm font-medium text-zinc-900 bg-white rounded-full py-3 sm:py-4 px-6 sm:px-8 shadow-2xl gap-x-2 sm:gap-x-3 items-center justify-center">
                                    <span className="font-sans">
                                        Enter Faculty Portal
                                    </span>

                                    <ArrowRight
                                        size={16}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </button>

                                {/* Secondary Button
                                <button className="cursor-pointer   group inline-flex hover:text-white transition-all duration-300 hover:border-white hover:bg-white/5 text-sm font-medium text-zinc-300 border-white/20 border rounded-full py-3 sm:py-4 px-6 sm:px-8 gap-x-2 sm:gap-x-3 items-center justify-center">
                                    <CircleHelp size={17} />

                                    <span className="font-sans">
                                        Explore Features
                                    </span>
                                </button> */}

                            </div>
                        </div>

                        {/* ================= RIGHT CONTENT ================= */}
                        <div className="lg:col-span-5 space-y-4 sm:space-y-6">

                            {/* Academic Overview Card */}
                            <div className="overflow-hidden transition-all duration-300 ease-out border-gradient before:rounded-3xl bg-gradient-to-br from-white/10 via-white/0 to-white/10 w-full h-fit rounded-2xl sm:rounded-3xl relative shadow-2xl backdrop-blur-md">

                                <div className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll p-6 sm:p-8 relative animate">

                                    {/* Card Header */}
                                    <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">

                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ring-1 flex items-center justify-center bg-white/10 ring-white/20">
                                            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>

                                        <div>
                                            <div className="text-xs sm:text-sm text-white/60 font-sans">
                                                Faculty Dashboard
                                            </div>

                                            <div className="text-xl sm:text-2xl tracking-tighter font-manrope font-medium">
                                                Academic Overview
                                            </div>
                                        </div>

                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6">

                                        {/* Courses */}
                                        <div className="text-center px-2 py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5">
                                            <div className="text-xl sm:text-2xl leading-tight font-sans font-medium">
                                                8
                                            </div>

                                            <div className="text-[9px] sm:text-xs opacity-60 uppercase tracking-wide font-sans mt-1">
                                                Courses
                                            </div>
                                        </div>

                                        {/* Students */}
                                        <div className="text-center px-2 py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5">
                                            <div className="text-xl sm:text-2xl leading-tight font-sans font-medium">
                                                342
                                            </div>

                                            <div className="text-[9px] sm:text-xs opacity-60 uppercase tracking-wide font-sans mt-1">
                                                Students
                                            </div>
                                        </div>

                                        {/* Performance */}
                                        <div className="text-center px-2 py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5">
                                            <div className="text-xl sm:text-2xl leading-tight font-sans font-medium">
                                                86%
                                            </div>

                                            <div className="text-[9px] sm:text-xs opacity-60 uppercase tracking-wide font-sans mt-1">
                                                Performance
                                            </div>
                                        </div>

                                    </div>

                                    {/* Student Progress */}
                                    <div className="space-y-3 sm:space-y-4">

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs sm:text-sm text-white/70 font-sans">
                                                Students On Track
                                            </span>

                                            <span className="text-xs sm:text-sm font-sans">
                                                86%
                                            </span>
                                        </div>

                                        <div className="h-1.5 sm:h-2 bg-zinc-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-white to-white/70 rounded-full"
                                                style={{ width: "86%" }}
                                            />
                                        </div>

                                    </div>

                                    {/* Divider */}
                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent my-5 sm:my-6" />

                                    {/* Activity Status */}
                                    <div className="flex items-center justify-between">

                                        <div className="flex items-center gap-2">

                                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />

                                            <span className="text-xs sm:text-sm text-white/70 font-sans">
                                                Academic activity
                                            </span>

                                        </div>

                                        <span className="text-xs sm:text-sm font-medium font-sans">
                                            Up to date
                                        </span>

                                    </div>

                                </div>
                            </div>

                            {/* Workspace Features Card */}
                            <div className="overflow-hidden transition-all duration-300 [animation:fadeSlideIn_0.8s_ease-out_0.7s_both] animate-on-scroll border-gradient before:rounded-3xl bg-gradient-to-br from-white/10 via-white/0 to-white/10 w-full h-fit rounded-2xl sm:rounded-3xl relative shadow-2xl backdrop-blur-md animate">

                                <div className="p-6 sm:p-8 relative">

                                    <h3 className="text-base sm:text-lg mb-4 sm:mb-5 font-sans">
                                        Everything You Need to Teach Effectively
                                    </h3>

                                    {/* Feature Pills */}
                                    <div className="flex flex-wrap gap-2">

                                        {[
                                            "Courses",
                                            "Students",
                                            "Assignments",
                                            "Performance",
                                            "Doubts",
                                        ].map((item) => (
                                            <span
                                                key={item}
                                                className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-zinc-300 transition-all duration-300 hover:-translate-y-px hover:bg-white/15 font-sans"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                                                {item}
                                            </span>
                                        ))}

                                    </div>

                                    <p className="text-xs sm:text-sm text-white/50 font-sans mt-4 leading-relaxed">
                                        Manage your academic workflow from one
                                        centralized faculty workspace.
                                    </p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <HeroSection />;
}

export default HomeButton;
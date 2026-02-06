import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

const LandingPage = () => {
    const { user } = useAuthStore();

    return (
        <div style={{ fontFamily: 'Inter, sans-serif' }} className="min-h-screen bg-neutral-950 text-white relative overflow-hidden font-sans selection:bg-neutral-700 selection:text-white">
            {/* Subtle Monochrome Glows */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-neutral-800/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
                <div className="absolute bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-neutral-900/40 rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>
            </div>

            {/* Navbar */}
            <nav className="relative z-50 max-w-7xl mx-auto px-6 py-6 flex justify-between items-center bg-transparent backdrop-blur-sm top-0">
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-neutral-100 text-black font-black flex items-center justify-center rounded-xl text-xl shadow-lg shadow-white/5 border border-neutral-400">S</div>
                    <span className="font-bold text-lg tracking-tight hidden md:block text-neutral-100">Smart Task Analyzer</span>
                </div>
                <div className="flex gap-4 items-center">
                    {user ? (
                        <Link
                            to="/dashboard"
                            className="px-5 py-2.5 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 text-sm"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link to="/login" className="px-5 py-2.5 text-neutral-400 font-medium hover:text-white transition-colors text-sm">Log In</Link>
                            <Link to="/register" className="px-5 py-2.5 bg-neutral-900 border border-neutral-700 text-white font-bold rounded-lg hover:bg-neutral-800 transition-all text-sm shadow-md shadow-black/50">Get Started</Link>
                        </>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32 text-center">
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/80 text-neutral-300 text-xs font-semibold uppercase tracking-wider shadow-xl backdrop-blur-md hover:border-neutral-700 transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-neutral-500 animate-pulse"></span>
                    Algorithm-Driven Productivity Platform
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-8 bg-linear-to-b from-white via-neutral-200 to-neutral-600 bg-clip-text text-transparent drop-shadow-sm">
                    Stop Guessing.<br />
                    <span className="bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Start Executing.</span>
                </h1>

                <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Transform your overwhelming to-do list into a calculated plan of action.
                    <strong className="text-neutral-200 font-medium"> Smart Task Analyzer</strong> forces you to focus on what mathematically matters most.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                    <Link
                        to={user ? "/dashboard" : "/register"}
                        className="px-8 py-4 bg-white text-black text-base font-bold rounded-xl hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] w-full sm:w-auto"
                    >
                        {user ? "Go to Dashboard" : "Calculate My Priorities"}
                    </Link>
                    <a href="#how-it-works" className="px-8 py-4 bg-neutral-900/50 border border-neutral-800 text-neutral-300 text-base font-bold rounded-xl hover:bg-neutral-800 hover:text-white transition-all w-full sm:w-auto backdrop-blur-sm">
                        See How It Works
                    </a>
                </div>

                {/* Trusted By Strip */}
                <div className="pt-10 border-t border-neutral-900/50 max-w-4xl mx-auto">
                    <p className="text-neutral-600 text-xs font-bold uppercase tracking-widest mb-6">Trusted by professionals from</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale mix-blend-screen">
                        {/* Simple text logos for demo purpose */}
                        <div className="text-xl font-black text-white">ACME Corp</div>
                        <div className="text-xl font-bold text-white italic">StarkInd</div>
                        <div className="text-xl font-bold text-white">Oscorp</div>
                        <div className="text-xl font-black text-white tracking-tighter">CYBERDYNE</div>
                        <div className="text-xl font-bold text-white">Massive Dynamic</div>
                    </div>
                </div>
            </section>

            {/* Dynamic UI Preview Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 mb-32">
                <div className="relative border border-neutral-800 bg-neutral-950/80 backdrop-blur-xl rounded-2xl p-4 md:p-8 shadow-2xl">
                    <div className="absolute -inset-1 bg-linear-to-b from-white/5 to-transparent rounded-2xl blur-sm -z-10"></div>

                    {/* Inner Dashboard Replica - Matching Dashboard.jsx */}
                    <div className="max-w-4xl mx-auto space-y-8 font-sans">

                        {/* Header Replica */}
                        <header className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-center md:text-left">
                                <h1 className="text-2xl md:text-4xl font-black tracking-tight text-white uppercase">Smart Task Analyzer</h1>
                                <p className="text-neutral-500 mt-1 text-sm tracking-wide font-medium">Algorithm-Powered Priority Management</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-full pl-1 pr-4 py-1">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm">U</div>
                                    <span className="text-sm font-medium text-neutral-300">User</span>
                                </div>
                                <div className="p-2 text-neutral-500 rounded-full border border-transparent">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                                </div>
                            </div>
                        </header>

                        {/* Task Form Replica */}
                        <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-5 mb-8 opacity-60 pointer-events-none select-none grayscale-[0.5]">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                <div className="md:col-span-6 h-11 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center px-4 text-neutral-600 text-sm">Enter new task...</div>
                                <div className="md:col-span-2 h-11 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center px-4 text-neutral-600 text-sm">Impact...</div>
                                <div className="md:col-span-2 h-11 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center px-4 text-neutral-600 text-sm">Due...</div>
                                <div className="md:col-span-2 h-11 bg-white text-black font-bold rounded-lg flex items-center justify-center text-sm">Analyze</div>
                            </div>
                        </div>

                        {/* Task Queue Section Replica */}
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest whitespace-nowrap">Your Task Queue</h2>
                                    <div className="h-px w-20 md:w-32 bg-neutral-800"></div>
                                </div>

                                <div className="flex gap-1 bg-neutral-900/50 p-1 rounded-lg border border-neutral-800 overflow-x-auto">
                                    <div className="px-3 py-1.5 rounded-md text-xs font-bold bg-white text-black shadow-sm whitespace-nowrap">All Pending</div>
                                    <div className="px-3 py-1.5 rounded-md text-xs font-bold text-neutral-500 whitespace-nowrap">Due Today</div>
                                    <div className="px-3 py-1.5 rounded-md text-xs font-bold text-neutral-500 whitespace-nowrap">Tomorrow</div>
                                    <div className="px-3 py-1.5 rounded-md text-xs font-bold text-neutral-500 whitespace-nowrap">Overdue</div>
                                </div>
                            </div>

                            {/* Task Cards Grid */}
                            <div className="grid gap-4">
                                {/* TaskCard Replica 1: Top Priority */}
                                <div className="relative border rounded-xl p-5 border-red-900/30 bg-red-950/10 transition-all hover:scale-[1.01] shadow-[0_0_20px_rgba(255,255,255,0.02)]">
                                    <div className="absolute -top-3 left-4 text-[10px] font-black tracking-widest px-3 py-1 rounded-full border bg-red-600/20 text-red-500 border-red-600/50 backdrop-blur-md">
                                        HIGHEST PRIORITY
                                    </div>

                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h3 className="text-lg font-bold leading-tight text-white pr-20">Finalize Q4 Strategy Deck</h3>
                                            <div className="flex items-center gap-2 mt-1.5">
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded border bg-red-600/20 text-red-500 border-red-600/50">
                                                    CRITICAL OVERDUE
                                                </span>
                                                <p className="text-sm text-neutral-400 font-medium">Due: Today</p>
                                            </div>
                                            <p className="text-xs font-bold text-red-500 mt-2 animate-pulse">This Task is significantly delayed!</p>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div className="text-3xl font-black text-red-500">98</div>
                                            <div className="text-[10px] uppercase tracking-wider text-neutral-600 font-bold">Priority</div>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex gap-2">
                                        <div className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-neutral-900 text-neutral-400 border border-neutral-800 font-semibold tracking-wide">
                                            <span className="text-xs">🕒</span> 4H
                                        </div>
                                        <div className="text-xs px-2.5 py-1 rounded bg-neutral-900 text-neutral-400 border border-neutral-800 font-semibold tracking-wide">
                                            IMP: 5/5
                                        </div>
                                    </div>
                                </div>

                                {/* TaskCard Replica 2: Medium */}
                                <div className="relative border rounded-xl p-5 border-yellow-900/20 bg-yellow-950/5 opacity-80">
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h3 className="text-lg font-bold leading-tight text-neutral-200 pr-20">Review Engineering Candidates</h3>
                                            <div className="flex items-center gap-2 mt-1.5">
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded border bg-yellow-500/10 text-yellow-500 border-yellow-500/30">
                                                    DUE TOMORROW
                                                </span>
                                                <p className="text-sm text-neutral-500 font-medium">Due: Tomorrow</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div className="text-3xl font-black text-yellow-600">72</div>
                                            <div className="text-[10px] uppercase tracking-wider text-neutral-700 font-bold">Priority</div>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex gap-2">
                                        <div className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-neutral-900 text-neutral-500 border border-neutral-800 font-semibold tracking-wide">
                                            <span className="text-xs">🕒</span> 2H
                                        </div>
                                        <div className="text-xs px-2.5 py-1 rounded bg-neutral-900 text-neutral-500 border border-neutral-800 font-semibold tracking-wide">
                                            IMP: 4/5
                                        </div>
                                    </div>
                                </div>

                                {/* TaskCard Replica 3: Safe */}
                                <div className="relative border rounded-xl p-5 border-green-900/20 bg-green-950/5 opacity-50 grayscale hover:grayscale-0 transition-all">
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <h3 className="text-lg font-bold leading-tight text-neutral-400 pr-20">Update Internal Documentation</h3>
                                            <div className="flex items-center gap-2 mt-1.5">
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded border bg-green-600/10 text-green-500 border-green-600/30">
                                                    SAFE
                                                </span>
                                                <p className="text-sm text-neutral-600 font-medium">Due: in 5 days</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div className="text-3xl font-black text-green-700">45</div>
                                            <div className="text-[10px] uppercase tracking-wider text-neutral-800 font-bold">Priority</div>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex gap-2">
                                        <div className="flex gap-1 items-center text-xs px-2 py-1 rounded bg-neutral-900 text-neutral-600 border border-neutral-800 font-semibold tracking-wide">
                                            <span className="text-xs">🕒</span> 1H
                                        </div>
                                        <div className="text-xs px-2.5 py-1 rounded bg-neutral-900 text-neutral-600 border border-neutral-800 font-semibold tracking-wide">
                                            IMP: 3/5
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-neutral-900/20 border-y border-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Loved by Productive People</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">See how professionals are reclaiming their time.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <TestimonialCard
                            quote="I used to drown in tasks. Now I just do whatever the algorithm tells me to do. It's oddly liberating."
                            author="Sarah Jenkins"
                            role="Product Manager @ TechFlow"
                            stars={5}
                        />
                        <TestimonialCard
                            quote="The 'Safe' tab is a game changer. I finally know what I can ignore without guilt. Highly recommended."
                            author="David Chen"
                            role="Freelance Developer"
                            stars={5}
                        />
                        <TestimonialCard
                            quote="Simple, dark mode, and actually works. The priority scoring is scarily accurate to how I should actually work."
                            author="Elena Rodriguez"
                            role="Creative Director"
                            stars={4}
                        />
                    </div>
                </div>
            </section>
            <div class="poper-57"></div>
            {/* Features Grid */}
            <section className="py-32 px-6 max-w-7xl mx-auto" id="how-it-works">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-block mb-4 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                            Core Logic
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">The Brain is Built for <br /><span className="text-neutral-500">Creativity</span>, Not <span className="text-white decoration-neutral-700 underline underline-offset-4 decoration-2">Calculation</span>.</h2>
                        <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                            Trying to manually juggle deadlines, importance, and effort in your head causes "Decision Fatigue."
                            We offload that processing to a deterministic algorithm, freeing your mind to actually <i>do</i> the work.
                        </p>
                        <div className="flex flex-col gap-6">
                            <FeaturePoint title="Urgency (65%)" desc="The algorithm prioritizes impending deadlines above all else, ensuring you never miss a 'Today' task." />
                            <FeaturePoint title="Importance (25%)" desc="We weigh your defined impact level to ensure trivial urgent tasks rarely override critical projects." />
                            <FeaturePoint title="Effort (10%)" desc="A slight bias towards 'Quick Wins' helps maintain momentum without derailing your schedule." />
                        </div>
                    </div>

                    {/* Visual Algorithm Mockup */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-linear-to-r from-neutral-800 to-neutral-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="bg-neutral-950 border border-neutral-800 p-8 md:p-12 rounded-2xl relative shadow-2xl flex flex-col gap-6">

                            {/* Step 1: Input */}
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center font-black text-neutral-600">IN</div>
                                <div className="flex-1 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800 font-mono text-xs text-neutral-400">
                                    {`{ due: "2025-12-24", imp: "High", est: "2h" }`}
                                </div>
                            </div>

                            {/* Processing Lines */}
                            <div className="h-8 flex justify-center relative">
                                <div className="w-0.5 h-full bg-neutral-800"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950 px-2 text-xs font-bold text-neutral-600">PROCESSING</div>
                            </div>

                            {/* Step 2: Weights */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-xl text-center">
                                    <div className="text-[10px] uppercase font-bold text-neutral-500 mb-1">Urgency</div>
                                    <div className="text-white font-bold text-xl">0.65</div>
                                </div>
                                <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-xl text-center">
                                    <div className="text-[10px] uppercase font-bold text-neutral-500 mb-1">Impact</div>
                                    <div className="text-white font-bold text-xl">0.25</div>
                                </div>
                                <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-xl text-center">
                                    <div className="text-[10px] uppercase font-bold text-neutral-500 mb-1">Effort</div>
                                    <div className="text-white font-bold text-xl">0.10</div>
                                </div>
                            </div>

                            {/* Processing Lines */}
                            <div className="h-8 flex justify-center relative">
                                <div className="w-0.5 h-full bg-neutral-800"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950 px-2 text-xs font-bold text-neutral-600">CALCULATING</div>
                            </div>

                            {/* Step 3: Output */}
                            <div className="bg-white text-black p-6 rounded-xl shadow-xl text-center">
                                <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Final Priority Score</div>
                                <div className="text-5xl font-black tracking-tighter">92<span className="text-neutral-400 text-2xl">/100</span></div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto bg-linear-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-12 md:p-20 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to get structured?</h2>
                    <p className="text-xl text-neutral-400 mb-10 max-w-xl mx-auto">Join thousands of users who have swapped chaos for calculation.</p>
                    <Link
                        to="/register"
                        className="inline-block px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
                    >
                        Create Free Account
                    </Link>
                    <p className="mt-6 text-neutral-600 text-sm font-medium">No credit card required • Free forever for individuals</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-neutral-900 bg-neutral-950">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white text-black font-bold flex items-center justify-center rounded text-xs">S</div>
                        <span className="font-bold text-neutral-300">Smart Task Analyzer</span>
                    </div>
                    <p className="text-neutral-600 text-sm">
                        © 2025 Smart Task Analyzer. Designed for efficiency.
                    </p>
                    <div className="flex gap-6 text-neutral-500 text-sm font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const FeaturePoint = ({ title, desc }) => (
    <div className="flex gap-4 items-start">
        <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-white mt-0.5 font-bold text-xs">✓</div>
        <div>
            <h4 className="text-white font-bold mb-1">{title}</h4>
            <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

const TestimonialCard = ({ quote, author, role, stars }) => (
    <div className="p-8 bg-neutral-950 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-all flex flex-col justify-between h-full group">
        <div>
            <div className="flex gap-1 text-neutral-500 group-hover:text-white transition-colors text-sm mb-4">
                {[...Array(stars)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="text-neutral-300 text-lg mb-6 leading-relaxed font-medium">"{quote}"</p>
        </div>
        <div>
            <h5 className="text-white font-bold">{author}</h5>
            <p className="text-neutral-600 text-xs uppercase tracking-wide font-bold mt-1">{role}</p>
        </div>
    </div>
);

export default LandingPage;

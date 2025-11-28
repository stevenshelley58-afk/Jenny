"use client";



export default function EditorialCover() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#1B3B6F] text-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text */}
                <div className="space-y-8">
                    <div className="flex items-center gap-2 text-blue-200 font-medium tracking-wide uppercase text-sm">
                        <span className="w-8 h-[1px] bg-blue-300"></span>
                        Ignite PCG
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        EMPOWERING YOUR <br />
                        <span className="text-blue-200">FINANCIAL FUTURE</span>
                    </h1>

                    <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
                        Expert strategies for lasting success. We help you navigate the complexities of wealth management with confidence.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-900/20">
                            Our Services
                        </button>
                        <button className="px-8 py-4 bg-white text-[#1B3B6F] hover:bg-blue-50 font-semibold rounded-lg transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="relative h-full min-h-[500px] flex items-end justify-center lg:justify-end">
                    <img
                        src="/images/team-hero.png"
                        alt="Ignite PCG Team"
                        className="relative z-10 max-h-[80vh] object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}


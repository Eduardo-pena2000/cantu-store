export default function ParallaxBanner() {
    return (
        <section className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Fixed Attachment for Parallax Effect */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url('https://loremflickr.com/1920/1080/steak,fire,grill?lock=50')`
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <p className="text-[#FDFBF7] font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base animate-fade-in-up">
                    Experiencia Sensorial
                </p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-lg">
                    "El sonido del carbón, <br /> el aroma a leña y <span className="text-brand-yellow italic">el sabor perfecto</span>."
                </h2>
                <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full shadow-[0_0_20px_rgba(255,242,0,0.5)]" />
            </div>
        </section>
    );
}

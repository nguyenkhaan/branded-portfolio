import { customerStyling } from '../../../styles/styles';

export default function HeroSection() {
    return (
        <section
            className={`${customerStyling.sectionWrapper} h-screen flex-col items-center max-h-screen flex gap-4 justify-center`}
        >
            <h2 className="uppercase font-medium text-center text-text-secondary font-space tracking-wider text-base">
                Branded in White
            </h2>
            <h1 className="uppercase items-center text-center font-syne tracking-widest text-[80px] font-black leading-[0.9]">
                <span className="block my-3">DIGITAL</span>
                <span className="block">ARTISAN</span>
            </h1>
            <div className="h-18 my-3 rounded-md w-0.5 bg-[linear-gradient(to_bottom,white_0%,#d0d0d0_40%,#6b6b6b_70%,#131313_100%)] from-white to-[#a1a1a1] bg-red-500"></div>
            <h2 className="uppercase font-medium text-center text-text-secondary font-space tracking-wider text-sm">
                Scroll to explore 
            </h2>
        </section>
    );
}

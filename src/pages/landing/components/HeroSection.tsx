import { customerStyling } from '../../../styles/styles';

export default function HeroSection() {
    return (
        <section
            className={`${customerStyling.sectionWrapper} flex min-h-[calc(100svh-9rem)] flex-col items-center justify-center gap-4 py-14 text-center sm:min-h-[calc(100svh-10rem)] sm:py-16 lg:min-h-[calc(100svh-6rem)] lg:py-20`}
        >
            <h2 className="font-space text-sm font-medium tracking-[0.2em] text-text-secondary uppercase sm:text-base">
                Branded in White
            </h2>
            <h1 className="items-center font-syne text-[3.35rem] font-black leading-[0.88] tracking-[0.12em] uppercase sm:text-[4.5rem] md:text-[5.75rem] lg:text-[6.5rem] xl:text-[7.4rem]">
                <span className="my-2 block sm:my-3">DIGITAL</span>
                <span className="block">ARTISAN</span>
            </h1>
            <div className="my-2 h-14 w-0.5 rounded-md bg-[linear-gradient(to_bottom,white_0%,#d0d0d0_40%,#6b6b6b_70%,#131313_100%)] sm:my-3 sm:h-18"></div>
            <h2 className="font-space text-xs font-medium tracking-[0.2em] text-text-secondary uppercase sm:text-sm">
                Scroll to explore 
            </h2>
        </section>
    );
}

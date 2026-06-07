import Section from '../../../layouts/Section';
import SectionHeading from './SectionHeading';
import VisualCard from './VisualImage';
import v1 from '../../../assets/visual/v1.png';
import v2 from '../../../assets/visual/v2.png';
import v3 from '../../../assets/visual/v3.png';
import v4 from '../../../assets/visual/v4.png';
import v5 from '../../../assets/visual/v5.png';
import v6 from '../../../assets/visual/v6.png';

export default function VisualSection() {
    return (
        <Section
            header={
                <div className="w-full">
                    <SectionHeading>Visuals</SectionHeading>
                    <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <span className="max-w-2xl text-sm font-normal tracking-normal text-text-secondary font-sans sm:text-base">
                            Captured Moments & Digital Dreams — A collection of
                            aesthetic experiments.
                        </span>
                        <span className="font-syne text-xs font-medium tracking-[0.18em] text-text-secondary uppercase sm:text-sm lg:text-right">
                            Scroll to explore
                        </span>
                    </div>
                </div>
            }
        >
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                    <VisualCard url={v1} delay={0} />
                    <VisualCard url={v2} delay={0.1} />
                </div>
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                    <VisualCard url={v3} delay={0.2} />
                    <VisualCard url={v4} delay={0.3} />
                </div>
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 sm:col-span-2 lg:col-span-1">
                    <VisualCard url={v5} delay={0.4} />
                    <VisualCard url={v6} delay={0.5} />
                </div>
            </div>
        </Section>
    );
}

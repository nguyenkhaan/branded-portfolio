import Section from '../../../layouts/Section';
import SectionHeading from './SectionHeading';
import VisualCard from './VisualImage';

import v1 from '../../../assets/visual/v1.jpg';
import v2 from '../../../assets/visual/v2.jpeg';
import v3 from '../../../assets/visual/v3.jpg';
import v4 from '../../../assets/visual/v4.png';
import v5 from '../../../assets/visual/v5.png';
import v6 from '../../../assets/visual/v6.png';

export default function VisualSection() {
    return (
        <Section
            id={'visuals'}
            header={
                <div className="w-full">
                    <SectionHeading>Visuals</SectionHeading>
                    <div className="mt-3 flex flex-col gap-3 sm:mt-4 sm:gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <span className="max-w-2xl text-sm tracking-normal text-text-secondary font-space sm:text-base">
                            A collection of my moments worth remembering.
                            Captured by my memories
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
                    <VisualCard
                        url={v1}
                        delay={0}
                        subTitle="2024"
                        title="ABC1"
                    />
                    <VisualCard
                        url={v2}
                        delay={0.1}
                        subTitle="2026"
                        title="Back to school"
                    />
                </div>
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                    <VisualCard
                        url={v3}
                        delay={0.2}
                        subTitle="2026"
                        title="ĐTIT2026"
                    />
                    <VisualCard
                        url={v4}
                        delay={0.3}
                        subTitle="Future"
                        title="Next Memory"
                    />
                </div>
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 sm:col-span-2 lg:col-span-1">
                    <VisualCard
                        url={v5}
                        delay={0.4}
                        subTitle="Future"
                        title="Next Memory"
                    />
                    <VisualCard
                        url={v6}
                        delay={0.5}
                        subTitle="Future"
                        title="Next Memory"
                    />
                </div>
            </div>
        </Section>
    );
}

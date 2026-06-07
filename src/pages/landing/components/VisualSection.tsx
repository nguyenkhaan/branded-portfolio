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
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-text-secondary font-sans text-base font-normal tracking-normal">
                            Captured Moments & Digital Dreams — A collection of
                            aesthetic experiments.
                        </span>
                        <span className="uppercase font-medium text-center text-text-secondary font-syne tracking-wider text-sm">
                            Scroll to explore
                        </span>
                    </div>
                </div>
            }
        >
            <div className="flex mt-14 flex-wrap items-start justify-between">
                <div className="w-[32%] gap-6 flex flex-col">
                    <VisualCard url={v1} />
                    <VisualCard url={v2} />
                </div>
                <div className="w-[32%] gap-6 flex flex-col">
                    <VisualCard url={v3} />
                    <VisualCard url={v4} />
                </div>
                <div className="w-[32%] gap-6 flex flex-col">
                    <VisualCard url={v5} />
                    <VisualCard url={v6} />
                </div>
            </div>
        </Section>
    );
}

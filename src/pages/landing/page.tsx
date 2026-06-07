import ContributionSection from './components/ContributionSection';
import InternalMonoSection from './components/MonoLogueSection';
import TechSection from './components/TechSection';
import VisualSection from './components/VisualSection';
import WorkSection from './components/WorkSection';


export default function LandingPage() {
    return (
        <div className="my-24 w-full space-y-24 overflow-x-hidden sm:my-32 sm:space-y-32 lg:my-40 lg:space-y-40">
            <VisualSection />
            <WorkSection /> 
            <TechSection /> 
            <ContributionSection /> 
            <InternalMonoSection /> 
        </div>
    );
}
/*



*/ 

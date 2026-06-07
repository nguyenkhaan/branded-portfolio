import ContributionSection from './components/ContributionSection';
import InternalMonoSection from './components/MonoLogueSection';
import TechSection from './components/TechSection';
import VisualSection from './components/VisualSection';
import WorkSection from './components/WorkSection';


export default function LandingPage() {
    return (
        <div className="overflow-x-hidden w-full space-y-40 my-40">
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
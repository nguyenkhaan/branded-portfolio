import './App.css';
import DustCursor from './components/DustCursor';
import Navbar from './components/Navbar';
import SmoothScroll from './components/SmoothScroll';
import Marquee from './pages/landing/components/Marquee';
import HeroSection from './pages/landing/components/HeroSection';
import LandingPage from './pages/landing/page';
import Footer from './components/Footer';

function App() {
    return (
        <div className="overflow-x-clip">
            <DustCursor />
            <Navbar />
            <SmoothScroll>
                <main className="pt-36 sm:pt-40 lg:pt-24">
                    <HeroSection />
                    <Marquee />
                </main>
                <LandingPage /> 
                <Footer /> 
            </SmoothScroll>
        </div>
    );
}

export default App;

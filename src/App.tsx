import './App.css';
import Navbar from './components/Navbar';
import Marquee from './pages/landing/components/Marquee';
import HeroSection from './pages/landing/components/HeroSection';

function App() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                <HeroSection />
                <Marquee />
            </main>
        </>
    );
}

export default App;

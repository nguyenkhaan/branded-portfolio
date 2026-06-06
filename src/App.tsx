import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen flex items-start justify-center bg-background w-screen text-text">
            <div>
                Hello world
            </div>
        </div>
    );
}

export default App;

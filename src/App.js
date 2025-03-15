import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testing from "./Tester/Testing.tsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Testing />} />
            </Routes>
        </Router>
    );
}

export default App;

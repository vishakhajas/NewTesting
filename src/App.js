import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OutdoorSeating from "./OutdoorSeating/OutdoorSeating.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<OutdoorSeating />} />
            
            </Routes>
        </Router>
    );
}

export default App;

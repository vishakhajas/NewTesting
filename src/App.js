import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feedblog from "./FeedBlog/Feedblog.tsx";
// import Testing from "./Tester/Testing.tsx";


function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Testing />} /> */}
                <Route path='/' element={<Feedblog />} />
            </Routes>
        </Router>
    );
}

export default App;

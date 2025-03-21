import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./Category/Category.tsx";
import FeaturedProducts from "./Product/Product.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/category" element={<Category />} />
                <Route path="/" element={<FeaturedProducts />} />
            
            </Routes>
        </Router>
    );
}

export default App;

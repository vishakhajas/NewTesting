import Testing from "../Tester/Tester";
import Card from "./Card";
import Carousel from "./Carousel";
import FeaturedProducts from "./FeaturedProducts";
import LogoSlide from "./LogoSlide";
import MenuBar from "./MenuBar";

export default function AllPages() {
    return (
        <>
            <div className="allpages">
                <Testing/>
                {/* <MenuBar />
                <Carousel />
                <LogoSlide />
                <Card />
                <FeaturedProducts/> */}
            </div>
        </>
    )
}
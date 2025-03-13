import CardImg1 from './images/cardImg1.jpg';
import CardImg2 from './images/cardImg2.jpg';
import CardImg3 from './images/cardImg3.jpg';
export default function Card() {
    return (
        <>
            <div className='CardSection'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="card text-bg-dark">
                                <img src={CardImg1} className="card-img" alt="..." />
                                <div style={{ backgroundColor: '#0000006e',display:'flex' }} className="card-img-overlay ">
                                    <div className='cardContent'>
                                        <div>
                                            <h5 className="card-title">20% Off On Tank Tops</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                                            <p className="card-text"><button>Shop Now</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-bg-dark">
                                <img src={CardImg2} className="card-img" alt="..." />
                                <div style={{ backgroundColor: '#0000006e',display:'flex' }} className="card-img-overlay ">
                                    <div className='cardContent'>
                                        <div>
                                            <h5 className="card-title">Latest Eyewear For Youps</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                                            <p className="card-text"><button>Shop Now</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-bg-dark">
                                <img src={CardImg3} className="card-img" alt="..." />
                                <div style={{ backgroundColor: '#0000006e',display:'flex' }} className="card-img-overlay ">
                                    <div className='cardContent'>
                                        <div>
                                            <h5 className="card-title">Let's Lorem Suit Up!</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                                            <p className="card-text"><button>Check Out</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
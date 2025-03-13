import Logo from './images/logo.png';
export default function MenuBar() {
    return (
        <>
            <div className="menubar">

                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand logo" href="#">
                        <img src={Logo} alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Everything</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Women</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Men</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="text" placeholder="Search" />
                                    <button className="btn btn-primary" type="button">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
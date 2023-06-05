import './Header.css'
import 'bootstrap/dist/css/bootstrap.css';


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className=" navbar-brand" href="/home">Podcast</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/login"><i className='fas fa-user-circle' style={{ color: "gray" }}></i> Registro</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login"><i className='fas fa-user-circle' style={{ color: "gray" }}></i> Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Header;
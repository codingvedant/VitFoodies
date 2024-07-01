import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <div className="fullnav rounded mx-1 z-1 shadow sticky-top">
            <nav className="navbar p-0">
                <div className="container-fluid justify-content-between justify-content-md-center align-items-center">
                    <img className="img-fluid d-none d-md-block mx-3 images" src="https://cdn-icons-png.flaticon.com/512/685/685352.png" alt="" />
                    <h1 className="text-start text-sm-center brand display-4 m-0"> VIT Foodie's</h1>
                    <img className="img-fluid d-none d-md-block mx-3 images" src="https://cdn-icons-png.flaticon.com/512/685/685352.png" alt="" />
                    <button className="navbar-toggler d-block d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center align-center" id="main-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" aria-current="page" to="/">
                                    <span className="black">Home</span>
                                    <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/128/25/25694.png" alt="" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" to="/allrecipes">
                                    <span className="black">All Recipes</span>
                                    <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/684/684831.png" alt="" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" to="/addrecipe">
                                    <span className="black">Add Recipes</span>
                                    <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/2413/2413311.png" alt="" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" to="/contactus">
                                    <span className="black">Contact Us</span>
                                    <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid fw-bold">
                <nav className="navbar navbar-expand-md bg-body-tertiary fs-4 p-0 pb-8">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link d-flex align-items-center fontx" aria-current="page" to="/">
                                        <span className="black">Home</span>
                                        <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/128/25/25694.png" alt="" />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link d-flex align-items-center fontx" to="/allrecipes">
                                        <span className="black">All Recipes</span>
                                        <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/684/684831.png" alt="" />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link d-flex align-items-center fontx" to="/addrecipe">
                                        <span className="text-black">Add Recipes</span>
                                        <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/2413/2413311.png" alt="" />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link d-flex align-items-center fontx" to="/contactus">
                                        <span className="black">Contact Us</span>
                                        <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt="" />
                                    </Link>
                                </li>
                            </ul>
                            <span className="navbar-text d-flex">
                                {!user && (
                                    <div className="auth-group d-flex">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <Link className="nav-link d-flex align-items-center fontx" to="/login">
                                                    <span>Login</span>
                                                    <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/9623/9623110.png" alt="" />
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link d-flex align-items-center fontx" to="/signup">
                                                    <span>Signup</span>
                                                    <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/1001/1001371.png" alt="" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                {user && (
                                    <div className="logout-group d-flex">
                                        <span className="nav-link -flex align-items-center fontx me-2"><small>{user.email}</small></span>
                                        <button className="nav-link btn d-flex align-items-center fontx" onClick={handleClick}>
                                            <span>Logout</span>
                                            <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/9623/9623110.png" alt="" />
                                        </button>
                                    </div>
                                )}
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar

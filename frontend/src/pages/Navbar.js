import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };

    return (
        <div className="fullnav rounded mx-1 z-1 shadow sticky-top">
            <nav className="navbar p-0">
                <div className="container-fluid justify-content-between justify-content-md-center align-items-center">
                    <Link to="/">
                        <img className="img-fluid d-none d-md-block mx-3 images" src="https://cdn-icons-png.flaticon.com/512/685/685352.png" alt="Home Icon" />
                    </Link>
                    <h1 className="text-start text-sm-center brand display-4 m-0"> VIT Foodie's</h1>
                    <Link to="/">
                        <img className="img-fluid d-none d-md-block mx-3 images" src="https://cdn-icons-png.flaticon.com/512/685/685352.png" alt="Home Icon" />
                    </Link>
                    <div className="d-flex align-items-center">
                        {user && (
                            <Link to="/cart" className="d-block d-md-none">
                                <img className="img-fluid mx-2 logos" src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="Cart Icon" />
                            </Link>
                        )}
                        <button className="navbar-toggler d-block d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle Navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse justify-content-center align-center" id="main-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {user && (
                                    <span className="nav-link d-flex align-items-center text-black">
                                        Hello, {user.firstName}!
                                    </span>
                                )}
                                <Link className="nav-link d-flex align-items-center" aria-current="page" to="/">
                                    <span className="black">Home</span>
                                    <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/128/25/25694.png" alt="Home Icon" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" to="/addrecipe">
                                    <span className="black">Add Recipes</span>
                                    <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/2413/2413311.png" alt="Add Recipes Icon" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" to="/contactus">
                                    <span className="black">Contact Us</span>
                                    <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt="Contact Us Icon" />
                                </Link>
                            </li>
                            {user && (
                                <li className="nav-item">
                                    <button className="nav-link btn d-flex align-items-center" onClick={handleClick}>
                                        <span className="black">Logout</span>
                                        <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/9623/9623110.png" alt="Logout Icon" />
                                    </button>
                                </li>
                            )}
                            {!user && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex align-items-center" to="/login">
                                            <span>Login</span>
                                            <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/9623/9623110.png" alt="Login Icon" />
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex align-items-center" to="/signup">
                                            <span>Signup</span>
                                            <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/1001/1001371.png" alt="Signup Icon" />
                                        </Link>
                                    </li>
                                </>
                            )}
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
                                        <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/128/25/25694.png" alt="Home Icon" />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link d-flex align-items-center fontx" to="/allrecipes">
                                        <span className="black">All Recipes</span>
                                        <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/684/684831.png" alt="All Recipes Icon" />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link d-flex align-items-center fontx" to="/contactus">
                                        <span className="black">Contact Us</span>
                                        <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt="Contact Us Icon" />
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
                                                    <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/9623/9623110.png" alt="Login Icon" />
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link d-flex align-items-center fontx" to="/signup">
                                                    <span>Signup</span>
                                                    <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/1001/1001371.png" alt="Signup Icon" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                {user && (
                                    <div className="logout-group d-flex">
                                        <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/128/747/747376.png" alt="User Icon" />
                                        <span className="nav-link d-flex align-items-center fontx me-2"><small>{user.firstName}</small></span>
                                        <button className="nav-link btn d-flex align-items-center fontx" onClick={handleClick}>
                                            <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/9623/9623110.png" alt="Logout Icon" />
                                        </button>
                                        <Link to="/cart" className="nav-link d-flex align-items-center fontx">
                                            <img className="img-fluid mx-1 logos" src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="Cart Icon" />
                                        </Link>
                                    </div>
                                )}
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;

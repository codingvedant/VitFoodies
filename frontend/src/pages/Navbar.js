import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div class="fullnav rounded mx-1 z-1 shadow sticky-top">
            <nav className="navbar p-0 ">
            <div className="container-fluid justify-content-between justify-content-md-center align-items-center">
                    <img class="img-fluid d-none d-md-block mx-3 images"src="https://cdn-icons-png.flaticon.com/512/685/685352.png" alt="" />
                    <h1 class="text-start text-sm-center brand display-4 m-0 "> VIT Foodie's</h1>
                    <img class="img-fluid d-none d-md-block mx-3 images"src="https://cdn-icons-png.flaticon.com/512/685/685352.png" alt="" />
                    <button class="navbar-toggler d-block d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center align-center" id="main-nav">
                        <ul className="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link d-flex align-items-center" aria-current="page" to="/">
                                    <span class="black">Home</span>
                                    <img class="img-fluid mx-1 logos"src="https://cdn-icons-png.flaticon.com/128/25/25694.png" alt="" />
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link d-flex align-items-center" to="/allrecipes">
                                    <span class="black">All Recipes</span>
                                    <img class="img-fluid mx-1 logos"src="https://cdn-icons-png.flaticon.com/512/684/684831.png" alt="" />
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link d-flex align-items-center" to="/addrecipe">
                                    <span class="black">Add Recipes</span>
                                    <img class="img-fluid mx-1 logos"src="https://cdn-icons-png.flaticon.com/512/2413/2413311.png" alt="" />
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link d-flex align-items-center" to="/contactus">
                                    <span class="black">Contact Us</span> 
                                    <img class="img-fluid mx-1 logos"src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt=""/>
                                </Link>
                            </li>
                        </ul>
                    </div>

            </div>
        </nav>

        <div class="container-fluid fw-bold">
            <nav class="navbar navbar-expand-md bg-body-tertiary fs-4 p-0 pb-8">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-0 mb-lg-0 ">
                            <li class="nav-item">
                                <Link class="nav-link d-flex align-items-center fontx" aria-current="page" to="/">
                                    <span class="black">Home</span>
                                    <img class="img-fluid mx-1 logos"src="https://cdn-icons-png.flaticon.com/128/25/25694.png" alt="" />
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link d-flex align-items-center fontx" to="/allrecipes">
                                    <span class="black">All Recipes</span>
                                    <img class="img-fluid mx-1 logos"src="https://cdn-icons-png.flaticon.com/512/684/684831.png" alt="" />
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link d-flex align-items-center fontx" to="/addrecipe">
                                    <span class="black">Add Recipes</span>
                                    <img class="img-fluid mx-1 logos"src="https://cdn-icons-png.flaticon.com/512/2413/2413311.png" alt="" />
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link d-flex align-items-center fontx" to="/contactus">
                                    <span class="black">Contact Us</span> 
                                    <img class="img-fluid mx-1 logos"src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt=""/>
                                </Link>
                                
                            </li>
                        </ul>
                        <span class="navbar-text ">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center fontx" href="#login">
                                    <span>Login</span> 
                                    <img class="img-fluid mx-1 logos"src="https://cdn-icons-png.flaticon.com/512/9623/9623110.png" alt=""/>
                                    
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center fontx" href="#signup">
                                    <span>Signup</span> 
                                    <img class="img-fluid mx-1 logos"src="https://cdn-icons-png.flaticon.com/512/1001/1001371.png" alt=""/>

                                </a>
                            </li>
                            </ul>
                           
                        </span>
                    </div>
                </div>
            </nav>
        </div>
        </div>
        
        
      );
}
 
export default Navbar;
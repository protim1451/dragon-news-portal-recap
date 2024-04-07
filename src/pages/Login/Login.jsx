import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate  } from 'react-router-dom';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
            .then(result => {
                console.log(result);
                navigate(location?.state? location.state: '/')
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center mx-auto my-10">Please Login</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center">Don't Have an account? <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
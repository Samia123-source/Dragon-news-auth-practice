import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar"
import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";


const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')
    console.log(email, password);
    
    signIn(email, password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error);

    })
    
  }
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <h2 className="text-3xl text-center my-10">Login your account</h2>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset md:w-3/4 lg:w-1/2 mx-auto">
            <label className="label">Email</label>
            <input type="email" className="input" name='email' required placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" name='password' required placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center mt-4 ">Don't have an account?<Link className='text-blue-600 font-bold ml-2' to='/register'>Register</Link>
        </p>
      </div>


    </div>
  )
}

export default Login;
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar"

import { AuthContext } from "../../Provider/Authprovider";
import { useContext } from "react";


const Register = () => {
 const{createUser} = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);


    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password')
    console.log(name, photo, email, password);

  //  create user

  createUser(email, password)
  .then(result =>{
    console.log(result.user)
  })
  .catch(error =>{
    console.error(error)
  })
  }

  return (
    <div>
      <Navbar> </Navbar>
      <div>
        <h2 className="text-3xl text-center my-10">Register your account</h2>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset md:w-3/4 lg:w-1/2 mx-auto">
            <label className="label">Your Name</label>
            <input type="text" className="input" name='name' placeholder="Enter Your Name" />
            <label className="label">Photo URL</label>
            <input type="text" className="input" name='photo' placeholder="Enter Your photo url" />
            <label className="label">Email</label>
            <input type="email" className="input" name='email' required placeholder="Enter your Email Address" />
            <label className="label">Password</label>
            <input type="password" className="input" name='password' placeholder="Enter your Password" />
            <p>Accept term and conditions</p>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p className="text-center mt-4 ">Already have an account? <Link className='text-blue-600 font-bold ml-2' to='/login'>Login</Link> </p>
      </div>


    </div>
  )
}

export default Register
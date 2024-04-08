import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Register = () => {

const {registerUser} = useContext(AuthContext)


const handelRegister = (e) =>{
      e.preventDefault()
      const name = e.target.name.value;
      const photo = e.target.photo.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      console.log(name, photo , email , password , confirmPassword);
      registerUser(email,password)
}



    return (
        <div className="mt-32 w-[40%] mx-auto min-w[500px] border-2 border-red-300 p-3 rounded-xl">
            <form onSubmit={handelRegister} className="">
          {/* -------------- */}
            <div>
                <p>Name</p>
                <input name="name" type="text" placeholder="Type here"
                className="input input-bordered w-full " />
            </div>
            {/* --------- */}
            <div>
                <p>Photo</p>
                <input name="photo" type="text" placeholder="Type here"
                className="input input-bordered w-full " />
            </div>
            {/* --------- */}
            <div>
                <p>Email</p>
                <input name="email" type="text" placeholder="Type here"
                className="input input-bordered w-full " />
            </div>
            {/* --------- */}
            <div>
                <p>Password</p>
                <input name="password" type="text" placeholder="Type here"
                className="input input-bordered w-full " />
            </div>
            {/* --------- */}
            <div>
                <p>Confirm Password</p>
                <input name="confirmPassword" type="text" placeholder="Type here"
                className="input input-bordered w-full " />
            </div>
            {/* --------- */}






            <button type="submit" href="#_" className="relative w-full mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Register</span>
<span className="relative invisible">Register</span>
                          </button>
            </form>
        </div>
    );
};

export default Register;
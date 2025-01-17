import React, { createContext, useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';



const Home = () => {
    
 
   const user = useContext(AuthContext)
   console.log(user);


    return (
       <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           
            <Link to="/register" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
       </div>
    );
};

export default Home;
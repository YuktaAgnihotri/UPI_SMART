import React, { useState } from 'react';

const SignIn : React.FC =()=>{
    const [email, setEmail]   = useState('');
    const [password, setPassword] = useState('');
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
      };

    return(
        <>
        <div className="sign-in">
         <h2> Login </h2>
         <form onSubmit={handleSubmit}>
            <label htmlFor=""> Email </label>
            <input 
            type= "email"  
            id= "email"
            placeholder="enter email"
             value ={email} 
             onChange={(e)=> setEmail(e.target.value)}
             required/>
            <input 
            type= "password" 
            id = 'password'
            placeholder=' enter password'
            value ={password} 
             onChange={(e)=> setPassword(e.target.value)}
             required/> 
         </form>
            </div>
        </>
      );
}
export default SignIn;
'use client'
import React, { useState } from 'react';
import  {useRouter} from 'next/navigation';

const SignIn : React.FC =()=>{
    const [email, setEmail]   = useState('');
    const [password, setPassword] = useState('');
    const [errors , setErrors] = useState<Record<string, string[]>>({});
    const router = useRouter();
 

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});

        const res = await fetch('/api/SignIn' , {
          method: 'POST' ,
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({email , password})
        })

        const data = await res.json();

        if(!res.ok){
          setErrors(data.errors ?? { form: [data.message ?? 'Something went wrong'] });
        return;
        }
        router.push('/user')
      };

    return(
        <>
        <div className="sign-in">
         <h2> SignIN </h2>
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
             <button type='submit' 
             className='bg-green-400 rounded p-3'>
              submit
             </button>
         </form>
            </div>
        </>
      );
}
export default SignIn;
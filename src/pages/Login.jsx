import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { login, signup } from '../firebase'
import { toast } from 'react-toastify'
import netflix_spinner from '../assets/netflix_spinner.gif'

export default function Login() {
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false)

 // In your Login component, add validation
const user_auth = async (event) => {
  event.preventDefault();
  setLoading(true)
  
  // Add validation
  if (!email || !password) {
    toast.error("Please enter both email and password");
    return;
  }
  
  if (signState === "Sign Up" && !name) {
    toast.error("Please enter your name");
    return;
  }
  
  if (password.length < 6) {
    toast.error("Password should be at least 6 characters");
    return;
  }

  try {
    if (signState === "Sign In") {
      await login(email, password);
      
    } else {
      await signup(name, email, password);
    }
    setLoading(false)
  } catch (error) {
    console.error("Authentication error:", error);
  }
}

  return (
    loading ? <div className='w-full h-screen flex items-center justify-center'>
      <img src={netflix_spinner} alt="" className='w-15' />
    </div>:
    <div>
      <div className='sm:px-[8%] sm:py-12 px-[5%] py-4 bg-cover min-h-screen' style={{ backgroundImage: `linear-gradient(#0000007e, #0000007e), url('/background_banner.jpg')` }}>
        <img src={logo} alt="Netflix Logo" className='w-[150px]' />
        <div className='w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-lg sm:py-10 sm:px-14 p-5 mx-auto mt-8'>
          <h1 className='font-bold text-3xl mb-7 text-white'>{signState}</h1>
          <form className='flex flex-col gap-4 '>
            {signState === "Sign Up" && (
              <input 
                className='w-full h-12 bg-[#333] text-white border-0 outline-none rounded px-5 text-md font-medium placeholder-gray-400' 
                type="text" 
                placeholder='Your Name' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            )}
            <input 
              className='w-full h-12 bg-[#333] text-white border-0 outline-none rounded px-5 text-md font-medium placeholder-gray-400' 
              type="email" 
              placeholder='Email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              className='w-full h-12 bg-[#333] text-white border-0 outline-none rounded px-5 text-md font-medium placeholder-gray-400' 
              type="password" 
              placeholder='Password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button 
              className='w-full border-0 outline-none p-3 bg-[#e50914] text-white rounded text-md font-medium cursor-pointer hover:bg-[#f6121d] transition-colors mt-4' 
              onClick={user_auth} 
              type='submit'
            >
              {signState}
            </button>
            <div className='flex items-center justify-between text-[#b3b3b3] text-sm mt-4'>
              <div className='flex items-center gap-2'>
                <input type="checkbox" className='w-4 h-4' />
                <label>Remember Me</label>
              </div>
              <p className='cursor-pointer hover:underline'>Need help?</p>
            </div>
          </form>
          <div className='mt-8 text-[#737373]'>
            {signState === "Sign In" ? (
              <p>New to Netflix? 
                <span className='ml-2 font-bold text-white cursor-pointer hover:underline' onClick={() => {setSignState("Sign Up"),scrollTo(0,0)}}>
                  Sign up now.
                </span>
              </p>
            ) : (
              <p>Already have account? 
                <span className='ml-2 font-bold text-white cursor-pointer hover:underline' onClick={() => {setSignState("Sign In"),scrollTo(0,0)}}>
                  Sign in now.
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className='bg-[#171717] pt-12 pb-16 px-8 md:px-40 text-[#8A93A5]'>
        <p className='mb-8'>Questions? <span className='underline cursor-pointer'>Contact us.</span></p>
        <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'>
          <li className='cursor-pointer hover:underline'>FAQ</li>
          <li className='cursor-pointer hover:underline'>Help Center</li>
          <li className='cursor-pointer hover:underline'>Terms of Use</li>
          <li className='cursor-pointer hover:underline'>Privacy</li>
          <li className='cursor-pointer hover:underline'>Cookie Preferences</li>
          <li className='cursor-pointer hover:underline'>Corporate Information</li>
        </ul>
      </div>
    </div>
  )
}
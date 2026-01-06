import React, { useCallback,useEffect,useState,useRef} from 'react'

function PasswordGen() {
 const [length,setLength]=useState(21);
 const [numberAllowed,setNumberAllowed]=useState(false);
 const [charAllowed,setCharAllowed]=useState(false);
 const [password,setPassword]=useState("")

 const passwordRef=useRef(null)

 const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
     if (numberAllowed) str+= "0123456789";
    if(charAllowed) str+="@#$%^&*()";
    for(let i=0;i< length;i++){
        let char=Math.floor(Math.random()*str.length)+1;
        pass+=str.charAt(char)
    }
   
    setPassword(pass);
 }, [length,numberAllowed,charAllowed,setPassword])

let copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,)
 window.navigator.clipboard.writeText(password);

},[password])
 useEffect(()=>{
    passwordGenerator()

 },[length,numberAllowed,charAllowed,passwordGenerator]) 


  return (
  <>
  <div className="bg-slate-700 p-6 rounded-xl w-[600px] mx-auto">
  <h1 className="text-orange-500 text-xl text-center mb-6">
    Password generator
  </h1>

  <div className="flex items-center gap-3">
    <input
      type="text"
      placeholder="password"
      value={password}
      readOnly
      ref={passwordRef}
      className="w-full px-4 py-3 rounded-md bg-yellow-100 text-orange-500 outline-none mb-6"
    />

    <button
    onClick={copyPasswordToClipboard}
      className="px-5 py-3 bg-blue-600 text-black rounded-md mb-5"
    >
      Copy
    </button>

  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>

        <input
         type="range"
        name=''
        id=''
        min={2}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        
        
        />
        <label className='text-orange-500'>Length:{length}</label>
    </div>
    <div className='flex items-center gap-x-1 text-orange-500 ml-14'>
        <input 

          type='checkbox'
          checked={numberAllowed}
          id='numberInput'
    
          onChange={()=>{
            setNumberAllowed((prev)=> !prev)
          }}
         />
         <label htmlFor='numberInput'>Number</label>
        
    </div>
    <div className='flex items-center gap-x-1 text-orange-500 ml-6'>
        <input 

          type='checkbox'
          checked={charAllowed}
          id='charInput'
     
          onChange={()=>{
            setCharAllowed((prev)=> !prev)
          }}
         />
         <label htmlFor='charInput'>Characters</label>
        
    </div>
  </div>
</div>

  </>
  )
}

export default PasswordGen
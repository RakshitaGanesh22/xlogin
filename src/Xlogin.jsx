import { useState } from "react";
export default function Xlogin(){
    const[username,setUser]=useState("");
    const[password,setPassword]=useState("");
    const[welPage,setwelPAge]=useState(false);
    const[submit,setSubmit]=useState(false);
    function handleSubmit(event){
        setSubmit(true);
        event.preventDefault();
        if(username==="user" && password==="password"){
            setwelPAge(true);
            
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">Username:</label>
                <input type="text" id="userName" onChange={(event)=>setUser(event.target.value)} required/>
                <label htmlFor="password" >Password:</label>
                <input type="password" id="password" onChange={(event)=>setPassword(event.target.value)} required/>
                <button type="submit">Submit</button>
                {submit? 
                    (welPage? (<div>Welcome, user!</div>) :(<div>Invalid username or password</div>)) : <div></div>}
            </form>
        </div>
    )
} 
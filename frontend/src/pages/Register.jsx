import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const { register }=useAuth(); const nav=useNavigate();
  const submit=async e=>{e.preventDefault();try{await register(name,email,password);toast.success("Account created!");nav("/");}catch(err){toast.error(err.response?.data?.message||"Registration failed");}};
  return <section className="auth-page"><div className="auth-card"><div className="auth-brand">Shop<span>Kart</span></div><h1>Create account</h1><p>Join ShopKart and start shopping.</p><form onSubmit={submit}><label>Full name<input value={name} onChange={e=>setName(e.target.value)} required/></label><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label><label>Password<input type="password" minLength="6" value={password} onChange={e=>setPassword(e.target.value)} required/></label><button className="primary-btn full">Create Account</button></form><p className="auth-switch">Already have an account? <Link to="/login">Login</Link></p></div></section>;
}

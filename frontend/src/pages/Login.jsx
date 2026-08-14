import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const { login }=useAuth(); const nav=useNavigate(); const loc=useLocation();
  const submit=async e=>{e.preventDefault();try{await login(email,password);toast.success("Welcome back!");nav(loc.state?.from||"/");}catch(err){toast.error(err.response?.data?.message||"Login failed");}};
  return <section className="auth-page"><div className="auth-card"><div className="auth-brand">Shop<span>Kart</span></div><h1>Welcome back</h1><p>Login to continue shopping.</p><form onSubmit={submit}><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label><label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></label><button className="primary-btn full">Login</button></form><p className="auth-switch">New here? <Link to="/register">Create an account</Link></p></div></section>;
}

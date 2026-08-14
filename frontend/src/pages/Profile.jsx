import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import toast from "react-hot-toast";

export default function Profile() {
  const {user,logout}=useAuth(); const [name,setName]=useState(user?.name||""); const [email,setEmail]=useState(user?.email||""); const [password,setPassword]=useState("");
  const save=async e=>{e.preventDefault();try{const r=await api.put("/users/profile",{name,email,password:password||undefined});toast.success("Profile updated");setPassword("");window.location.reload();}catch(err){toast.error(err.response?.data?.message||"Update failed");}};
  return <section className="page-section profile-page"><span className="eyebrow">MY ACCOUNT</span><h1>Profile</h1><div className="profile-layout"><div className="profile-avatar">{user?.name?.charAt(0).toUpperCase()}</div><form className="form-card" onSubmit={save}><label>Name<input value={name} onChange={e=>setName(e.target.value)}/></label><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)}/></label><label>New password <small>(leave blank to keep current)</small><input type="password" minLength="6" value={password} onChange={e=>setPassword(e.target.value)}/></label><button className="primary-btn">Save Changes</button><button type="button" className="danger-btn" onClick={logout}>Logout</button></form></div></section>;
}

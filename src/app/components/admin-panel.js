'use client'
import { useEffect, useState } from "react";

const AdminPanel = ()=>{
    const [sidebar,setSidebar] = useState(null);
    const [section,setSection] = useState(null);
    const [open,setOpen] = useState(true);

    useEffect(()=>{
        if(open){
            
            setSidebar(" w-0 absolute left-0 top-0 z-10 md:static md:w-2/12 ");
            setSection("w-full md:w-10/12")
        }
        else{
            setSidebar('w-6/12 absolute left-0 top-0 z-10 md:static md:w-0');
            setSection("w-full");
        }
    },[open])
    
    return (
        <div className="min-h-screen border flex border-red-700">
            <div className={`bg-slate-800 ${sidebar} transition-width overflow-hidden min-h-screen`}>
                erer
            </div>
            <div className={`bg-gray-200 ${section}  transition-width ` }>
                <button  onClick={()=>setOpen(!open)}>
                    <span className="material-icons">menu</span>
                </button>
            </div>
        </div>
    )
}

export default AdminPanel;
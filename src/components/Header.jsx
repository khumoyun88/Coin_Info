
// import { Button } from "flowbite-react";
import Sidebar from "./Sidebar.jsx";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className='max-w-[1140px] mb-1 flex justify-between items-center bg-black-200 mx-auto p-2 px-4'>
      <Link className="text-[#87CEEB] text-[20px] font-bold" to={"/"}>LOGO</Link>
      <Sidebar/>
    </div>
  );
}

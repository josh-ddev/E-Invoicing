'use client'
import Header from "./components/Header";
import Main from "./components/Main";
// import { useState } from "react";
// import CockpitSettings from "./components/CockpitSettings";
// import type { moreOptions } from "../types";


import { Toaster } from "@/components/ui/sonner"
export default function Home() {
    // const [moreOptionsActive, setMoreOptionsActive] = useState<moreOptions | null>(null);
  return (
    <div className="min-h-screen  ">
      <Header />
      <Main  />
      <Toaster/>
      
    </div>
  );
}

// {moreOptionsActive && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black/50"
//             onClick={() => setMoreOptionsActive(null)}
//           />

//           {/* Modal */}
//           <div className=" relative bg-white rounded-lg  shadow-lg p-3 ">
//             <CockpitSettings />
//           </div>
//         </div>
//       )}
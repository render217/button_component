import React from "react";

const Sidebar = () => {
  return (
    <div className="px-10 py-10">
      <h1 className="text-2xl font-bold font-Poppins">
        <span className="text-orange-500">Dev</span>challanges.io
      </h1>
      <div className="min-h-[60vh] flex flex-col gap-10 justify-center  text-xl font-semibold text-gray-400 font-NotoSansJP">
            <h2>Colors</h2> 
            <h2>Typography</h2> 
            <h2>Spaces</h2> 
            <h2 className="text-slate-900">Buttons</h2> 
            <h2>Inputs</h2> 
            <h2>Grid</h2> 
      </div>
    </div>
  );
};

export default Sidebar;

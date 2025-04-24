
import React from "react";
import './App.css';

export default function App() {
  return (
    <div className="relative min-h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('https://tse1.mm.bing.net/th?id=OIP.HEwWABwCXGhpaKuC7ueqoQHaFv&pid=Api')" }}>
      <div className="bg-white bg-opacity-80 min-h-screen p-6 md:p-12">
        <header className="mb-10 text-center">
          <div className="mx-auto h-24 mb-4 flex items-center justify-center">
            <span className="text-3xl font-bold text-[#7b2f26] tracking-wide">
              ĐỨC PHÚC GROUP
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#7b2f26] uppercase">
            CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ ĐỨC PHÚC GROUP
          </h1>
          <p className="text-[#a94438] text-lg mt-2 font-medium">
            SÀN GIAO DỊCH BĐS ĐỨC PHÚC – Uy tín tạo niềm tin, chuyên nghiệp tạo giá trị
          </p>
        </header>
      </div>
    </div>
  );
}

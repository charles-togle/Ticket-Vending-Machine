import React from "react";
import "../global.css"
export default function Home(): React.ReactNode {
  return (
    <section className="w-screen h-screen relative">
      <button className="absolute top-0 right-0 w-80 h-30 text-center text-2xl font-bold border-10 border-blue-900"> Select English</button>
      <main className="flex justify-center items-center h-full space-x-10 pt-30">
        <div className="h-[70vh] w-[40vw] border-10 border-blue-900 text-center p-10 flex flex-col items-center font-semibold">
          <h1 className="text-5xl mb-20">Purchase Ticket</h1>
          <button className="text-4xl w-[90%] h-1/4 border-6 border-black hover:bg-blue-100">Single Journey Ticket</button>
          <p className="text-2xl m-5">Or</p>
          <button className="text-4xl w-[90%] h-1/4 border-6 border-black hover:bg-blue-100">Stored Value Card</button>
        </div>
        <div className="h-[70vh] w-[40vw] font-bold border-10 border-blue-900 flex justify-center flex-col items-center space-y-10">
            <p className="text-5xl font-semibold text-center">Place Stored Value <br /> Card on Reader</p>
            <img src = "src/TVM/images/Beep-cards.webp" className="w-[70%] h-[60%] object-cover"/> 
        </div>
      </main>
    </section>
  );
}

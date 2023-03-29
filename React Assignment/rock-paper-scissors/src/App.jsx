import React from "react";
import rock from './assets/rock.png';
import paper from './assets/paper.png';
import scissors from './assets/scissors.png'

function App() {

  return (
    <div className="flex flex-col bg-gradient-to-l from-blue-800 via-yellow-600 to-green-800 w-full h-screen justify-end items-center pb-10 gap-8">
      <h2 className="text-2xl text-white font-bold">Select Your Option</h2>
      <div className="flex">
        <img className="transform hover:scale-110 transition-all" src={paper} alt="paper" />
        <img className="transform hover:scale-110 transition-all" src={rock} alt="" />
        <img className="transform hover:scale-110 transition-all" src={scissors} alt="paper" />
      </div>
    </div>
  )
}

export default App

import React, { useState } from "react";
import rock from './assets/rock.png';
import paper from './assets/paper.png';
import scissors from './assets/scissors.png'
import computerTurn from "./computerTurn/computerTurn";
import Winner from "./components/Winner";

function App() {

  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [result, setResult] = useState(true);


  const handleCheck = (e) => {
    const computerChoice = computerTurn();
    const userChoice = e.target.alt;

    if (userChoice === computerChoice) {
      console.log(`${userChoice} ${computerChoice} "Round Tie"`);
    } else if (userChoice === 'rock' && computerChoice === 'scissor' ||
      userChoice === 'paper' && computerChoice === 'rock' ||
      userChoice === 'scissor' && computerChoice === 'paper') {
      console.log(`${userChoice} ${computerChoice} "You Win!"`);
      setUserScore(userScore + 1);
    } else {
      console.log(`${userChoice} ${computerChoice} "Computer wins"`);
      setCompScore(compScore + 1);
    }
  }
  return (
    <>
      <div className="bg-slate-900 w-screen h-screen relative">
        <h1 className="text-center p-4 text-3xl text-[whitesmoke] font-bold mb-8"><span className="font-mono">R</span>ock <span className="font-mono">P</span>aper <span className="font-mono">S</span>cissors</h1>
        <div className="flex flex-col w-full h-[80vh] justify-around items-center pb-10 gap-8">
          <div className="flex w-full sm:justify-center">
            <div className="flex flex-col items-center w-full gap-4 sm:w-1/4 ">
              <h2 className="font-bold text-3xl text-yellow-600 font-serif">You</h2>
              <p className="font-semibold text-2xl text-[whitesmoke]">{userScore}</p>
            </div>
            <div className="flex flex-col items-center w-full gap-4 sm:w-1/4 ">
              <h2 className="font-bold text-3xl text-yellow-600 font-serif">Com</h2>
              <p className="font-semibold text-2xl text-[whitesmoke]">{compScore}</p>
            </div>
          </div>
          <div className="flex flex-col w-full items-center gap-8">
            <h2 className="text-2xl font-semibold text-[whitesmoke] sm:text-3xl mb-3">Select Your Choice</h2>
            <div className="flex gap-8">
              <img onClick={(e) => handleCheck(e)} className="transform transition-all hover:scale-110 hover:cursor-pointer w-20 h-20 sm:w-28 sm:h-28" src={rock} alt="rock" />
              <img onClick={(e) => handleCheck(e)} className="transform transition-all hover:scale-110 hover:cursor-pointer w-20 h-20 sm:w-28 sm:h-28" src={paper} alt="paper" />
              <img onClick={(e) => handleCheck(e)} className="transform transition-all hover:scale-110 hover:cursor-pointer w-20 h-20 sm:w-28 sm:h-28" src={scissors} alt="scissor" />
            </div>
          </div>
          {/* <div className="h-[20vh] text-white"></div> */}
          {/* <div className="w-full h-full absolute text-white grid place-content-center overflow-x-hidden">hello</div> */}
        </div>
      </div>
    </>
  )
}

export default App

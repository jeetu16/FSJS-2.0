import React, { useState } from "react";
import rock from './assets/rock.png';
import paper from './assets/paper.png';
import scissors from './assets/scissors.png'
import computerTurn from "./computerTurn/computerTurn";

function App() {

  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState(false);
  const [winner, setWinner] = useState(-1);

  const handleCheck = (e) => {
    const userChoice = e.target.alt;
    const computerChoice = computerTurn();
    setComputerChoice(computerChoice);
    setUserChoice(userChoice);

    if (userChoice === computerChoice) {
      setWinner(-1)
    } else if (userChoice === 'rock' && computerChoice === 'scissors' ||
      userChoice === 'paper' && computerChoice === 'rock' ||
      userChoice === 'scissors' && computerChoice === 'paper') {
      setUserScore(userScore + 1);
      setWinner(1)
    } else {
      setCompScore(compScore + 1);
      setWinner(0);
    }
    setResult(true);
    setTimeout(() => setResult(false), 3000);
  }
  return (
    <>
      <div className="bg-slate-900 w-screen h-screen">
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
              <img onClick={(e) => handleCheck(e)} className="transform transition-all hover:scale-110 hover:cursor-pointer w-20 h-20 sm:w-28 sm:h-28" src={scissors} alt="scissors" />
            </div>
          </div>
        </div>
      </div>
      {
        result
        &&
        <div className="absolute top-0 w-screen h-screen z-10 grid place-content-center text-white bg-black text-center animate-inc">
          {
            winner !== -1
              ?
              <>
                {
                  winner
                    ?
                    <div className="text-2xl text-green-500"> You win </div>
                    :
                    <div className="text-2xl text-red-500"> Computer win! </div>
                }
              </>
              :
              <div className="text-2xl"> It's Tie </div>
          }
          <div className="flex gap-12 mt-8">
            <div>
              <div className="p-4 rounded-full border">
                <img src={userChoice === 'rock' && rock || userChoice === 'paper' && paper || userChoice === 'scissors' && scissors} className="w-28 sm:w-36 animate-rot" alt="" />
              </div>
              <h2>You</h2>
            </div>
            <div>
              <div className="p-4 rounded-full border">
                <img src={computerChoice === 'rock' && rock || computerChoice === 'paper' && paper || computerChoice === 'scissors' && scissors} className="w-28 sm:w-36 animate-rot" alt="" />
              </div>
              <h2>Com</h2>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default App

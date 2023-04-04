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
  const [border, setBorder] = useState(false);

  const handleCheck = (e) => {
    const userChoice = e.target.alt;
    const computerChoice = computerTurn();
    setComputerChoice(computerChoice);
    setUserChoice(userChoice);

    const checkWinner = () => {
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
      setBorder(true);
    }
    setResult(true);

    setTimeout(() => checkWinner(), 4000);
  }

  const handleClose = () => {
    setBorder(false);
    setResult(false);
  }
  return (
    <>
      <div className="bg-[#020216] w-screen h-screen pt-4">
        <h1 className="text-center p-4 text-4xl text-[whitesmoke] font-bold mb-8"><span className="font-mono">R</span>ock <span className="font-mono">P</span>aper <span className="font-mono">S</span>cissors</h1>
        <div className="flex flex-col w-full h-[70vh] justify-around items-center pb-10 gap-8">
          <div className="flex w-full sm:justify-center">
            <div className="flex flex-col items-center w-full gap-4 sm:w-1/4 ">
              <h2 className="font-bold text-4xl text-yellow-600 font-serif">You</h2>
              <p className="font-semibold text-3xl text-[whitesmoke]">{userScore}</p>
            </div>
            <div className="flex flex-col items-center w-full gap-4 sm:w-1/4 ">
              <h2 className="font-bold text-4xl text-yellow-600 font-serif">Com</h2>
              <p className="font-semibold text-3xl text-[whitesmoke]">{compScore}</p>
            </div>
          </div>
          <div className="flex flex-col w-full items-center gap-8">
            <h2 className="text-2xl font-semibold text-[whitesmoke] sm:text-3xl mb-3">Select Your Choice</h2>
            <div className="flex gap-10 sm:gap-20">
              <div className="flex flex-col items-center gap-4">
                <img onClick={(e) => handleCheck(e)} className="transform transition-all hover:scale-110 hover:cursor-pointer w-20 h-20 sm:w-28 sm:h-28" src={rock} alt="rock" />
                <p className="text-white text-2xl sm:text-3xl">Rock</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img onClick={(e) => handleCheck(e)} className="transform transition-all hover:scale-110 hover:cursor-pointer w-20 h-20 sm:w-28 sm:h-28" src={paper} alt="paper" />
                <p className="text-white text-2xl sm:text-3xl">Paper</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img onClick={(e) => handleCheck(e)} className="transform transition-all hover:scale-110 hover:cursor-pointer w-20 h-20 sm:w-28 sm:h-28" src={scissors} alt="scissors" />
                <p className="text-white text-2xl sm:text-3xl">Scissors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        result
        &&
        <div className="absolute top-0 w-screen h-screen z-10 flex flex-col items-center justify-center gap-16 text-white bg-[#04011a] text-center animate-inc">
          {
            !border
            &&
            <h2 className="absolute top-20 sm:top-10 right-1/2 text-white text-4xl translate-x-1/2 sm:text-4xl w-full">Let's see Your Luck!</h2>
          }
          <div className="h-[8vh]">
            {
              border &&
              <>

                {
                  winner !== -1
                    ?
                    <>
                      {
                        winner
                          ?
                          <div className="text-4xl font-bold text-green-500 animate-opac"> You Win! </div>
                          :
                          <div className="text-4xl font-bold text-red-500 animate-opac"> Computer Win! </div>
                      }
                    </>
                    :
                    <div className="text-4xl font-bold text-gray-400 animate-opac"> It's Tie </div>
                }
              </>
            }
          </div>
          <div className="flex sm:gap-40 gap-10 mt-8">
            <div>
              <div
                className={`p-5 rounded-full border-[5px] animate-color 
                ${border ? winner === -1 ? ' border-gray-400' : winner === 1 ? ' border-green-600 border-[10px]' : 'border-red-600' : ''
                  }
                `}
              >
                <img src={userChoice === 'rock' && rock || userChoice === 'paper' && paper || userChoice === 'scissors' && scissors} className="w-28 sm:w-36 animate-hide" alt="" />
              </div>
              <h2 className="text-4xl mt-6">You</h2>
            </div>
            <div>
              <div
                className={`p-5 rounded-full border-[5px] animate-colorreverse 
                ${border ? winner === -1 ? ' border-gray-400' : winner === 1 ? 'border-red-600 border-[10px]' : 'border-green-600' : ''}
                `}
              >
                <img src={computerChoice === 'rock' && rock || computerChoice === 'paper' && paper || computerChoice === 'scissors' && scissors} className="w-28 sm:w-36 animate-hide" alt="" />
              </div>
              <h2 className="text-4xl mt-6">Com</h2>
            </div>
          </div>
          {
            border
            &&
            <button className="text-2xl rounded-md bg-[#111153] hover:bg-[#0c0c36] border p-4 absolute bottom-20 right-1/2 translate-x-1/2 sm:text-2xl sm:bottom-6 sm:p-2 " onClick={() => handleClose()}>
              Continue
            </button>
          }
        </div>
      }
    </>
  )
}

export default App

import React, { useState } from "react";
import rock from './assets/rock.png';
import paper from './assets/paper.png';
import scissors from './assets/scissors.png'
import computerTurn from "./computerTurn/computerTurn";
import Winner from "./components/Winner";
import Card from "./components/Card";
import ScoreCard from "./components/ScoreCard";

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
    setTimeout(checkWinner, 3000);
  }

  return (
    <>
      <div className="bg-[#080d20] w-screen h-screen pt-4">
        <h1 className="text-center p-4 text-4xl text-[whitesmoke] font-bold mb-8"><span className="font-mono">R</span>ock <span className="font-mono">P</span>aper <span className="font-mono">S</span>cissors</h1>
        <div className="flex flex-col w-full h-[70vh] justify-around items-center pb-10 gap-8">
          <div className="flex w-full sm:justify-center">
            <ScoreCard score={userScore} user={"You"} />
            <ScoreCard score={compScore} user={"Com"} />
          </div>
          <div className="flex flex-col w-full items-center gap-8">
            <h2 className="text-2xl font-semibold text-[whitesmoke] sm:text-3xl mb-3">Select Your Choice</h2>
            <div className="flex gap-10 sm:gap-20">
              <Card imgSrc={rock} altTxt={"rock"} handleCheck={handleCheck} />
              <Card imgSrc={paper} altTxt={"paper"} handleCheck={handleCheck} />
              <Card imgSrc={scissors} altTxt={"scissors"} handleCheck={handleCheck} />
            </div>
          </div>
        </div>
      </div>
      {
        result
        &&
        <Winner
          border={border}
          winner={winner}
          userChoice={userChoice}
          computerChoice={computerChoice}
          setBorder={setBorder}
          setResult={setResult}
        />
      }
    </>
  )
}

export default App

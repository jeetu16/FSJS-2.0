import React from 'react';
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import scissors from '../assets/scissors.png';

const Winner = ({border , winner, userChoice, computerChoice, setBorder, setResult}) => {

  const handleClose = () => {
    setBorder(false);
    setResult(false);
  }

  return (
    <div className="absolute top-0 w-screen h-screen z-10 flex flex-col items-center justify-center gap-16 text-white bg-[#080d20] text-center animate-inc">
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
                ${border
                ?
                winner === -1
                  ?
                  'border-gray-400 shadow-circleGray'
                  :
                  winner === 1
                    ?
                    'border-green-600 shadow-circle'
                    :
                    'border-[#a01e1e]'
                :
                ''
              }
                `}
          >
            <img src={userChoice === 'rock' && rock || userChoice === 'paper' && paper || userChoice === 'scissors' && scissors} className="w-24 sm:w-36 animate-hide" alt="" />
          </div>
          <h2 className="text-4xl mt-6 text-[papayawhip]">You</h2>
        </div>
        <div>
          <div
            className={`p-5 rounded-full border-[5px] animate-colorreverse 
                ${border
                ?
                winner === -1
                  ?
                  'border-gray-400 shadow-circleGray'
                  :
                  winner === 1
                    ?
                    'border-[#a01e1e]'
                    :
                    'border-green-600 shadow-circle'
                :
                ''
              }
                `}
          >
            <img src={computerChoice === 'rock' && rock || computerChoice === 'paper' && paper || computerChoice === 'scissors' && scissors} className="w-24 sm:w-36 animate-hide" alt="" />
          </div>
          <h2 className="text-4xl mt-6 text-[papayawhip]">Com</h2>
        </div>
      </div>
      {
        border
        &&
        <button className={`text-2xl rounded-lg hover:bg-[#0c0c36] border p-4 absolute ${screen.height < 690 ? 'bottom-2': 'bottom-20'} right-1/2 translate-x-1/2 sm:text-2xl sm:bottom-6 sm:p-2 bg-[#04044e] text-red-900`} onClick={() => handleClose()}>
          Continue
        </button>
      }
    </div>
  )
}

export default Winner
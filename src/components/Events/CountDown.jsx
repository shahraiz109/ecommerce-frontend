import React, { useEffect, useState } from 'react'

const CountDown = () => {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        },1000)
        return() => clearTimeout(timer)
    })

    function calculateTimeLeft (){
        const difference= +new Date('2023-11-15') - new Date()
        let timeLeft={}

        if(difference > 0){
            timeLeft={
                days: Math.floor(difference /(1000 * 60 * 60 * 24)),
                hours: Math.floor((difference /(1000 * 60 * 60 )) % 24),
                minutes: Math.floor((difference/(1000 * 60)) % 60),
                seconds: Math.floor((difference/(1000)) % 60)
            }
        }
        return timeLeft
    }

      const timerComponent= Object.keys(timeLeft).map((interval) => {
        if(!timeLeft[interval]){
            return null
        }
        return (
          <span className="text-[25px] text-blue-700">
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      })

  return (
        <div>
            {timerComponent.length ? timerComponent : <span className='text-[25px] text-red-700'>Time's up!</span>}
        </div>
  )
}

export default CountDown

import React from 'react'
import ProgressBar from './Progressbar'

type Props = {}

function Dalygoal({}: Props) {
  return (
    <div className=' bg-gradient-to-r from-cyan-400 to-blue-500 '>
        <div className=' h-24 w-24 rounded-full flex justify-center items-center bg-sky-500'>
          <div className=' bg-white h-20 14 w-20 rounded-full flex justify-center items-center'>
            <div className=' bg-sky-500 h-14 w-14 rounded-full flex justify-center items-center'>
              <div className=' bg-white h-8 w-8 rounded-full'>

              </div>
            </div>
          </div>
        </div>
        Your daily goal almost done
        4 of 5 completed
        <ProgressBar width={10}/>
    </div>
  )
}

export default Dalygoal
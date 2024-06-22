import React from 'react'
import styles from '../../styles/styles'
import { BsFillBagFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AllOrdres = () => {
  return (
    <div className={`py-4 min-h-screen ${styles.section}`}>
    <div className='w-full flex items-center justify-between'>
    <div className='flex items-center'>
    <BsFillBagFill size={30} color='crimson'/>
    <h1 className='pl-2 text-[25px]'>Orders Details</h1>
    </div>
     <Link to="/dashbord-orders">
     <div className={`${styles.button} bg-green-200 rounded-[4px] text-red-400 font-[600] h-[45px] text-[18px]`}>
       Order list
     </div>    

     </Link>
    </div>
    <div className='w-full flex items-center justify-between'>

    </div>
      
    </div>
  )
}

export default AllOrdres

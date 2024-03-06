import React from 'react'
import EmptyStar from './icons/EmptyStar.png'
import Image from 'next/image'
import style from "./page.module.css";
import star from './icons/star.png'

function StarRating({setMarkState, number}) {

  
    const emptystars = Array(5-number).fill(0);
    const stars = Array(number).fill(0);
    return (
      <div className={style.starDiv}>


{stars.map((_, index) =><Image  key ={index}src={star} alt="icon" className={style.starIcon}  width={25} onClick={()=>setMarkState(index+1)}/>
       )
        }
         {emptystars.map((_, index) =><Image  key ={index}src={EmptyStar} alt="icon" className={style.starIcon}  width={25} onClick={()=>setMarkState(index+number+1)}/>
       
        )
         }

      </div>
    )
  }
  
  export default StarRating
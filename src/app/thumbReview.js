
import React from 'react'
import styles from "./page.module.css";
import ThumbUpIcon  from './icons/thumb-up.png';
import ThumbDownIcon from './icons/thumb-down.png';
import Image from 'next/image'
import ThumbUpColorIcon  from './icons/thumb-upc.png';
import ThumbDownColorIcon from './icons/thumb-downc.png';
import {useState} from 'react'


function ThumbReview() {
   
    const [thumbUp, setThumbUp] =useState('gray');
    const [thumbDown, setThumbDown] =useState('gray');

    

    const handleThumbUp = () => {
        if(thumbUp === 'gray'){
            setThumbUp('green');
            setThumbDown('gray');
        }else{
            setThumbUp('gray');
        }
    }

    const handleThumbDown = () => {
        if(thumbDown === 'gray'){
            setThumbUp('gray');
            setThumbDown('green');
        }else{
            setThumbDown('gray');
        }
    }
  return (
    <div className={styles.thumbStyle}>
       { (thumbDown==='gray')?<Image src={ThumbDownIcon} alt='icon' width={40} onClick={handleThumbDown}/>:<Image src={ThumbDownColorIcon} alt='icon' width={40}/>}<p style={{color: thumbDown}}>No</p>


        { (thumbUp==='gray')?<Image src={ThumbUpIcon} alt='icon' width={40} onClick={handleThumbUp}/>:<Image src={ThumbUpColorIcon} alt='icon' width={40}/>}
        <p  style={{color:thumbUp}}>Yes</p>
    </div>
  )
}

export default ThumbReview
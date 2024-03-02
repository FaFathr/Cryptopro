import React, { useState } from 'react'
import { AiFillHeart } from "react-icons/ai";
import styles from './Card.module.css'
function Card({data,handelLikedList}) {
  const{title,author,image,language,pages}= data
    const [like, setLike] = useState(false)
    const likeHnadler=()=>{ 
      handelLikedList(data ,like)
        setLike((like)=> !like)
       
    }
  return (
    <div className={styles.card}>
      <img src={image} alt={title }/>
      <div className={styles.info} >
        <h3>{title}</h3>
        <p>{author}</p>
        <div className={styles.container}>
            <span>{language}</span>
            <span>{pages}</span>
        </div>
      </div>
      <button className={styles.container} onClick={likeHnadler}><AiFillHeart color={like ? "red" : "white" } fontSize="1.8rem"/></button>
    </div>
  )
}

export default Card

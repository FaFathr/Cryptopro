import React, { useState } from 'react'
import {books as bookData} from '../constants/mockData'
import Card from './Card'
import SideCard from './SideCard';
import styles from './Books.module.css'
import Search from './Search';
function Books() {
  const [books , setBooks]=useState(bookData); 
  const [liked , setLiked]=useState([]); 
  const [search , setSearch]=useState([]);
  const handelLikedList=(book ,status)=>{
   if(status){
    const NewLikedList =liked.filter((i) => i.id !== book.id);
    setLiked(NewLikedList)
   }else{
    setLiked((liked)=>[...liked,book])
   }
  }
  const searchHandler =()=>{
    if(search){
      const newBooks= bookData.filter((book)=>
      book.title.toLowerCase().includes(search)
      )
setBooks(newBooks)
    }
    else{
      setBooks(bookData)
    }
  }
  return (
    <>
    <Search search={search} setSearch={setSearch} searchHandler={searchHandler}/>
    <div className={styles.container}>
      <div className={styles.cart}>{books.map((book)=>( 
      <Card key={books.id} data={book} handelLikedList={handelLikedList}/>))}
      </div >
  { !!liked.length && (
  <div className={styles.favorite}>
    <h4>favorite</h4>
    {liked.map((book)=>(
  <SideCard key={book.id} data={book}/>))}
  </div>)}
    </div>
    </>
  )
}

export default Books

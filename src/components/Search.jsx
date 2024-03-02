import React from 'react'
import { CiSearch } from "react-icons/ci";
import styles from './Search.module.css'
function Search({Search , setSearch,searchHandler}) {
    
  return (
    <div className={styles.container}>
     <input 
     type='text' 
     placeholder='search title' 
     value={Search}
     onChange={(e) =>setSearch(e.target.value.toLowerCase())}
     />
     <button onClick={searchHandler}><CiSearch /></button>
    </div>
  )
}

export default Search

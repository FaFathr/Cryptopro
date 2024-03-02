import React from 'react'
import styles from './Layout.module.css'
function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1>Book App</h1>
        <p><a href='www.google.com'>Botostart</a> | Reactjs Propject</p>
        </header>
     {children}
    <footer className={styles.footer} ><p>Develop By Fatima⭐️</p></footer>
    </>
  )
}

export default Layout

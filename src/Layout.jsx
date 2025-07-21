import React from 'react'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import {Outlet} from 'react-router-dom'
/*
  Layout component pura app ka main structure handle karta hai.
  Isme Header aur Footer fix rahenge har page pe.

  <Outlet /> ek placeholder ki tarah kaam karta hai.
  Jahan bhi Outlet hota hai, wahi pe har route ka content dikhaya jaata hai —
  jaise Home, About, Contact etc.

  Matlab: Header upar hamesha dikhayega, Footer neeche dikhayega,
  aur beech ka content <Outlet /> ke through har route ke hisaab se change hota rahega.
*/
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
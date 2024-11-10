import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

function ErrorPages() {
    const errormsg = useRouteError()
    console.log(errormsg)
  return (
    <>
        <h1> Oops ! This is the {errormsg.data} </h1>
        <NavLink to={"/"}> <button> Go To Home </button></NavLink>
    </>
  )
}

export default ErrorPages
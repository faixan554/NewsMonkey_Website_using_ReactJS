import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
  return (

<footer className="bg-dark p-4 text-center text-white">
  <div className="text-center" >
    © 2020 Copyright:
    <Link className="text-white" to="/"> NewsMonkey</Link>
  </div>
</footer>

  )
}

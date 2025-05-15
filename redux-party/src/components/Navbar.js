import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar w-full bg-zinc-800 font-bold text-white flex items-center gap-6 p-3 ">
      <h1 className="text-2xl">Hallo-Party</h1>
      <ul className="flex gap-6 list-none text-white">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

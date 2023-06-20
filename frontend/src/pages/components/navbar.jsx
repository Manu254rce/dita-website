// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import useDarkMode from '../../hooks/useDarkMode'
import { Switch } from "@headlessui/react"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-14 flex flex-row 
                  bg-transparent p-3 my-auto">
        <div className='w-full flex flex-row justify-end max-md:justify-center'>
            <Search/>
        </div>
        <Toggle/>
    </nav>
  )
}

export const Toggle = () => {
  const  [isDarkMode, toggleDarkMode]  = useDarkMode();

  return (
    <Switch.Group>
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className={`${isDarkMode ? 'bg-blue-900' : 'bg-blue-500'
          } relative inline-flex h-6 w-11 items-center rounded-full drop-shadow-md transition-all ease-in-out duration-300`}
      >
        
      </Switch>
    </Switch.Group>
  );
};

export const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-row justify-center items-center">
      <input
        className='rounded-md py-3 px-4 w-32 text-black dark:text-white leading-tight 
                  focus:outline-1 focus:w-40 bg-slate-200 dark:bg-slate-900 focus:bg-white 
                  dark:focus:bg-white max-md:focus:w-64
                  drop-shadow-md transition-all ease-in-out duration-200'
        id="search"
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
  );
};

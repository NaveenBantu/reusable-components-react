import React from 'react'
import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className='transition duration-500 ease-in-out rounded-full p-2'>
            {(theme === 'dark') ? (<FaSun onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='text-gray-500 dark:text-gray-300 text-2xl cursor-pointer' />) : (<FaMoon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='text-gray-500 dark:text-gray-300 text-2xl cursor-pointer' />)}
        </div>
    )
}

export default ThemeToggle;
import React from 'react';

const DarkModeButton = (darkTheme) => {
  
  return(       
         <button type='button' className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg' onClick={() => setDarkTheme(!darkTheme)}>
                    {darkTheme ? 'Light ☀️' : 'Dark 🌙'}
         </button>
     )
}

export default DarkModeButton

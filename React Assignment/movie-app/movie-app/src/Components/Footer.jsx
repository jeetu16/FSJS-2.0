import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className='bg-indigo-700 text-center text-xl font-semibold text-white p-2'>
            <p className='capitalize'>copyright@{date}</p>
        </footer>
    )
}

// api key : 
// api base url : 
export default Footer
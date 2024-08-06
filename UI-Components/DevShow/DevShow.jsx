


import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const DevShow = () => {
  return (
    <div className="flex flex-col gap-1  p-3 rounded-lg hover:shadow-lg mx-3.5 overflow-hidden">
    <h5 className='cursor-pointer'>Developed with ❤️ by: <span className=" italic underline text-blue-600 cursor-pointer hover:text-green-600">Shanto</span> </h5>
    <div className="flex flex-col gap-0">
        <a href="https://www.linkedin.com/in/mdtanvirahamedshanto" target="_blank" rel="noreferrer" className="font-medium text-lg hover:text-blue-500"></a>
        <a href="mailto:mdtanvirahamedshanto@gmail.com" className="text-gray-700 text-sm hover:text-blue-600">mdtanvirahamedshanto@gmail.com</a>
    </div>
    <ul className="flex space-x-4 justify-center">
  <li>
  <a href="https://www.facebook.com/mdtanvirahamedshanto" target="_blank" rel="noreferrer" className="font-medium text-lg hover:text-blue-500">
      <FaFacebook />
    </a>
  </li>
  <li>
  <a href="https://www.twitter.com/tashanto03" target="_blank" rel="noreferrer" className="font-medium text-lg hover:text-blue-500">
      <FaTwitter />
    </a>
  </li>
  <li>
  <a href="https://www.instagram.com/mdtanvirahamedshanto" target="_blank" rel="noreferrer" className="font-medium text-lg hover:text-pink-500">
      <FaInstagram />
    </a>
  </li>
  <li>
  <a href="https://www.linkedin.com/in/mdtanvirahamedshanto" target="_blank" rel="noreferrer" className="font-medium text-lg hover:text-blue-500">
      <FaLinkedin />
    </a>
  </li>
</ul>
</div>
  )
}

export default DevShow
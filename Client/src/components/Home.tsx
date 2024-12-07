import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const HandleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='h-[100vh]'>
        <header className='flex justify-between bg-blue-gray-400 p-4 px-20 items-center text-white'>
            <div className='flex place-content-center justify-between w-[100%]'>
              <h1 className='font-semibold sm:text-2xl md:text-4xl '>Famtech</h1>
              <div className='md:text-4xl font-semibold cursor-pointer md:hidden' onClick={HandleToggle}>Menu</div>
            </div>
            <main>
              <nav className=''>
                  <ul className='flex justify-center gap-3 list-none'>
                      <li className=''><Link to={'/'}>Home</Link></li>
                      <li><Link to={'/gallery'}>Gallery</Link></li>
                      <li>About</li>
                      <li>Contact</li>
                      <li>Login</li>
                      <li>FAQ</li>
                      <li>Help</li>
                  </ul>
              </nav>
              {isOpen && (
                <div>
                  <section className='nav2 bg-orange-400 text-center py-5 h-[91vh] place-content-center'>
                    <div><Link to={'/'}>Home</Link></div>
                    <div><Link to={'/gallery'}>Gallery</Link></div>
                    <div>About</div>
                    <div>Contact</div>
                    <div>FAQ</div>
                    <div>Help</div>
                  </section>
                </div>
              )}
            </main>
        </header>

        <div className="section1">
          <main>
              {/* <h1 className='text-4xl first-letter:ring-deep-orange-700'>Gallery</h1> */}
          </main>
        </div>
    </div>
  )
}

export default Home
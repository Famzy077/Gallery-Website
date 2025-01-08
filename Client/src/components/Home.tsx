// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import '../index.css'
// interface interfaceRef{
//   Carousel: string,
//   Typography: string,
//   Button: string,

// }
import { Carousel, Typography,  Button} from "@material-tailwind/react"; 

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const HandleToggle = () => {
    setIsOpen(!isOpen)
  }

  const [activeindex, setActiveIndex] = useState(0)
  const totalSlides: number = 3; 

  // const dateTime = new Date().getFullYear();
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (totalSlides));
    }, 2000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className='h-[100vh]'>
        <header className='flex justify-between bg-blue-gray-400 p-4 px-20 items-center text-white'>
            <div className='flex place-content-center justify-between w-[100%]'>
              <h1 className='font-semibold sm:text-2xl md:text-4xl '>Phot<span><i className="fa-solid fa-camera"></i></span>genic</h1>
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
        <Carousel className='caro' activeindex={activeindex}>
        <div className="relative w-full">
          <img
             src="https://img.freepik.com/free-photo/doctor-hospital-room-standing-near-bed-wearing-face-mask-scrubs_9975-22905.jpg?t=st=1729694947~exp=1729698547~hmac=6ddf541bf6b04c3531dc54d30976e293048400ac31dbbb4423c9b859f3e3dc28&w=826"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Best Photo Studio
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                A high quality photography
              </Typography>
              <div className="flex justify-center gap-2 mb-8">
                <Button size="lg" color="white">
                  <Link to={'/blog'}>Explore</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  w-full">
        <img
          src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              We are committed to providing you with the best treatment
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                <Link to={'/blog'}>Explore</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              We believe everyone should have easy  access to best treatment
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a cl quality
              
              
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                <Link to={'/contact'}>Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
        </div>
    </div>
  )
}

export default Home
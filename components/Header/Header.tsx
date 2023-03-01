import { useConnect } from 'wagmi';

import { useTheme } from "next-themes" 
import { ExampleButton } from './connect';
import {Popover, Transition} from '@headlessui/react'
import logo from "../../public/logo.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState ,useEffect} from 'react';
import Link from 'next/link';
export function Header() {
    const { theme, setTheme } = useTheme(); 
    const [isMounted, setIsMounted] = useState(false);

 const Header = [
   {
        id: 0,
        name: "Opensea",
        link: "",
        islink:false,
    },
    {
        id: 0,
        name: "Bscscan",
        link: "project",
        islink:false,
    },

]


useEffect(() => {
    setIsMounted(true);
    setTheme("dark")
  }, []);
  const ChangeToDarkMood = ()=>{
    if (isMounted) {
        setTheme(theme === "light" ? "dark" : "light");
      }
  }



 return (
<Popover className="w-full  border-b  dark:border-secondary-dark">
            <div
                className='flex items-center px-2 justify-between max-w-7xl m-auto
    transform  dark:backdrop-blur-none text-black
     dark:text-white z-50  top-[0px]
      sticky py-3'>

                <div className="cursor-pointer flex justify-center items-center">
                    {/* logo */}
                    <LazyLoadImage
                        src={logo.src}
                        width={30}
                        alt="Solanart"
                        className="hidden dark:block  cursor-pointer"
                        height={30}/>
                    <LazyLoadImage
                        src={logo.src}
                        alt="Solanart"
                        className="dark:hidden cursor-pointer"
                        height={30}
                        width={30}
                        />
                    <div className="text-xl font-bold font-[Nexa] ml-2 text-black dark:text-white">Trstake</div>
                </div>
                {/* logo */}

                {/* ul */}
                <div className='hidden lg:flex items-center gap-x-8'>
                    <ul className="flex gap-2 font-semibold whitespace-nowrap">

                        {
                            Header.map((e,index) => {
                                return (
                                    <li key={index}>

   {e.islink && <Link href={e.link} > <p className='relative flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark hover:bg-gray-100 dark:hover:bg-slate-800 p-4 transition-all'>{e.name}</p> </Link>}
   {!e.islink && <a target='_blank' rel="noreferrer" className="relative flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark hover:bg-gray-100 dark:hover:bg-slate-800 p-4 transition-all"
                                            href={`#${e.link}`}>
                                            <span>{e.name}</span>
                                        </a>}
                                         
                            
                                    </li>

                                )
                            })
                        }
                    </ul>
                    {/* ul */}

                    {/* button */}
                    <div className="flex items-center gap-5">
                        <div className="table" onClick={()=>ChangeToDarkMood()}>
                            <div>
                                <button className="table">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        width="22"
                                        className="dark:fill-white">
                                        <path
                                            d="M256 105.5c-83.9 0-152.2 68.3-152.2 152.2 0 83.9 68.3 152.2 152.2 152.2 83.9 0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0 263.5c-61.4 0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4 0 111.4 50 111.4 111.4 0 61.4-50 111.4-111.4 111.4zM256 74.8c11.3 0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v23c0 11.3 9.1 20.4 20.4 20.4zM256 437.2c-11.3 0-20.4 9.1-20.4 20.4v22.9c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4zM480.6 235.6h-23c-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4h23c11.3 0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4zM54.4 235.6h-23c-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4h22.9c11.3 0 20.4-9.1 20.4-20.4.1-11.3-9.1-20.4-20.3-20.4zM400.4 82.8 384.1 99c-8 8-8 20.9 0 28.9s20.9 8 28.9 0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-8-28.8 0zM99 384.1l-16.2 16.2c-8 8-8 20.9 0 28.9s20.9 8 28.9 0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9 0zM413 384.1c-8-8-20.9-8-28.9 0s-8 20.9 0 28.9l16.2 16.2c8 8 20.9 8 28.9 0s8-20.9 0-28.9L413 384.1zM99 127.9c8 8 20.9 8 28.9 0s8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9 0s-8 20.9 0 28.9L99 127.9z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                     <ExampleButton />
                    </div>
                </div>
                {/* button */}

                {/* mobile manu */}

                <div className='flex flex-row items-center gap-x-2 lg:hidden'>
                <ExampleButton />
                    <Popover.Button>
                   <div className='flex flex-row gap-x-2'>
           
                   <div className='cursor-pointer p-2 hover:bg-slate-100 rounded-lg dark:hover:bg-slate-800'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
                            </svg>

                        </div>
            
                   </div>
                    </Popover.Button>
                    <Transition
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Popover.Panel
                            className="absolute z-20 inset-0 top-[80px] bg-white dark:bg-primary-dark 	">
                            <div className="flex flex-col items-start bg-white w-full dark:bg-[#1c1b22] dark:rounded-lg pt-2">
                                {
                                    Header && Header.map((e, index) => {
                                        return <>
                                               {e.islink && <Link href={e.link} > <p className='relative flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark hover:bg-gray-100 dark:hover:bg-slate-800 p-4 transition-all'>{e.name}</p> </Link>}
                                               {!e.islink && <a target='_blank' rel="noreferrer" className="relative flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark hover:bg-gray-100 dark:hover:bg-slate-800 p-4 transition-all"
                                            href={`#${e.link}`}>
                                            <span>{e.name}</span>
                                        </a>} 
                                        </>
 

                                    })
                                }


                                

                                <div className="flex items-center gap-4 p-4">
                                <a href="https://t.me/sayeu" target="_blank" rel="noreferrer">
                     <button
                            className="px-6 py-2 border rounded-xl text-sm
         font-semibold bg-black dark:bg-white dark:text-black text-white whitespace-nowrap">
                            Contact</button>
                     </a>
                                    <div className="table"> 
                                        <div>
                                            <button  className="table" onClick={()=>ChangeToDarkMood()}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    width="22"
                                                    className="dark:fill-white">
                                                    <path
                                                        d="M256 105.5c-83.9 0-152.2 68.3-152.2 152.2 0 83.9 68.3 152.2 152.2 152.2 83.9 0 152.2-68.3 152.2-152.2 0-84-68.3-152.2-152.2-152.2zm0 263.5c-61.4 0-111.4-50-111.4-111.4 0-61.4 50-111.4 111.4-111.4 61.4 0 111.4 50 111.4 111.4 0 61.4-50 111.4-111.4 111.4zM256 74.8c11.3 0 20.4-9.1 20.4-20.4v-23c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v23c0 11.3 9.1 20.4 20.4 20.4zM256 437.2c-11.3 0-20.4 9.1-20.4 20.4v22.9c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4v-22.9c0-11.2-9.1-20.4-20.4-20.4zM480.6 235.6h-23c-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4h23c11.3 0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4zM54.4 235.6h-23c-11.3 0-20.4 9.1-20.4 20.4 0 11.3 9.1 20.4 20.4 20.4h22.9c11.3 0 20.4-9.1 20.4-20.4.1-11.3-9.1-20.4-20.3-20.4zM400.4 82.8 384.1 99c-8 8-8 20.9 0 28.9s20.9 8 28.9 0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-8-28.8 0zM99 384.1l-16.2 16.2c-8 8-8 20.9 0 28.9s20.9 8 28.9 0l16.2-16.2c8-8 8-20.9 0-28.9s-20.9-7.9-28.9 0zM413 384.1c-8-8-20.9-8-28.9 0s-8 20.9 0 28.9l16.2 16.2c8 8 20.9 8 28.9 0s8-20.9 0-28.9L413 384.1zM99 127.9c8 8 20.9 8 28.9 0s8-20.9 0-28.9l-16.2-16.2c-8-8-20.9-8-28.9 0s-8 20.9 0 28.9L99 127.9z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

        
                        </Popover.Panel>
                    </Transition>

                </div>

                {/* mobile manu */}

            </div>
        </Popover>
 )
}

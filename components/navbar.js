import Image from 'next/image'
import logo from '../public/logo.svg'
import { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<nav className={'relative bg-white shadow dark:bg-gray-800'}>
			<div className={'container px-6 py-3 mx-auto md:flex'}>
				<div className={'flex items-center justify-between'}>
					<div>
						<a className={'text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'} href="#">Tamabara</a>
					</div>
					{/* <Image src={logo} height={50} width={50}/> */}

					<div className={'flex lg:hidden'}>
						<button type="button" className={'text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'} aria-label="toggle menu" onClick={handleClick}>
							{!active && (<svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
											<path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
										</svg>)}
					
							{active && (<svg visibility={!active} xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>)}
						</button>
					</div>
				</div>

				<div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between + ${active ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>
					<div className={'flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0'}>
						<Link href='/'>
							<a className={'px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2'}>Home</a>
						</Link>
						<Link href='/'>
							<a className={'px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2'}>About</a>
						</Link>
						<Link href='/'>
							<a className={'px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2'}>Contact</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
  }
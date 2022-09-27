import Image from 'next/image'
import paul from '../public/paul.jpg'
import julian from '../public/julian.jpg'
import luca from '../public/luca.jpeg'
import fio from '../public/fio.jpg'
import steve from '../public/steve.jpg'


export const Team = () => {
	return (
		<section className={'bg-white dark:bg-gray-900'}>
			<div className={'container px-6 py-8 mx-auto'}>
				<h2 id={"team"} className={'text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white'}>Our Team</h2>

				<div className={'flex flex-wrap justify-center gap-8 mt-8'}>
					<div className={'w-full max-w-xs text-center'}>
						<Image src={luca} className={'object-cover object-center w-full h-48 mx-auto rounded-lg'}/>
						{/* <img className={'object-cover object-center w-full h-48 mx-auto rounded-lg'} src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" /> */}

						<div className={'mt-2'}>
							<h3 className={'text-lg font-medium text-gray-700 dark:text-gray-200'}>Luca Orbke</h3>
							<span className={'mt-1 font-medium text-gray-600 dark:text-gray-300'}>Founder | Software Engineer</span>
						</div>
					</div>

					<div className={'w-full max-w-xs text-center'}>
						<Image src={fio} className={'object-cover object-center w-full h-48 mx-auto rounded-lg'}/>
						{/* <img className={'object-cover object-center w-full h-48 mx-auto rounded-lg'} src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" /> */}

						<div className={'mt-2'}>
							<h3 className={'text-lg font-medium text-gray-700 dark:text-gray-200'}>Fiodar Yuzhyk</h3>
							<span className={'mt-1 font-medium text-gray-600 dark:text-gray-300'}>Founder | Software Engineer</span>
						</div>
					</div>

					<div className={'w-full max-w-xs text-center'}>
						<Image src={steve} className={'object-cover object-center w-full h-48 mx-auto rounded-lg'}/>
						{/* <img className={'object-cover object-center w-full h-48 mx-auto rounded-lg'} src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" /> */}

						<div className={'mt-2'}>
							<h3 className={'text-lg font-medium text-gray-700 dark:text-gray-200'}>Steve</h3>
							<span className={'mt-1 font-medium text-gray-600 dark:text-gray-300'}>Founder | Marketing</span>
						</div>
					</div>

					<div className={'w-full max-w-xs text-center'}>
						<Image src={julian} className={'object-cover object-center w-full h-48 mx-auto rounded-lg'}/>
						{/* <img className={'object-cover object-center w-full h-48 mx-auto rounded-lg'} src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" /> */}

						<div className={'mt-2'}>
							<h3 className={'text-lg font-medium text-gray-700 dark:text-gray-200'}>Julian Schneider</h3>
							<span className={'mt-1 font-medium text-gray-600 dark:text-gray-300'}>Founder | Software Engineer</span>
						</div>
					</div>

					<div className={'w-full max-w-xs text-center'}>
						<Image src={paul} className={'object-cover object-center w-full h-48 mx-auto rounded-lg'}/>
						{/* <img className={'object-cover object-center w-full h-48 mx-auto rounded-lg'} src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" /> */}

						<div className={'mt-2'}>
							<h3 className={'text-lg font-medium text-gray-700 dark:text-gray-200'}>Paul Geeser</h3>
							<span className={'mt-1 font-medium text-gray-600 dark:text-gray-300'}>Founder | Software Engineer</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};
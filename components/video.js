import ReactPlayer from 'react-player'

export const Video = () => {
	return (
		<div className={'flex justify-center flex-wrap mt-10'}>
			<ReactPlayer url='https://www.youtube.com/watch?v=bpcoBVXF7RA' light={true} width={1500} height={500}/>
		</div>
	)
}

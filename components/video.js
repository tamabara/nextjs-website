import ReactPlayer from 'react-player'

export const Video = () => {
	return (
		<div className={'flex justify-center flex-wrap'}>
			<ReactPlayer url='https://www.youtube.com/watch?v=bpcoBVXF7RA' />
		</div>
		// <div id="responsiveVideoWrapper" className="relative h-0 pb-fluid-video">
		// 	<iframe
		// 		className="absolute top-0 left-0 w-full h-full"
		// 		src="./tamabara.mp4"
		// 		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		// 		allowFullScreen
		// 	></iframe>
		// </div>
	)
}

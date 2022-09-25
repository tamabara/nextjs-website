import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
  
export default class NextJsCarousel extends Component {
    render() {
        return (
        	<div className={'flex justify-center flex-wrap'}>
              	<Carousel dynamicHeight={true} className={'flex flex-wrap w-96'}>
                	<div>
						<img src="./screen3.png" alt=''/>,
                      	<p className="legend">HomeScreen</p>
                  	</div>
                  	<div>
						<img src="./screen2.png" alt=''/>,
                      	<p className="legend">ResultScreen</p>
                  	</div>
					  <div>
						<img src="./screen1.png" alt=''/>,
                      	<p className="legend">TamabaraScreen</p>
                  	</div>
              </Carousel>
            </div>
        );
    }
};

export const Screenshots = () => {
	return (
		<div className={'mt-14'}>
			<h2 id={"screenshots"} className={'text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white'}>Screenshots</h2>
			<NextJsCarousel/>
		</div>
	)
}
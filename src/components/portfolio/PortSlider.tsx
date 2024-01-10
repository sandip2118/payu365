
import { useRouter } from 'next/router';
import React from 'react';
import Slider from "react-slick";

function PortSlider() {
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className='px-5 w-full justify-center my-5'>
      <Slider {...settings}>
        {Array(5).fill(0).map((d, i) => {
          return (
            <div className='bg-BLACK_301 p-5 mx-1 rounded-[10px] !w-[98%]'>
              <p className='font16RB'>
                {'The easiest way to Transfer Money to anyone at 0 fees'}
              </p>
              <p className='font12RB text-GRAY_101 mt-[10px]'>
                Tips & Tricks
              </p>
            </div>

          )
        })}
      </Slider>
    </div>
  )
}

export default PortSlider;
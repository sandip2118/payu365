/* eslint-disable complexity */
import React from 'react';
import { useRouter } from 'next/router';
import Slider from "react-slick";
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css';

function PaymentAccount() {
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    className: "center",
    centerPadding: "45px",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  const slider = React.useRef(null);

  return (
    <div className=" bg-BLACK_301 rounded-[10px] mt-[20px] p-5">
      <div className='mb-5 flex justify-between'>
        <p className='font20SB'>
          Payment Account
        </p>
        <button className='font14SB text-BLUE_201'>
          Add Bank Card
        </button>
      </div>

      <div>
        <Slider
          ref={slider}
          {...settings} >
          {Array(5).fill(0).map((d, i) => {
            return (
              <Cards
                number={'1111 1111 1111 1111'}
                name={'sandip'}
                expiry={i}
                cvc={i}
              // focused={focused}
              // callback={this.handleCallback}
              />
            )
          })}
        </Slider>
      </div>
    </div>
  );
}

export default PaymentAccount;

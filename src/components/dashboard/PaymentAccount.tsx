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
  };

  return (
    <div className=" bg-BLACK_301 rounded-[10px] mt-[12px] py-[17px] px-5">
      <div className='mb-5 flex justify-between'>
        <p className='font20SB'>
          Payment Account
        </p>
        <button className='font14SB text-BLUE_201'>
          Add Bank Card
        </button>
      </div>

      <div className='px-5'>
        <Slider {...settings}>
          {Array(5).fill(0).map((d, i) => {
            return (
              <div className=''>
                <Cards
                  number={'1111 1111 1111 1111'}
                  name={'sandip'}
                  expiry={i}
                  cvc={i}
                // focused={focused}
                // callback={this.handleCallback}
                />
              </div>

            )
          })}
        </Slider>
      </div>
    </div>
  );
}

export default PaymentAccount;

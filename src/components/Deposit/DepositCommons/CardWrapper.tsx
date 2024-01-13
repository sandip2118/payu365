import { CardWrapperProps } from '../types';

function CardWrapper({children}:CardWrapperProps) {
  return (
    <div className='w-11/12 md:w-[70%] lg:w-1/2  mx-auto grid mt-5 md:mt-0 place-content-start md:place-content-center bg-primary-00 h-[89vh]  '>
      {children}
    </div>
  )
}

export default CardWrapper;
import { CardWrapperProps } from '../types';

function CardWrapper({children}:CardWrapperProps) {
  return (
    <div className='w-[94%] md:w-[70%] lg:w-[50%]  mx-auto grid mt-5 md:mt-0 place-content-start md:place-content-center justify-center bg-primary-00  h-[max-content] md:h-[89vh]  '>
      {children}
    </div>
  )
}

export default CardWrapper;
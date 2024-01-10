import { CardWrapperProps } from '../types'



const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
  return (
    <div className='bg-BLACK_301 px-4 md:rounded-[5px] pb-[20px]'>
         {children}
    </div>
  )
}

export default CardWrapper
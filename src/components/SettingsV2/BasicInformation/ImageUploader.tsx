import React, { useState, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Image from 'next/image';

type ImageUploaderProps = {
  defaultImageUrl: string;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({ defaultImageUrl }) => {
  const [image, setImage] = useState('');
  const [croppedImage, setCroppedImage] = useState(defaultImageUrl);
  const cropperRef = useRef<HTMLImageElement>(null);
  const [show,setShow] = useState<boolean>(false)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setShow(true);
      };
      reader.readAsDataURL(e.target.files[0]);
      e.target.value = '';
    }
  };

  const cropImage = () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      setCroppedImage(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
    }
    setShow(false)
  };

  const removeImage = () => {
    setCroppedImage(defaultImageUrl);
    setImage('');
    setShow(false);
  };

  return (
    <>
    <div className='grid gap-[15px] pb-[10px] md:pb-[0px] my-4 md:my-0'>
          <div>
            <p className='font14SB md:font14SB text-white'>Your Photo</p>
          </div>
          <div className='flex gap-[10px]'>
            <div>
            <div className='w-[50px] h-[50px] rounded-full bg-BLACK_306 '><Image src={croppedImage} alt='Cropped profile' width={50} height={50} className='rounded-full' /></div>
            </div>
            <div>
              <div className='flex gap-[8px] items-center text-[13px] xs:text-[14px] font-[500]'>
                <label htmlFor='imageUpload' className='text-[#267FF5] cursor-pointer'>Upload new Photo</label>
                <input type='file' id='imageUpload' accept='image/*' onChange={onFileChange} style={{ display: 'none' }}/>
                <div className='w-[5px] h-[5px] rounded-full bg-GRAY_101'></div>
                <p className='text-[#FA6C4C] cursor-pointer' onClick={removeImage}>Remove photo</p>
              </div>
              <div>
                <p className='font12R text-GRAY_101 xs:py-2'>Photos help you other people trust</p>
              </div>
            </div>
          </div>
        </div>
        {show && (
        <div>
          <Cropper
            src={image}
            style={{ height: 200, width: '100%' }}
            initialAspectRatio={1}
            guides={false}
            ref={cropperRef}
            viewMode={1}
            responsive={true}
            autoCropArea={1}

            minCropBoxWidth={100}
            minCropBoxHeight={100} 
            maxCropBoxWidth={100}
            maxCropBoxHeight={100} 
            cropBoxResizable={false} 
          />
          <button onClick={cropImage} className='font12R text-GRAY_101 underline pb-4'>Save</button>
        </div>
      )}
        </>
  );
};

export default ImageUploader;

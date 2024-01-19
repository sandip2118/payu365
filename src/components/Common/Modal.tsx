import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CloseIcon from '@mui/icons-material/Close'
import { ModalProps } from './type'

const Modal: React.FC<ModalProps> = ({
  activeModal,
  onClose,
  noFade,
  className = 'max-w-xl',
  children,
  footerContent,
  centered,
  scrollContent,
  title,
  titleClassName,
  closeIcon
}) => {
  return (
    <>
      <Transition appear show={activeModal} as={Fragment}>
        <Dialog as="div" className="relative z-[99999]" onClose={onClose}>
          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={`flex min-h-full justify-center text-center p-6 ${
                centered ? 'items-center' : 'items-start '
              }`}
            >
              <Transition.Child
                as={Fragment}
                enter={noFade ? '' : 'duration-300  ease-out'}
                enterFrom={noFade ? '' : 'opacity-0 scale-95'}
                enterTo={noFade ? '' : 'opacity-100 scale-100'}
                leave={noFade ? '' : 'duration-200 ease-in'}
                leaveFrom={noFade ? '' : 'opacity-100 scale-100'}
                leaveTo={noFade ? '' : 'opacity-0 scale-95'}
              >
                <Dialog.Panel
                  className={`w-full transform overflow-hidden 
                  max-w-md dark:bg-slate-800 text-left align-middle shadow-xl transition-all ${className}`}
                >
                  <div
                    className={`relative overflow-hidden py-4 px-5 w-full ${titleClassName}`}
                  >
                    {title}
                    {closeIcon && <button
                      onClick={onClose}
                      className="absolute top-5 right-5 text-[22px]"
                    >
                      <CloseIcon color="white" className="cursor-pointer" />
                    </button>}
                  </div>

                  <div
                    className={` ${
                      scrollContent ? 'overflow-y-auto max-h-[400px]' : ''
                    }`}
                  >
                    {children}
                  </div>
                  {footerContent && (
                    <div className="px-4 py-3 flex justify-end space-x-3 border-t border-slate-100 dark:border-slate-700">
                      {footerContent}
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal

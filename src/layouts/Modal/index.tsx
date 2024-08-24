'use client';

import { createPortal } from 'react-dom';
import { IModalProps } from './types';

export const Modal = ({ children, isVisible }: IModalProps) => {
  if (!isVisible) {
    return null;
  }

  return createPortal(
    (
      <div className='absolute top-0'>
        {children}
      </div>
    ),
    document.body,
  );
};

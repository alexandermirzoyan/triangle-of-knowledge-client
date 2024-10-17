'use client';

import { createPortal } from 'react-dom';
import { IModalProps } from './types';

export const Modal = ({ children, isVisible, onClose }: IModalProps) => {
  if (!isVisible) {
    return null;
  }

  return createPortal(
    (
      <div className='absolute top-0 z-50'>
        <div role='presentation' onClick={onClose}>
          {children}
        </div>
      </div>
    ),
    document.body,
  );
};

import { ReactNode } from 'react';

export interface IModalProps {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

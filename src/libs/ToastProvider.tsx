'use client';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import styled from 'styled-components';
import { ReactNode } from 'react';
import { CheckCircle, Info, Warning } from '@/assets';

type Props = {
  children: React.ReactNode;
};

export default function ToastProvider({ children }: Props) {
  return (
    <>
      {children}
      <StyledToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={false}
        limit={1}
      />
    </>
  );
}

export const StyledToastContainer = styled(ToastContainer)`
  margin-top: 60px;
  .Toastify__toast {
    background-color: #000000bf;
    color: white;
    ${({ theme }) => theme.font.regular_14};
  }
`;
const defaultToastOption: ToastOptions = {
  position: 'top-center',
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
};

export const Toast = {
  info: (message: ReactNode, options: ToastOptions = {}) => {
    toast.info(message, { ...defaultToastOption, icon: <Info width={19} height={19} fill='#ffffff' />, ...options });
  },
  success: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(message, {
      ...defaultToastOption,
      icon: <CheckCircle width={19} height={19} fill='#13D460' />,
      ...options,
    });
  },
  error: (message: ReactNode, options: ToastOptions = {}) => {
    toast.error(message, {
      ...defaultToastOption,
      icon: <Warning width={19} height={19} fill='#E91212' />,
      ...options,
    });
  },
};

// root단의 app.tsx

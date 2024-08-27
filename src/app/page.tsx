'use client';

import Image from 'next/image';
import { useContext, useState } from 'react';

import { ThemeContext } from '@/context/theme/context';
import { ThemeSwitcher } from '@/components/widgets/theme-switcher';
import { Modal } from '@/layouts/Modal';

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <main className={`flex min-h-screen flex-col items-center justify-between dark:bg-grey-700 ${theme.value}`}>
        <ThemeSwitcher />
        <button onClick={() => setModalVisible(!isModalVisible)}>{isModalVisible ? 'Hide Modal' : 'Show Modal'}</button>
        <div>
          <p className='font-normal dark:text-white'>Welcome to TFK , Sign up</p>
          <Image
            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/triangle.svg'
            alt='Next.js Logo'
            width={54}
            height={48}
            priority
          />
        </div>
      </main>
      <Modal isVisible={isModalVisible} onClose={() => setModalVisible(false)}>
        <p>children</p>
      </Modal>
    </>
  );
};

export default Home;

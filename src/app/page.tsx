'use client';
import Contacts from './contacts/page';
import IntroductionHome from '@/components/homeIntroduction/container';
import GalleryPhotos from '@/components/gallery/container';
// import Feedbacks from './_feedbacks/page';
import SectionAbout from '@/components/aboutMe/SectionAbout';
import dynamic from 'next/dynamic';
import React from 'react';
import { UseFetchProvider } from '@/hooks/useCookies';

const Treatments = dynamic(() => import('@/components/homeTreatments/container'), { ssr: false });
const UserAuthProvider = React.createContext({});

export default function Home() {
  const user = UseFetchProvider();

  return (
    <>
      <UserAuthProvider.Provider value={user}>
        <IntroductionHome />
        <Treatments />
        <GalleryPhotos />
        {/* <Feedbacks /> */}
        <SectionAbout />
        <Contacts />
      </UserAuthProvider.Provider>
    </>
  );
}

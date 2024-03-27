import Contacts from './contacts/page';
import IntroductionHome from '@/components/homeIntroduction/container';
import GalleryPhotos from '@/components/gallery/container';
// import Feedbacks from './_feedbacks/page';
import SectionAbout from '@/components/aboutMe/SectionAbout';
import dynamic from 'next/dynamic';

const Treatments = dynamic(() => import('@/components/homeTreatments/container'), { ssr: false });

export default function Home() {
  return (
    <>
      <IntroductionHome />
      <Treatments />
      <GalleryPhotos />
      {/* <Feedbacks /> */}
      <SectionAbout />
      <Contacts />
    </>
  );
}

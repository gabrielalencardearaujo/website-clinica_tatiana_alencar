import Contacts from './contacts/page';
import IntroductionHome from '@/components/homeIntroduction/container';
import Treatments from '@/components/homeTreatments/container';
import GalleryPhotos from '@/components/gallery/container';
import Feedbacks from './_feedbacks/page';
import SectionAbout from '@/components/aboutMe/SectionAbout';

export default function Home() {
  return (
    <>
      <IntroductionHome />
      <Treatments />
      <GalleryPhotos />
      <Feedbacks />
      <SectionAbout />
      <Contacts />
    </>
  );
}

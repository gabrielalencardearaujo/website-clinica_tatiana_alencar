import Contacts from './contacts/page';
import Appointments from './appointments/page';
import IntroductionHome from '@/components/homeIntroduction/container';
import Treatments from '@/components/homeTreatments/container';
import GalleryPhotos from '@/components/gallery/container';

export default function Home() {
  return (
    <main className="w-11/12 mx-auto">
      <IntroductionHome />
      <Treatments />
      <GalleryPhotos />
      <Contacts />
      <Appointments />
    </main>
  );
}

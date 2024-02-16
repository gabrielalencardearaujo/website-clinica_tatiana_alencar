import Contacts from './contacts/page';
import Appointments from './appointments/page';
import IntroductionHome from '@/components/homeIntroduction/container';

export default function Home() {
  return (
    <main>
      <IntroductionHome />
      <Contacts />
      <Appointments />
    </main>
  );
}

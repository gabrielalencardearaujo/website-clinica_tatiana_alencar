import Login from './login/page';
import Contacts from './contacts/page';
import Appointments from './appointments/page';
import Header from '@/components/header/header';

export default function Home() {
  return (
    <main>
      <Header />
      <Login />
      <Contacts />
      <Appointments />
    </main>
  );
}

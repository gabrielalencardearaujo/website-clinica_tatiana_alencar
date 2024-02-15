import Login from './login/page';
import Contacts from './contacts/page';
import Appointments from './appointments/page';
import Header from '@/components/header';

export default function Home() {
  return (
    <main>
      <h1>hello world!</h1>
      <Header />
      <Login />
      <Contacts />
      <Appointments />
    </main>
  );
}

import Login from './login/page';
import Contacts from './contacts/page';
import Appointments from './appointments/page';

export default function Home() {
  return (
    <main>
      <Login />
      <Contacts />
      <Appointments />
    </main>
  );
}

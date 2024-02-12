import Login from './login/page';
import Contacts from './contacts/page';
import Appointments from './appointments/page';

export default function Home() {
  return (
    <main>
      <h1>hello world!</h1>
      <Login />
      <Contacts />
      <Appointments />
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/img/logo-simple.png';
import loginIcon from '../../assets/svgs/login-icon.svg';
import Search from './Search';
import Cart from './Cart';

export default function Header() {
  return (
    <header className="flex justify-around h-20">
      <div className="-mt-5" id="logo">
        <Image src={logo} alt="logo1" width={90} height={135} />
      </div>
      <div className="self-center" id="search">
        <Search />
      </div>
      <nav className="flex gap-x-16 font-medium text-color-base-7">
        <ul className="flex gap-x-10">
          <li className="self-center">
            <Link href={'/home#services'}>Serviços</Link>
          </li>
          <li className="self-center">
            <Link href={'/home#contacts'}>Contatos</Link>
          </li>
          <li className="self-center">
            <Link href={'/home#about'}>Sobre</Link>
          </li>
        </ul>

        <ul className="flex gap-x-16">
          <li className="self-center">
            <Cart />
          </li>
          <li className="flex content-center gap-2" title="Login">
            <Link href={'/login'} className="self-center">
              <Image src={loginIcon} alt="icone login user" width={28} height={28} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

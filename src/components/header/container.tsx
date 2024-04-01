'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/img/logo-simple.png';
// import Cart from './Cart';
import React from 'react';
import IconWhatsapp from './components/IconWhatsapp';
import IconIntagram from './components/IconIntagram';
import dynamic from 'next/dynamic';
import IconLogin from './components/IconLogin';
import { UseFetchProvider } from '@/context/useCookies';

const SearchBar = dynamic(() => import('../SearchBar/SearchBar'), { ssr: false });

export default function Header() {
  const [activeMenu, setActiveMenu] = React.useState<boolean>(false);
  const { data, loading } = UseFetchProvider();

  return (
    <header className="flex sm:justify-evenly xm:justify-around justify-between h-20 max-w-[1920px]">
      <Link href={'/'} className="-mt-5" id="logo">
        <Image className="w-16 h-20 xl:w-24 xl:h-28 " src={logo} alt="logo1" />
      </Link>
      <div className="self-center w-5/12 sm:flex hidden justify-center relative " id="search">
        <SearchBar />
      </div>

      <div
        className={`${activeMenu ? 'fixed right-10 top-5' : 'relative'} block xl:hidden self-center cursor-pointer z-20`}
        onClick={() => setActiveMenu((value) => !value)}
      >
        <div
          className={`${
            activeMenu
              ? 'bg-color-base-0 -rotate-45 translate-x-[-1px] translate-y-[12px]'
              : ' bg-color-base-7 '
          } w-8 h-1 m-1.5 transition duration-300 rounded-md`}
        ></div>
        <div
          className={`${
            activeMenu ? 'bg-color-base-0 opacity-0' : ' bg-color-base-7 '
          } w-8 h-1 m-1.5 transition duration-300 rounded-md`}
        ></div>
        <div
          className={`${
            activeMenu
              ? 'bg-color-base-0 rotate-45 transalte-x-[-4px] translate-y-[-8px]'
              : ' bg-color-base-7 '
          } w-8 h-1 m-1.5 transition duration-300 rounded-md`}
        ></div>
      </div>

      {activeMenu && window.innerWidth < 1024 ? (
        <nav className="xl:hidden fixed bg-color-base-7 flex flex-col w-full h-full text-4xl z-10">
          <ul className="flex flex-col mt-20 text-color-white gap-y-10">
            <li className="self-center hover:bg-color-base-6 w-10/12 p-2 text-center rounded-lg cursor-pointer">
              <Link href={'/#treatmentSection'}>Serviços</Link>
            </li>
            <li className="self-center hover:bg-color-base-6 w-10/12 p-2 text-center rounded-lg cursor-pointer">
              <Link href={'#contactSection'}>Contatos</Link>
            </li>
            <li className="self-center hover:bg-color-base-6 w-10/12 p-2 text-center rounded-lg cursor-pointer">
              <Link href={'/home#about'}>Sobre</Link>
            </li>
          </ul>
          <hr className="mx-auto w-10/12 text-color-base-3 my-10" />
          <ul className="flex gap-x-16 text-color-white justify-center">
            {/*
            <li className="self-center">
              <Cart />
            </li>
          */}
            <li
              className="self-center hover:bg-color-base-6 w-10/12 p-2 text-center rounded-lg cursor-pointer"
              title="Login"
            >
              {loading ? (
                'Carregando...'
              ) : data?.authenticate ? (
                <Link
                  href={'/account'}
                  className="flex justify-center items-center self-center gap-4"
                >
                  {data?.data?.name}
                </Link>
              ) : (
                <Link
                  href={'/login'}
                  className="flex justify-center items-center self-center gap-4"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
          <hr className="mx-auto w-10/12 text-color-base-3 my-10" />
          <ul className="text-color-white flex flex-wrap justify-center">
            <li className="hover:bg-color-base-6 w-1/2 p-2 min-w-[185px] text-center rounded-lg cursor-pointer">
              <Link href={'/login'} className="text-2xl flex gap-4 justify-center">
                <IconWhatsapp />
                WhatsApp
              </Link>
            </li>
            <li className="hover:bg-color-base-6 w-1/2 p-2 min-w-[185px] text-center rounded-lg cursor-pointer">
              <Link href={'/login'} className="text-2xl flex gap-4 justify-center">
                <IconIntagram />
                Instagram
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="hidden xl:flex gap-x-16 font-medium text-color-base-7">
          <ul className="flex gap-x-10">
            <li className="self-center hover:border-b-2">
              <Link href={'/#treatmentSection'}>Serviços</Link>
            </li>
            <li className="self-center hover:border-b-2">
              <Link href={'#contactSection'}>Contatos</Link>
            </li>
            <li className="self-center hover:border-b-2">
              <Link href={'/home#about'}>Sobre</Link>
            </li>
          </ul>

          <ul className="flex gap-x-16">
            {/*
              <li className="self-center">
                <Cart />
              </li>
            */}
            <li
              className="flex content-center items-center hover:text-color-base-5 gap-2"
              title="Login"
            >
              <IconLogin className="" width={30} />
              {loading ? (
                'Carregando...'
              ) : data?.authenticate ? (
                <Link
                  href={'/account'}
                  className="flex justify-center items-center self-center gap-4"
                >
                  {data?.data?.name}
                </Link>
              ) : (
                <Link
                  href={'/login'}
                  className="flex justify-center items-center self-center gap-4"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

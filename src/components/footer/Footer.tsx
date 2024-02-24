import Image from 'next/image';
import React from 'react';
import LogoFooter from '../../assets/img/logo-footer.png';
import CardLinks from './CardLinks';
import Link from 'next/link';
import { Pinyon_Script } from 'next/font/google';

const pinyonScript = Pinyon_Script({
  weight: '400',
  style: 'normal',
  display: 'auto',
  subsets: ['latin'],
});

const linksDepilacao = [
  { name: 'Depilação Buço', slug: 'depilacao-buco' },
  { name: 'Depilação Abdome', slug: 'depilacao-abdome' },
  { name: 'Depilação Axila', slug: 'depilacao-axila' },
  { name: 'Depilação Braços', slug: 'depilacao-bracos' },
  { name: 'Depilação Costas', slug: 'depilacao-costas' },
  { name: 'Depilação Peito', slug: 'depilacao-peito' },
  { name: 'Depilação Perianal', slug: 'depilacao-perianal' },
  { name: 'Depilação Virilha', slug: 'depilacao-virilha' },
];

const linksBotox = [
  { name: 'Botox Sobrancelhas', slug: 'botox-sobrancelhas' },
  { name: 'Botox Rugas Periorbitais', slug: 'botox-rugas-periorbitais' },
  { name: 'Botox Glabela', slug: 'botox-glabela' },
  { name: 'Botox-rugas-frontais', slug: 'botox-rugas-frontais' },
];

const otherLinks = [
  { name: 'Laser Terapia', slug: 'laser-terapia' },
  { name: 'Preenchimento Labial', slug: 'preenchimento-labial' },
  { name: 'PEIM - Procedimento Estético Injetável Microvasos', slug: 'peim' },
];

const phoneNumbers = [{ value: '2021-8899 ' }, { value: '(11) 9 8576-7723' }];

const address = [{ value: 'Rua Ali na Esquina, 100 - Vila Carrão - São Paulo, SP' }];

function Footer() {
  return (
    <>
      <footer className="h-min-[480px] flex justify-center mt-32 bg-color-base-9 gap-20 py-20 px-30 relative flex-wrap overflow-hidden">
        <div
          className={`absolute z-0 text-[400px] font-display -top-44 -left-36 text-color-base-8 text-opacity-10 ${pinyonScript.className}`}
        >
          Tatiana
        </div>
        <div
          className={`absolute z-0 text-[400px] font-display -bottom-56 -right-36 text-color-base-8 text-opacity-10 ${pinyonScript.className}`}
        >
          Alencar
        </div>

        <div className="relative z-2">
          <Image src={LogoFooter} alt="Logomarca" width={320} />
        </div>

        <CardLinks links={linksDepilacao} title="Depilação" />
        <CardLinks links={linksBotox} title="Botox" />
        <CardLinks links={otherLinks} title="Outros" />

        <div className="flex flex-col gap-8 italic text-lg relative z-2">
          <CardLinks links={address} title="Endereço" />
          <CardLinks links={phoneNumbers} title="Telefones" />
        </div>

        <div className="flex w-full justify-center text-color-base-7 -mb-8 gap-2 relative z-2">
          <p>&copy; Todos os direitos reservados.</p>
          <p>
            Desenvolvido por:{' '}
            <Link
              className="hover:text-color-base-3"
              href={'https://galencar.vercel.app/'}
              target="_blank"
            >
              Gabriel Alencar
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import { Pinyon_Script, Playfair_Display_SC } from 'next/font/google';
import Image from 'next/image';
import ImageWomenIntro from '../../assets/img/women-section-indroduction.png';
import ArrowRight from '../../assets/svgs/arrow-small-right.svg';
import WhatsappIcon from '../../assets/svgs/whatsapp-icon.svg';
import Link from 'next/link';

const pinyonScript = Pinyon_Script({
  weight: '400',
  style: 'normal',
  display: 'auto',
  subsets: ['latin'],
});

const playfairDisplaySC = Playfair_Display_SC({
  weight: '400',
  style: 'normal',
  display: 'auto',
  subsets: ['latin'],
});

function IntroductionHome() {
  return (
    <section className="bg-gradient-to-t from-color-base-1 w-11/12 mx-auto min-h-[800px] rounded-[20px] flex px-20">
      <div className="flex flex-col justify-center self-center gap h-5/6 w-7/12 gap-y-32">
        <article className="flex flex-col gap-y-9 text-color-base-8">
          <div>
            <p className={`${playfairDisplaySC.className} text-3xl -mb-8`}>Clínica</p>
            <h1 className={`text-[144px] font-display ${pinyonScript.className}`}>
              Tatiana Alencar
            </h1>
          </div>
          <p className="w-9/12 text-color-base-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed hic inventore placeat.
            Autem rerum reiciendis quia eius voluptas nihil alias nulla officia unde similique.
          </p>
        </article>

        <article className="flex gap-x-10">
          <Link
            href={'/appointments'}
            className="flex content-center gap-2 justify-center bg-color-base-9 py-4 px-6 text-color-base-0 rounded-[20px] text-xl font-semibold"
          >
            <p className="self-center">Marque sua Consulta</p>
            <Image src={ArrowRight} alt="arrow right" />
          </Link>

          <Link
            href={'https://api.whatsapp.com/send/?phone=5511981239743'}
            target="_blank"
            className="flex content-center gap-4 justify-center border-2 border-color-base-7 py-4 px-6 text-color-base-7 rounded-[20px] text-xl font-semibold"
          >
            <p className="self-center">Fale Conosco</p>
            <Image src={WhatsappIcon} alt="whatsapp icon" width={32} />
          </Link>
        </article>
      </div>

      <div>
        <Image src={ImageWomenIntro} alt="image women model" className="h-full" />
      </div>
    </section>
  );
}

export default IntroductionHome;

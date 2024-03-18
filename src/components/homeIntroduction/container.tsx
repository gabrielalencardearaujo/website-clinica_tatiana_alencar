import { Pinyon_Script, Playfair_Display_SC } from 'next/font/google';
import Image from 'next/image';
import ImageWomenIntro from '../../assets/img/women-section-indroduction.png';
import ArrowRight from '../../assets/svgs/arrow-small-right.svg';
import WhatsappIcon from '../../assets/svgs/whatsapp-icon.svg';
import Link from 'next/link';
import { env } from 'process';

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
    <section className="bg-gradient-to-t from-color-base-1 3xl:min-h-[800px] xxxl:min-h-[720px] xxl:min-h-[620px] xlg:min-h-[500px] xl:min-h-[420px] md:h-[400px] min-h-[520px] rounded-[20px] flex xxl:px-20 xl:px-10 mb-26 mt-6 min-w-[280px]">
      <div className="flex flex-col xlg:justify-center xl:justify-center self-center h-5/6 xl:w-7/12 xxl:gap-y-32 md:gap-y-20 gap-y-10 w-full">
        <article className="flex flex-col gap-y-9 text-color-base-8 animeEntryLeftSlow md:px-20 sm:px-10 px-4 xl:px-0">
          <div>
            <p className={`${playfairDisplaySC.className} xl:text-xl sm:text-lg text-md -mb-8`}>
              Clínica
            </p>
            <h1
              className={`3xl:text-[144px] xxxl:text-9xl xxl:text-8xl xl:text-7xl sm:text-6xl text-5xl mt-10 font-display ${pinyonScript.className}`}
            >
              Tatiana Alencar
            </h1>
          </div>
          <p className="xl:w-9/12 text-color-base-7 xxxl:text-lg xxl:text-md text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed hic inventore placeat.
            Autem rerum reiciendis quia eius voluptas nihil alias nulla officia unde similique.
          </p>
        </article>

        <article className="flex flex-col md:flex-row items-start md:gap-x-10 md:gap-y-0 sm:gap-y-5 gap-y-3 animeEntry md:px-20 sm:px-10 px-4 xl:px-0 xl:justify-start justify-between">
          <Link
            href={'/appointments'}
            className="flex content-center xxl:gap-2 xl:gap-1 justify-center bg-color-base-8 xxxl:py-4 xxxl:px-6 sm:px-3 sm:py-2 xm:px-2 xm:py-1 text-color-base-0 rounded-lg sm:rounded-[20px] xxxl:text-xl xl:text-md text-sm font-semibold sm:min-h-[60px] xxxl:h-full w-full md:w-auto"
          >
            <p className="self-center">Marque sua Consulta</p>
            <Image className="xxl:w-[67px] xl:w-[40px]" src={ArrowRight} alt="arrow right" />
          </Link>

          <Link
            href={'https://api.whatsapp.com/send/?phone=' + env.PHONE_TATIANA_ALENCAR}
            target="_blank"
            className="flex content-center gap-4 justify-center border-2 border-color-base-7 xxxl:py-4 xxxl:px-6 sm:px-3 sm:py-2 xm:px-2 xm:py-1 text-color-base-7 rounded-lg sm:rounded-[20px] xxxl:text-xl xl:text-md text-sm font-semibold sm:min-h-[60px] xxxl:h-full w-full md:w-auto"
          >
            <p className="self-center">Fale Conosco</p>
            <Image className="" src={WhatsappIcon} alt="whatsapp icon" width={32} />
          </Link>
        </article>
      </div>

      <div className="animeEntryRightSlow xl:block hidden">
        <Image
          src={ImageWomenIntro}
          alt="image women model"
          className="h-full xlg:w-full xl:w-full xl:h-10/12 "
        />
      </div>
    </section>
  );
}

export default IntroductionHome;

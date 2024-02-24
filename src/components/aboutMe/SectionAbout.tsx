import Image from 'next/image';
import React from 'react';
import tatianaPhoto from '../../assets/img/gallery/tatiana_alencar.jpeg';
import WhatsappIcon from '../../assets/svgs/whatsapp-icon.svg';
import Link from 'next/link';
import { env } from 'process';

function SectionAbout() {
  return (
    <section className="flex gap-32 min-h-[860px] mb-12">
      <div className="w-1/2 flex flex-col gap-8 justify-around">
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl text-color-base-4">Especialista em Estética. </h4>
          <h2 className="text-5xl text-color-base-7">Tatiana Alencar</h2>
        </div>

        <div className="flex flex-col gap-8">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nemo totam amet
            deleniti. Ratione dolorem doloremque modi accusantium culpa soluta voluptatem quia
            pariatur vel sapiente, voluptatum mollitia! Eum, eius dolor? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Debitis blanditiis quos minima tenetur, a explicabo
            soluta deleniti nihil quod, ipsam id ut. Ratione nobis ad inventore adipisci doloribus
            beatae id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolores
            culpa exercitationem reiciendis architecto aut nemo id harum veritatis maiores hic
            facere perspiciatis inventore suscipit iure pariatur perferendis modi dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut rerum delectus illo quidem
            explicabo incidunt deserunt corrupti magni, consectetur, id, amet sed nesciunt!
            Praesentium nihil quo nemo facere distinctio eius! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Aspernatur consequatur optio recusandae eligendi soluta,
            laborum fuga autem ipsam harum nesciunt, corrupti aperiam quae molestiae enim minima
            tempore repudiandae provident dolore.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur, optio autem
            enim earum corrupti voluptatibus dicta suscipit ut ad accusantium ab facere non natus
            praesentium ipsa tempora quasi odit! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Non nostrum quia reiciendis modi vero sequi distinctio quae vel esse? Dicta,
            veritatis! Porro dolor, blanditiis soluta velit accusamus quia officia non.
          </p>
        </div>

        <Link
          href={'https://api.whatsapp.com/send/?phone=' + env.PHONE_TATIANA_ALENCAR}
          className="flex self-start content-center gap-6 bg-color-base-8 py-4 px-8 text-color-base-0 rounded-[20px] text-2xl font-bold tracking-wider"
          target="_blank"
        >
          <p className="flex self-center content-center">Fale comigo</p>
          <Image src={WhatsappIcon} alt="whatsapp icon" width={32} />
        </Link>
      </div>

      <div className="w-1/2 rounded-[20px] flex justify-center">
        <Image
          src={tatianaPhoto}
          alt="Foto perfil tatiana"
          className="w-10/12 h-10/12 rounded-[20px]"
        />
      </div>
    </section>
  );
}

export default SectionAbout;

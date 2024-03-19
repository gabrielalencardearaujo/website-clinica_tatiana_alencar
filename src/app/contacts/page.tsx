import FormContact from '@/components/forms/FormContact';
import InfoContacts from '@/components/forms/infoContacts/InfoContacts';

export default function Contacts() {
  return (
    <section className="min-h-[860px]" id="#contactSection">
      <div className="flex flex-col gap-2">
        <h2 className="sm:text-5xl text-4xl text-color-base-7">Nossos contatos.</h2>
        <h4 className="sm:text-2xl text-lg text-color-base-4">
          Veja nossos contatos e como chegar
        </h4>
      </div>

      <article className="grid xl:grid-cols-2 grid-cols-1 mt-10 gap-x-16">
        <div className="h-max shadowCustom rounded-[20px] py-6 px-4">
          <h3 className="sm:text-2xl text-lg text-color-base-8 mx-2 mb-4">
            Envie uma mensagem para nós.
          </h3>
          <FormContact />
        </div>
        <div className="flex flex-col xl:mt-0 mt-20">
          <InfoContacts />
        </div>
      </article>
    </section>
  );
}

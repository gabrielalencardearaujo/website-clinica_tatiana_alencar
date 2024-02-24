import FormContact from '@/components/forms/FormContact';
import InfoContacts from '@/components/forms/infoContacts/InfoContacts';

export default function Contacts() {
  return (
    <section className="min-h-[860px]" id="#contactSection">
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl text-color-base-7">Nossos contatos.</h2>
        <h4 className="text-2xl text-color-base-4">Veja nossos contatos e como chegar</h4>
      </div>

      <article className="flex mt-10 gap-x-16">
        <div className="w-1/2 h-max shadowCustom rounded-[20px] py-6 px-4">
          <h3 className="text-2xl text-color-base-8 mx-2 mb-4">Envie uma mensagem para nós.</h3>
          <FormContact />
        </div>
        <div className=" w-1/2 flex flex-col">
          <InfoContacts />
        </div>
      </article>
    </section>
  );
}

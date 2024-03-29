'use client';
import React from 'react';
import CardTreatment from '@/components/CardTreatment/CardTreatment';
import { TreatmentJsonProtocol, TreatmentsJson } from '@/services/api';

function Page({ params }) {
  const [treatments, setTreatments] = React.useState<TreatmentJsonProtocol[]>([]);

  React.useEffect(() => {
    const jsonTreatment = TreatmentsJson;
    if (params.name) {
      const searchParams = jsonTreatment.filter((treatment) => {
        if (treatment.slug.includes(params.name)) return true;
      });
      setTreatments(searchParams);
    } else {
      setTreatments(jsonTreatment);
    }
  }, [params.name]);

  return (
    <section className="min-h-[860px] xxl:mt-20 xl:mt-8 md:mt-4 mt-0" id="">
      <h2 className="lg:text-7xl text-6xl text-color-base-3">Nossos Tratamentos.</h2>
      <div className="grid xxl:grid-cols-2 mt-20 gap-y-20 sm:gap-y-10 xl:gap-x-10">
        {treatments.map((treatment, index) => (
          <CardTreatment key={index} props={treatment} />
        ))}
      </div>
    </section>
  );
}

export default Page;

import React from 'react';

function page({ params }) {
  return <section>{params.slug}</section>;
}

export default page;

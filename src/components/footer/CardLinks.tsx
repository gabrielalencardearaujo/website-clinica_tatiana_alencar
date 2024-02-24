import Link from 'next/link';
import React from 'react';

type LinksFooterProtocol = {
  name?: string;
  slug?: string;
  value?: string;
};

type PropsFooter = {
  links: LinksFooterProtocol[];
  title: string;
};

function CardLinks({ links, title }: PropsFooter) {
  return (
    <div className="text-color-base-0 flex flex-col w-48 gap-5 relative z-2">
      <h6 className="border-b-[1px] font-semibold text-2xl pb-2">{title}</h6>
      <ul className="flex flex-col gap-3.5">
        {links.map((link) => {
          if (link.name) {
            return (
              <li key={link.slug}>
                <Link className="hover:text-color-base-4" href={`/treatments/${link.slug}`}>
                  {link.name}
                </Link>
              </li>
            );
          } else {
            return (
              <li className="w-60" key={link.value}>
                {link.value}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default CardLinks;

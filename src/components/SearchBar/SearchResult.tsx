import Link from 'next/link';
import React from 'react';

function SearchResult({ data, setActiveSearchBar }) {
  return (
    <div className="h-[250px] scrollbar-thumb-color-base-8 scrollbar-thin scrollbar-track-color-base-4 overflow-auto flex flex-col">
      {data.length > 0 ? (
        data.map((element) => (
          <Link
            href={`/treatments/${element.slug}`}
            className="text-lg hover:bg-color-base-3 px-6 py-1 hover:cursor-pointer"
            key={element.slug}
            onClick={() => setActiveSearchBar(false)}
          >
            {element.name}
          </Link>
        ))
      ) : (
        <p className="text-lg px-6 py-1 self-center mt-10 text-color-base-6 italic">
          Nenhum tratamento encontrado
        </p>
      )}
    </div>
  );
}

export default SearchResult;

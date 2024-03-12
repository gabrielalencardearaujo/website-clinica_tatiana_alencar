'use client';
import Image from 'next/image';
import lupa from '../../assets/svgs/lupa.svg';
import { TreatmentJsonProtocol, TreatmentsJson } from '@/services/api';
import SearchResult from './SearchResult';
import React from 'react';

function SearchBar() {
  const [activeSearchBar, setActiveSearchBar] = React.useState(false);
  const [valueSearchBar, setValueSearchBar] = React.useState('');
  const [treatments, setTreatments] = React.useState<TreatmentJsonProtocol[]>([]);

  const handleClickWindow = ({ target }) => {
    if (target.id !== 'inputSearchBar') {
      setActiveSearchBar(false);
      window.removeEventListener('click', handleClickWindow);
    }
  };
  window.addEventListener('click', handleClickWindow);

  React.useEffect(() => {
    const arrayTreatment = TreatmentsJson;
    setTreatments(
      arrayTreatment.filter((element) => {
        const regex = new RegExp(valueSearchBar, 'gi');

        return regex.test(element.name);
      }),
    );
  }, [valueSearchBar]);

  return (
    <>
      <input
        className="text-color-base-9 border-solid border-2 border-color-base-3 rounded-l-[10px] w-11/12 xl:w-7/12 h-10 py-2 px-6 focus:outline-none focus:bg-color-base-1 text-lg"
        placeholder="Pesquisar"
        onClick={() => setActiveSearchBar(true)}
        value={valueSearchBar}
        onChange={({ target }) => setValueSearchBar(target.value)}
        id="inputSearchBar"
      />

      {activeSearchBar && (
        <div
          className="bg-color-base-1 mr-1 rounded-[10px] top-12 self-center h-[250px] w-[63%] min-w-[400px] absolute overflow-hidden"
          id="searchResult"
        >
          <SearchResult data={treatments} setActiveSearchBar={setActiveSearchBar} />
        </div>
      )}
      <button className="p-2 border-solid border-r-2 border-t-2 border-b-2 rounded-r-[10px] border-color-base-3">
        <Image src={lupa} alt="btn pesquisar" width={20} height={20} />
      </button>
    </>
  );
}

export default SearchBar;

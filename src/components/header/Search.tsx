import Image from 'next/image';
import lupa from '../../assets/svgs/lupa.svg';

function Search() {
  return (
    <>
      <input
        className="text-color-base-9 border-solid border-2 border-color-base-3 rounded-l-[18px] w-7/12 h-10 p-2 focus:outline-none focus:bg-color-base-0 focus:"
        placeholder="Pesquisar"
      />
      <button className="p-2 border-solid border-r-2 border-t-2 border-b-2 rounded-r-[18px] border-color-base-3">
        <Image src={lupa} alt="btn pesquisar" width={20} height={20} />
      </button>
    </>
  );
}

export default Search;

import Image from 'next/image';
import cart from '../../assets/svgs/cart.svg';
import Link from 'next/link';

function Cart() {
  return (
    <div title="Carrinho">
      <Link href={'/cartPayment'}>
        <Image src={cart} alt="carrinho-compras" width={28} height={28} />
      </Link>
    </div>
  );
}

export default Cart;

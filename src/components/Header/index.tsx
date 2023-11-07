import { useState } from "react";
import { Head, Logo, Carrinho } from "./styles";
import carrinhoImg from "../../imgs/Vector.svg";
import { Cart } from "../Cart";
import { Product } from "../../@types/api";

type Props = {
  cart: Product[];
  removeFromCart: (id: number) => void;
};

export const Header = ({ cart, removeFromCart }: Props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <Head>
      <Logo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </Logo>
      <Carrinho onClick={() => setCartIsOpen(!cartIsOpen)}>
        <img src={carrinhoImg} alt="Imagem do carrinho" />
        <p>{cart.length}</p>
      </Carrinho>

      {cartIsOpen && <Cart setCartIsOpen={setCartIsOpen} cartIsOpen={cartIsOpen} cart={cart} removeFromCart={removeFromCart} />}
    </Head>
  );
};

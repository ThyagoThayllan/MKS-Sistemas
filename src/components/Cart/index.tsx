import { Product } from "../../@types/api";
import { CartCard } from "../CartCard";
import { Container, Head, Selecionados, Button, Bag, Total } from "./styles";

type Props = {
  cart: Product[];
  removeFromCart: (id: number) => void;
  setCartIsOpen: (cartState: boolean) => void;
  cartIsOpen: boolean;
};

export const Cart = ({
  cart,
  removeFromCart,
  setCartIsOpen,
  cartIsOpen,
}: Props) => {
  const total = cart.reduce((accumulator, product) => {
    return accumulator + Number(product.price);
  }, 0);

  return (
    <Container>
      <Bag>
        <Head>
          <h1>Carrinho de compras</h1>
          <button onClick={() => setCartIsOpen(!cartIsOpen)}>X</button>
        </Head>
        <Selecionados>
          {cart.map((product) => (
            <CartCard key={product.id} product={product} removeFromCart={removeFromCart} />
          ))}
        </Selecionados>
      </Bag>
      <Total>
        <h1>Total:</h1>
        <span>R${total}</span>
      </Total>
      <Button>Finalizar Compra</Button>
    </Container>
  );
};

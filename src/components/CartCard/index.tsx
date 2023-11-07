import {
  Container,
  Image,
  Price,
  Quantidade,
  Title,
  Sub,
  Som,
  X,
} from "./styles";
import { useState } from "react";
import { Product } from "../../@types/api";

type Props = {
  product: Product;
  removeFromCart: (id: number) => void;
};

export const CartCard = ({ product, removeFromCart }: Props) => {
  const [amount, setAmount] = useState(1);

  const addOneMore = () => {
    setAmount(amount + 1);
  };
  const decreaseOneMore = () => {
    setAmount(amount - 1);
  };

  const removerDecimal = (number: number) => {
    return Math.floor(number);
  };

  return (
    <Container>
      <Image src={product.photo} />
      <Title>{product.name}</Title>
      <Quantidade>
        <p>Qntd:</p>
        <span>
          <Sub onClick={decreaseOneMore} disabled={amount <= 1}>
            -
          </Sub>{" "}
          {amount} <Som onClick={addOneMore}>+</Som>
        </span>
      </Quantidade>
      <Price>R${removerDecimal(product.price)}</Price>
      <X onClick={() => removeFromCart(product.id)}>X</X>
    </Container>
  );
};

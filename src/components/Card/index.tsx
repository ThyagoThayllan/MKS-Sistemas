import { Product } from "../../@types/api";
import shoppingBag from "../../imgs/shopping-bag.svg";
import { Button, Container, Description, Image, Price } from "./styles";

type Props = {
  product: Product;
  addToCart: (product: Product) => void;
};

export const Card = ({ product, addToCart }: Props) => {
  const removerDecimal = (number: number) => {
    return Math.floor(number);
  };

  return (
    <Container>
      <Image src={product.photo} alt="Imagem do produto" />
      <Description>
        <div>
          <h2>{product.name}</h2>
          <Price>R${removerDecimal(product.price)}</Price>
        </div>
        <p>{product.description}</p>
      </Description>
      <Button onClick={() => addToCart(product)}>
        <img src={shoppingBag} alt="Bolsa de compras" />
        <span>COMPRAR</span>
      </Button>
    </Container>
  );
};

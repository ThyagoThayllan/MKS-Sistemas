import { Product } from "../../@types/api";
import { Loading } from "../../Skeleton";
import { Card } from "../Card";
import { Container } from "./styles";

type Props = {
  data?: Product[];
  addToCart: (product: Product) => void;
  isLoading: boolean;
};

const arraysSkeleton = [...Array(8)];
console.log(arraysSkeleton);

export const Produtos = ({ data, addToCart, isLoading }: Props) => {
  return (
    <Container>
      {isLoading
        ? arraysSkeleton.map(() => <Loading />)
        : data?.map((product) => (
            <Card
              addToCart={() => addToCart(product)}
              key={product.id}
              product={product}
            />
          ))}
    </Container>
  );
};

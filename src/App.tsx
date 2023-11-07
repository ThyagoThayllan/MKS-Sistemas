import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Container, GlobalStyles } from "./AppStyles";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Produtos } from "./components/Produtos";
import { Product, ProductsResponse } from "./@types/api";

export const App = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const API_BASE_URL =
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1";

  const fetchProducts = async (params: {
    page: number;
    rows: number;
    sortBy: string;
    orderBy: string;
  }) => {
    const { page, rows, sortBy, orderBy } = params;
    const response = await axios.get<ProductsResponse>(
      `${API_BASE_URL}/products`,
      { params: { page, rows, sortBy, orderBy } }
    );

    return response.data;
  };

  const useFetchProducts = (params: {
    page: number;
    rows: number;
    sortBy: string;
    orderBy: string;
  }) => {
    return useQuery<ProductsResponse, Error>(["products", params], () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(fetchProducts(params))
        }, 2000)
      })
    });
  };

  const { data, isLoading, isError } = useFetchProducts({
    page: 1,
    rows: 10,
    sortBy: "id",
    orderBy: "ASC",
  });

  if (isError) {
    return <div>Error fetching products.</div>;
  }

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  const removeFromCart = (id: number) => {
    const cartWithoutRemovedItem = cart.filter((product) => product.id !== id);
    setCart(cartWithoutRemovedItem);
  };

  return (
    <>
      <GlobalStyles />

      <Header removeFromCart={removeFromCart} cart={cart} />

      <Container>
        <Produtos
          isLoading={isLoading}
          addToCart={addToCart}
          data={data?.products}
        />
      </Container>

      <Footer />
    </>
  );
};

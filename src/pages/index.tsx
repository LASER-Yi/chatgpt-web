import Product from "@/components/Product";
import { useProducts } from "@/utilities";
import { Grid } from "@mantine/core";
import { FunctionComponent, useMemo } from "react";

const Home: FunctionComponent = () => {
  const products = useProducts();

  const elements = useMemo(
    () =>
      products.map((prod, idx) => (
        <Grid.Col key={idx} span={4}>
          <Product product={prod}></Product>
        </Grid.Col>
      )),
    [products]
  );

  return <Grid gutter="md">{elements}</Grid>;
};

export default Home;

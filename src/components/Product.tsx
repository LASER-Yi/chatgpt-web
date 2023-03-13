import { Anchor, Badge, Card, Group, Text } from "@mantine/core";
import { FunctionComponent } from "react";

interface ProductProp {
  product: App.Product;
}

const Product: FunctionComponent<ProductProp> = ({ product }) => {
  return (
    <Card shadow="md" p="lg" radius="md" withBorder>
      <Group position="apart" mb="sm">
        <Text weight="bold">{product.name}</Text>
        <Anchor href={product.link} target="_blank">
          <Badge color="green">WEBSITE</Badge>
        </Anchor>
      </Group>
      <Text size="sm" color="dimmed">
        {product.description}
      </Text>
    </Card>
  );
};

export default Product;

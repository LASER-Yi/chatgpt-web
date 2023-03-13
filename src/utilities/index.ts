import StaticData from "../static/data";

export function useStaticData() {
  return StaticData;
}

export function useProducts() {
  const data = useStaticData();

  return data.products;
}

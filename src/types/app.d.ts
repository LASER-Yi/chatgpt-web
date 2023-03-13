declare namespace App {
  interface Settings {
    apiKey: string;
  }

  interface StaticData {
    title: string;
    products: Product[];
  }

  interface Product {
    name: string;
    category: string;
    description: string;
    link: string;
  }
}

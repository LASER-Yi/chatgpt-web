import { Text } from "@mantine/core";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect } from "react";

const Home: FunctionComponent = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("./chat");
  }, [router]);

  return <Text>Redirecting...</Text>;
};

export default Home;

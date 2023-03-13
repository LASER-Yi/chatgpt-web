import { useStaticData } from "@/utilities";
import {
  Badge,
  Container,
  Group,
  Header as MantineHeader,
  MantineProvider,
  Stack,
} from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  const router = useRouter();

  const { title } = useStaticData();

  return (
    <MantineHeader height={{ base: 50 }}>
      <Group position="apart" noWrap sx={{ height: "100%" }}>
        <Group>
          <Badge size="lg" radius="sm">
            {title}
          </Badge>
        </Group>
        <Group>
          {/* <Button
            variant="light"
            color="gray"
            radius="sm"
            compact
            onClick={() => {
              router.push("/settings");
            }}
          >
            <BsGearFill />
          </Button> */}
        </Group>
      </Group>
    </MantineHeader>
  );
};

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>ChatGPT</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={{}}>
        <Container>
          <Stack>
            <Header></Header>
            <Component {...pageProps} />
          </Stack>
        </Container>
      </MantineProvider>
    </>
  );
};

export default App;

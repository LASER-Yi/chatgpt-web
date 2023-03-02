import {
  AppShell,
  Badge,
  Button,
  Group,
  Header as MantineHeader,
  MantineProvider,
} from "@mantine/core";
import { AppProps } from "next/app";
import Head from "next/head";
import { FunctionComponent } from "react";

import { BsGearFill } from "react-icons/bs";

const Header: FunctionComponent = () => {
  return (
    <MantineHeader height={{ base: 50 }}>
      <Group
        position="apart"
        noWrap
        sx={{ height: "100%", paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        <Group>
          <Badge size="lg" radius="sm">
            ChatGPT
          </Badge>
        </Group>
        <Group>
          <Button variant="light" radius="sm" compact disabled>
            <BsGearFill />
          </Button>
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
        <AppShell
          padding="md"
          // navbar={
          //   <Navbar width={{ base: 300 }} height={500}>
          //     ChatGPT
          //   </Navbar>
          // }
          header={<Header />}
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
};

export default App;

import { Sidebar } from "@/layouts/chat";
import { Center, Grid } from "@mantine/core";
import { FunctionComponent } from "react";

const Chat: FunctionComponent = () => {
  return (
    <Grid justify="flex-start" align="stretch" sx={{ height: "100%" }}>
      <Grid.Col span={4}>
        <Sidebar></Sidebar>
      </Grid.Col>
      <Grid.Col span={8}>
        <Center>Chat Room</Center>
      </Grid.Col>
    </Grid>
  );
};

export default Chat;

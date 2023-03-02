import {
  Avatar,
  Button,
  Divider,
  Group,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { FunctionComponent } from "react";

const Sidebar: FunctionComponent = () => {
  return (
    <Stack sx={{ height: "100%" }} spacing="xs">
      <Button fullWidth variant="outline" color="gray">
        New Chat
      </Button>
      <ScrollArea sx={{ height: "100%", flexGrow: 1 }}></ScrollArea>
      <Divider></Divider>
      <Group position="left">
        <Avatar size="md" radius="xl"></Avatar>
      </Group>
    </Stack>
  );
};

export default Sidebar;

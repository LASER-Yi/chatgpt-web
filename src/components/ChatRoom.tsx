import Message from "@/components/Message";
import { Button, Group, ScrollArea, Stack, TextInput } from "@mantine/core";
import { FunctionComponent, useState } from "react";
import { BiPaperPlane } from "react-icons/bi";

interface ChatRoomProps {}

const ChatRoom: FunctionComponent<ChatRoomProps> = () => {
  // TODO
  const [time] = useState(new Date("1990/1/1"));

  return (
    <Stack spacing="xs" sx={{ height: "100%" }}>
      <ScrollArea sx={{ flexGrow: 1 }}>
        <Stack>
          <Message timestamp={time}>This is a test message</Message>
          <Message timestamp={time}>This is a second test message</Message>
        </Stack>
      </ScrollArea>
      <Group position="apart" noWrap grow spacing="xs">
        <TextInput placeholder="Ask my anything..."></TextInput>
        <Button color="lime">
          <BiPaperPlane></BiPaperPlane>
        </Button>
      </Group>
    </Stack>
  );
};

export default ChatRoom;

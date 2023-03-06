import Message from "@/components/Message";
import { Button, Grid, ScrollArea, Stack, TextInput } from "@mantine/core";
import { FunctionComponent, useState } from "react";
import { BiPaperPlane } from "react-icons/bi";

interface ChatRoomProps {
  // messages:
}

const ChatRoom: FunctionComponent<ChatRoomProps> = () => {
  // TODO
  const [time] = useState(new Date("1990/1/1"));

  return (
    <Stack spacing="xs" sx={{ height: "100%" }}>
      <ScrollArea sx={{ flexGrow: 1 }}>
        <Stack>
          <Message timestamp={time}>This is a test message</Message>
          <Message timestamp={time} response>
            This is a response
          </Message>
          <Message timestamp={time}>This is a second test message</Message>
        </Stack>
      </ScrollArea>
      <Grid gutter="xs">
        <Grid.Col span="auto">
          <TextInput placeholder="Ask me anything..."></TextInput>
        </Grid.Col>
        <Grid.Col span="content">
          <Button color="lime">
            <BiPaperPlane></BiPaperPlane>
          </Button>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default ChatRoom;

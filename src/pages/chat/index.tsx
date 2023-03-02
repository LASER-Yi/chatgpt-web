import Message from "@/components/Message";
import { Sidebar } from "@/layouts/chat";
import { Grid, ScrollArea } from "@mantine/core";
import { FunctionComponent, useCallback, useState } from "react";

const Chat: FunctionComponent = () => {
  const [sessions, setSessions] = useState<Chat.Session[]>([]);

  const newSession = useCallback(() => {
    // TODO
    const hasEmptySession = false;
    if (hasEmptySession) {
      return;
    }

    // TODO
    const session: Chat.Session = {
      id: "todo",
      name: "",
    };

    setSessions((value) => [session, ...value]);
  }, []);

  return (
    <Grid justify="flex-start" align="stretch" sx={{ height: "100%" }}>
      <Grid.Col span={3}>
        <Sidebar
          sessions={sessions}
          selected={null}
          onSelected={(id) => {}}
          onCreated={newSession}
        ></Sidebar>
      </Grid.Col>
      <Grid.Col span={9}>
        <ScrollArea sx={{ height: "100%" }}>
          <Message>This is a test message</Message>
        </ScrollArea>
      </Grid.Col>
    </Grid>
  );
};

export default Chat;

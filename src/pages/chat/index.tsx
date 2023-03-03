import ChatRoom from "@/components/ChatRoom";
import { Sidebar } from "@/layouts/chat";
import { createStyles, Grid } from "@mantine/core";
import { FunctionComponent, useCallback, useState } from "react";

const useStyles = createStyles((theme) => {
  return {
    sidebar: {
      borderRight: `1px solid ${theme.colors.gray[3]}`,
    },
  };
});

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
      name: "New chat",
    };

    setSessions((value) => [session, ...value]);
  }, []);

  const { classes } = useStyles();

  return (
    <Grid justify="flex-start" align="stretch" sx={{ height: "100%" }}>
      <Grid.Col span={3} className={classes.sidebar}>
        <Sidebar
          sessions={sessions}
          selected={null}
          onSelected={(id) => {
            // TODO
          }}
          onCreated={newSession}
        ></Sidebar>
      </Grid.Col>
      <Grid.Col span={9}>
        <ChatRoom></ChatRoom>
      </Grid.Col>
    </Grid>
  );
};

export default Chat;

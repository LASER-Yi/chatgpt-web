import { Session } from "@/components/Session";
import { Button, ScrollArea, Stack } from "@mantine/core";
import { FunctionComponent, useMemo } from "react";

interface SidebarProps {
  selected: string | null;
  sessions: Chat.Session[];
  onSelected: (id: string) => void;
  onCreated: () => void;
}

const Sidebar: FunctionComponent<SidebarProps> = ({
  selected,
  sessions,
  onSelected,
  onCreated,
}) => {
  const sessionElements: React.ReactElement[] = useMemo(
    () =>
      sessions.map((value) => (
        <Session key={value.id} active={false}>
          {value.name}
        </Session>
      )),
    [sessions]
  );

  return (
    <Stack sx={{ height: "100%" }} spacing="xs" m="xs">
      <Button
        fullWidth
        variant="outline"
        color="gray"
        onClick={onCreated}
        disabled
      >
        New Chat
      </Button>
      <ScrollArea sx={{ height: "100%", flexGrow: 1 }}>
        {sessionElements}
      </ScrollArea>
      {/* <Divider></Divider>
      <Group position="left">
        <Avatar size="md" radius="xl"></Avatar>
      </Group> */}
    </Stack>
  );
};

export default Sidebar;

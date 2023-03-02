import { Card, CloseButton, Group, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { FunctionComponent } from "react";

export interface SessionProps {
  active: boolean;
  children: string;
}

export const Session: FunctionComponent<SessionProps> = ({
  active,
  children,
}) => {
  const { hovered, ref } = useHover();
  return (
    <Card my="sm" radius="sm" withBorder ref={ref}>
      <Card.Section p="sm">
        <Group position="apart" align="center" grow>
          <Text color="dimmed">{children}</Text>
          <Group spacing="sm" position="right" hidden={hovered === false}>
            {/* <Button variant="subtle" compact>
              <Text color="dimmed">
                <BiEdit></BiEdit>
              </Text>
            </Button> */}
            <CloseButton title="Close session" size="sm" />
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};

import { Button, Container, PasswordInput, Stack, Title } from "@mantine/core";
import { Form, useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";

const Settings: FunctionComponent = () => {
  const form = useForm<App.Settings>({
    initialValues: {
      apiKey: "",
    },
    validate: {
      apiKey: (value) =>
        value.length !== 0 ? "You must set up the API Key to continue" : null,
    },
  });

  const [apiVisibility, setApiVisibility] = useState(
    form.isValid("apiKey") === false
  );

  const router = useRouter();

  return (
    <Container px="xl">
      <Title mb="md">Settings</Title>
      <Form
        form={form}
        onSubmit={(values) => {
          // TODO

          router.push("/");
        }}
      >
        <Stack>
          <PasswordInput
            {...form.getInputProps("apiKey")}
            visible={apiVisibility}
            onVisibilityChange={setApiVisibility}
            label="API Key"
          ></PasswordInput>
          <Button type="submit" fullWidth>
            Save
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default Settings;

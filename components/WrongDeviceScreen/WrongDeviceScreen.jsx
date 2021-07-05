import { Text, Content, Container } from "./WrongDeviceScreen.style";

export default function WrongDeviceScreen() {
  return (
    <Container>
      <Content>
        <Text>
          <p>
            Oops, looks like you're using a mobile device.
            <br />
            <em>Please rotate your device</em>
          </p>
        </Text>
      </Content>
    </Container>
  );
}

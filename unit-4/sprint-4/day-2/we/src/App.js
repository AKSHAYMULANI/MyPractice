import Form from "./Components/Form";
import Layout from "./Components/Layout"
import { Container } from "@chakra-ui/react";
import "./styles.css";

export default function App() {
  return (
    <div>
      {/* <AirbnbCard />
      <br />
      <br />
      <br />
      <ButtonExample /> */}
      <Container maxW="xl">
        <Form />
        <br />
        <br />
        <Layout />
      </Container>
    </div>
  );
}

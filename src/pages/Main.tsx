import React from "react";
import ReturnChart from "../components/ReturnChart";
import Table from "../components/Table";
import { ChartContainer, Container } from "../theme";

const Main = () => {
  return (
    <Container>
      <ChartContainer>
        <ReturnChart />
        <br/>
        <br/>
        <Table />
      </ChartContainer>
    </Container>
  );
};

export default Main;

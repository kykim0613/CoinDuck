import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { active, mode } from "../atom";
import React from "react";

const DrawTable = styled.table`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TableTitle = styled.td<active>`
  border: ${(props) => (props.$active ? `1px solid #fff` : `1px solid #333`)};
  background-color: beige;
  color: black;
  display: flex;
  width: 120px;
  align-items: center;
  justify-content: center;
`;
const TableContent = styled.td<active>`
  border: ${(props) => (props.$active ? `1px solid #fff` : `1px solid #333`)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Table: React.FC = () => {
  const blackMode = useRecoilValue(mode);
  const data = [
    { date: 1, coin: "BTC", rate: 30 },
    { date: 2, coin: "1INCH", rate: 25 },
    { date: 3, coin: "AHC", rate: 35 },
  ];
  return (
    <DrawTable>
      {data.map((user, index) => (
        <tbody key={index} style={{display:"flex"}}>
          <tr>
          <TableTitle $active={blackMode}>{user.date}</TableTitle>
          <TableContent $active={blackMode}>{user.coin}</TableContent>
          <TableContent $active={blackMode}>{user.rate} %</TableContent>
          </tr>
        </tbody>
      ))}
    </DrawTable>
  );
};

export default Table;

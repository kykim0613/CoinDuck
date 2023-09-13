import styled from "styled-components";
import Menu from "./Header/Menu";
import Mode from "./Header/Mode";
import { useRecoilValue } from "recoil";
import { mode } from "../atom";

const Container = styled.div`
  width: 1200px;
  height: 200px;
  margin: 0 auto;
  position: relative;
  border-bottom: ${(props) =>
    props.$active ? `1px solid #fff` : `1px solid #333`};
`;
const MenuBox = styled.div`
  position: absolute;
`;

const ModeBox = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`;

const Header = () => {
  const blackMode = useRecoilValue(mode);

  return (
    <Container $active={blackMode}>
      <MenuBox>
        <Menu />
      </MenuBox>
      <ModeBox>
        <Mode />
      </ModeBox>
    </Container>
  );
};

export default Header;

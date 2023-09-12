import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { mode } from "../../atom";

const MenuBox = styled.div`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 27px;
  height: 24px;
  padding: 10px;
`;

const MenuBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.$active ? `#fff` : `#333`};
`;

const MenuContainer = styled.div`
  width: 400px;
  height: 500px;
  border-radius: 20px;
  background-color: ${(props) => props.$active ? `#333` : `#fff`};;
`;

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const blackMode = useRecoilValue(mode)

  const handleMenuBtn = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <MenuBox onClick={handleMenuBtn}>
            <MenuBar $active={blackMode}></MenuBar>
            <MenuBar $active={blackMode}></MenuBar>
            <MenuBar $active={blackMode}></MenuBar>
      </MenuBox>
      {toggleMenu && <MenuContainer></MenuContainer>}
    </>
  );
};

export default Menu;

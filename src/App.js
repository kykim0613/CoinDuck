import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import { mode } from "./atom";
import { useRecoilValue } from "recoil";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Helvetica Neue', sans-serif;
        color: ${(props) => props.$active ? `#fff` : `#333`};
        background-color: ${(props) => props.$active ? `#333` : `#fff`}
  },
    button {
        color: ${(props) => props.$active ? `#fff` : `#333`};
        background-color: ${(props) => props.$active ? `#333` : `#fff`}
    }
`

function App() {
  const blackMode = useRecoilValue(mode)
  return (
    <>
      <GlobalStyle $active={blackMode} />
      <Router />
    </>
  );
}

export default App;

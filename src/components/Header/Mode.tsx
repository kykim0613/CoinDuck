import { useRecoilState } from "recoil";
import styled from "styled-components";
import { active, mode } from "../../atom";
import React from "react";

const BlackModeBtn = styled.button<active>`
    width: 80px;
    height: 40px;
    border-radius: 30px;
    border: ${(props) => props.$active ? `1px solid #fff` : `1px solid #333`};
    background-color: #fff;
    cursor:pointer;
    align-items:center;
    justify-content: center;
    text-align:center;
`
const Circle = styled.div<active>`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: #333;
    transition: 0.4s;
    float: ${(props) => props.$active ? `left` : `right`};
`

const Mode:React.FC = () => {
    const [Btn, setBtn] = useRecoilState(mode)

    const handleModeBtn = () => {
        setBtn(!Btn)
    }
    return (
        <>
        <BlackModeBtn onClick={handleModeBtn} $active={Btn}>
            <Circle $active={Btn} />
        </BlackModeBtn>
        </>
    )
}

export default Mode;
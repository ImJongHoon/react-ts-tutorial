import styled from "styled-components"

interface ContainerProps{
    background: string;
}
const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props=>props.background};
    border-radius: 100px;
`;

interface CircleProps {
    bgColor: string;
}

function Circle({bgColor}: CircleProps){
    return <Container background={bgColor} />;
}

export default Circle;
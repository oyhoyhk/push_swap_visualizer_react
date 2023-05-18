import styled from "@emotion/styled";
import Stack from "./Stack";

interface IProps {
  height: number;
  totalWidth: number;
  width: number;
  stackA: number[];
  stackB: number[];
}

const Visualizer = (props: IProps) => {
  return (
    <VisualizerContainer {...props}>
      <Header>Command : </Header>
      <StackContainer>
        <Stack stack={props.stackA} />
        <Stack stack={props.stackB} />
      </StackContainer>
    </VisualizerContainer>
  );
};

const StackContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  font-size: 1.5rem;
`;

const VisualizerContainer = styled.div<IProps>`
  width: ${(props) => `${props.totalWidth}px`};
  margin: 50px auto;
  height: 90vh;
  border: 2px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export default Visualizer;

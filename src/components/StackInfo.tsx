import styled from "@emotion/styled";
import {useEffect, useState} from "react";

const StackInfo = ({stack, name}: { stack: number[]; name: string }) => {
    const [top, setTop] = useState<number[]>([]);
    const [bottom, setBottom] = useState<number[]>([]);

    useEffect(() => {
        if (stack.length < 10) {
            const mid = Math.ceil(stack.length / 2);
            setTop([...stack.slice(mid).reverse()]);
            setBottom([...stack.slice(0, mid).reverse()]);


        } else {
            setTop([...stack.slice(stack.length - 5).reverse()]);
            setBottom([...stack.slice(0, 5).reverse()])
        }
    }, [stack])
    return (
        <StackInfoContainer>
            <Stack>
                <Container>{top.map(num => <Element
                    key={num}>{num}</Element>)}</Container>
                <Container>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </Container>
                <Container>
                    {bottom.map(num => <Element key={num}>{num}</Element>)}
                </Container>
            </Stack>
            <Name>{name}</Name>
        </StackInfoContainer>
    );
};

const Container = styled.div`
`

const Name = styled.div`
  font-size: 1rem;
`;

const Element = styled.div`

`

const Stack = styled.div`
  border-left: 2px solid white;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  width: 100%;
  height: 90%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const StackInfoContainer = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  font-size: 1.25rem;
`;

export default StackInfo;

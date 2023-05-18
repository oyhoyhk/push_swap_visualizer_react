import styled from "@emotion/styled";

const StackInfo = ({ stack, name }: { stack: number[]; name: string }) => {
  return (
    <StackInfoContainer>
      <Name>{name}</Name>
      <Stack />
    </StackInfoContainer>
  );
};

const Name = styled.div`
  font-size: 1.5rem;
`;

const Stack = styled.div`
  border-left: 2px solid white;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  width: 87%;
  height: 100%;
`;

const StackInfoContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export default StackInfo;

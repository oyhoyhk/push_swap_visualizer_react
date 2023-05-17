import styled from "@emotion/styled";
import { createRandomNumber } from "../funcs";

const Generator = ({
  count,
  handleInputChange,
}: {
  count: number;
  handleInputChange: React.ChangeEventHandler;
}) => {
  const clickCopyNumbers = () => {
    const str = createRandomNumber(count);
    navigator.clipboard
      .writeText(str)
      .then(() => {
        console.log(str);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <GeneratorStyled>
      <Container>
        <InputContainer>
          <label htmlFor="count">난수 개수 : </label>
          <Input
            type="text"
            id="count"
            value={count}
            onChange={handleInputChange}
          />
        </InputContainer>
        <ButtonContainer>
          <Button onClick={clickCopyNumbers}>복사하기</Button>
        </ButtonContainer>
      </Container>
    </GeneratorStyled>
  );
};

const Button = styled.div`
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direciton: column;
  width: 95%;
  justify-content: space-between;
  align-items: center;
`;

const InputContainer = styled.div`
  font-size: 1.5rem;
`;

const Input = styled.input`
  background: transparent;
  color: white;
  outline: none;
  border: none;
  font-size: 1.5rem;
  border-bottom: 2px solid white;
  width: 60px;
  text-align: center;
`;

const GeneratorStyled = styled.div`
  width: 580px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export default Generator;

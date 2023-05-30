import styled from "@emotion/styled";
import data from "./CommandsInfo.json";
import { useEffect, useState } from "react";

console.log(data);
interface ICmdInfo {
  name: string;
  description: string;
  pic: string;
}
const Description = () => {
  const [idx, setIdx] = useState(0);

  const onClick = (index: number) => {
    setIdx(index);
  };

  return (
    <DescriptionContainer>
      <h2>{">"} What is Push Swap?</h2>
      <p>
        "push_swap" is a task to sort an unsorted stack A to stack B using a
        given set of commands while minimizing the number of commands used.
      </p>
      <CommandSelector>
        {data.map((info: ICmdInfo, index: number) => (
          <div
            className={data[idx].name === info.name ? "active" : ""}
            onClick={() => onClick(index)}
          >
            {info.name}
          </div>
        ))}
      </CommandSelector>
      <CurrentCommand>
        <p>{data[idx].description}</p>
        <img src={data[idx].pic} alt={data[idx].name} />
      </CurrentCommand>
      <h2>{">"} How can I solve it?</h2>
    </DescriptionContainer>
  );
};

const CurrentCommand = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  & > p {
    width: 100%;
    padding: 20px;
    font-size: 1.25rem;
  }
  & > img {
    height: 330px;
  }
`;

const CommandSelector = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  color: gray;
  cursor: pointer;
  & .active {
    color: white;
  }
`;

const DescriptionContainer = styled.div`
  width: 580px;
  margin: 25px auto;

  & > p {
    padding: 0 20px;
    font-size: 1.25rem;
  }
`;
export default Description;

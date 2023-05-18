import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const CommandSection = ({
  commands,
  cur,
}: {
  commands: string[];
  cur: number;
}) => {
  const [arr, setArr] = useState<string[]>([]);

  useEffect(() => {
    let temp;
    let last = commands.length - 1;
    switch (cur) {
      case 0:
        temp = ["", "", ...commands.slice(0, 3)];
        break;
      case 1:
        temp = ["", ...commands.slice(0, 4)];
        break;
      case last - 1:
        temp = [...commands.slice(last - 3), ""];
        break;
      case last:
        temp = [...commands.slice(last - 2), "", ""];
        break;
      case last + 1:
        temp = [...commands.slice(last - 2), "", ""];
        break;
      default:
        temp = [...commands.slice(cur, cur + 5)];
    }
    setArr(temp);
  }, [cur]);
  return (
    <CommandSectionContainer>
      <Commands>
        {arr.map((cmd, idx) => (
          <Cmd
            key={idx}
            className={
              idx === 0 || idx === 4 ? "edge" : idx === 2 ? "center" : ""
            }
          >
            {cmd}
          </Cmd>
        ))}
      </Commands>
    </CommandSectionContainer>
  );
};

const Cmd = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  &.edge {
    color: #5b5b5b;
  }
  &.center {
    font-weight: bold;
    color: white;
  }
  color: #a0a0a0;
`;

const Commands = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommandSectionContainer = styled.div`
  width: 100%;
  height: 50px;
  overflow: hidden;
`;

export default CommandSection;

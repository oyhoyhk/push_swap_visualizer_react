import styled from "@emotion/styled";
import { useState } from "react";

const ReadFile = () => {
  const [file, setFile] = useState<any>(null);

  console.log(file);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    const reader = new FileReader();

    reader.onload = function (e: ProgressEvent<FileReader>) {
      if (!e.target) return;
      const fileContents = e.target.result;
      console.log(fileContents);
    };
    reader.readAsText(droppedFile);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <ReadFileContainer
        htmlFor="file"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        이 곳으로 파일을 끌어다 올려주세요.
        <AddIcon />
      </ReadFileContainer>
      <input style={{ display: "none" }} type="file" id="file" />
    </>
  );
};

const AddIcon = styled.div`
  width: 42px;
  height: 42px;
  background: url("/add.png");
  background-size: 100% 100%;
`;

const ReadFileContainer = styled.label`
  font-size: 1.5rem;
  width: 570px;
  height: 120px;
  border: 2px solid white;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ReadFile;

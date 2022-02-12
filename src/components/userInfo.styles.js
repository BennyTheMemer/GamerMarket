import styled from "styled-components";

export const FormImage = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;

export const FileUploadContainer = styled.section`
  position: relative;
  margin: 25px 0 15px;
  border: 2px dotted lightgray;
  padding: 35px 20px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 18vh;
  height: 18vh;
`;

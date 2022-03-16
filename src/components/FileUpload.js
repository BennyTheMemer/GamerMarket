import React, { useRef, useState } from "react";
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  ImagePreview,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  RemoveFileIcon,
  InputLabel,
} from "./FileUpload.styles";
import {
  Box,
  Text,
  Flex,
  GridItem,
  Input,
  Grid,
  Textarea,
  Stack,
  Image,
  AspectRatio,
} from "@chakra-ui/react";

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;
const KILO_BYTES_PER_BYTE = 1000;

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };
  const convertNestedObjectToArray = (nestedObj) =>
    Object.keys(nestedObj).map((key) => nestedObj[key]);

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };
  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  return (
    <Flex flexDirection="column" w="100%" align="center">
      <DragDropText>Drag and drop your files anywhere or</DragDropText>
      <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
        <i className="fas fa-file-upload" />
        <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
      </UploadFileBtn>
      <FileUploadContainer>
        <FormField
          type="file"
          accept="image/png, image/jpeg"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
        <Grid
          mt="2%"
          w="100%"
          h="100%"
          templateColumns={["repeat(2,1fr)", , , , "repeat(4, 1fr)"]}
          gap={["1", , , , "6"]}
          align="center"
        >
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split("/")[0] === "image";
            return (
              <GridItem justify="center">
                <PreviewContainer key={fileName}>
                  <Flex h="100%" w="100%" align="center" justify="center">
                    {isImageFile && (
                      <AspectRatio minW={["100px", , , , "200px"]} ratio={1}>
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={`file preview ${index}`}
                        />
                      </AspectRatio>
                    )}
                    <FileMetaData isImageFile={isImageFile}>
                      <span>{file.name}</span>
                      <aside>
                        <span>{convertBytesToKB(file.size)} kb</span>
                        <RemoveFileIcon
                          className="fas fa-trash-alt"
                          onClick={() => removeFile(fileName)}
                        />
                      </aside>
                    </FileMetaData>
                  </Flex>
                </PreviewContainer>
              </GridItem>
            );
          })}
        </Grid>
      </FileUploadContainer>
    </Flex>
  );
};

export default FileUpload;

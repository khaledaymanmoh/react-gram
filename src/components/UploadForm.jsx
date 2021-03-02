import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import styled from 'styled-components';
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    let types = ['image/png', 'image/jpeg', 'image/jpg'];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError('Upload a valid image file');
    }
  };
  return (
    <StyledForm>
      <label>
        <input type='file' onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 70%;

  margin: 30px auto 10px;
  text-align: center;
  label {
    cursor: pointer;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 10px auto;
    line-height: 30px;
    color: white;
    font-weight: bold;
    font-size: 24px;
    background-color: #f8a1d1;
    transition: all 0.5s ease-out;
    input {
      height: 0;
      width: 0;
      opacity: 0;
    }
    &:hover {
      background-color: #e36bae;
      color: white;
    }
  }
`;

export default UploadForm;

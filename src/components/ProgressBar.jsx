import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <ProgressStyled
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
      className='progress-bar'
      style={{ width: progress + '%' }}
    ></ProgressStyled>
  );
};

const ProgressStyled = styled(motion.div)`
  background-color: #f8a1d1;
  height: 5px;
  margin: 1rem 0;
`;

export default ProgressBar;

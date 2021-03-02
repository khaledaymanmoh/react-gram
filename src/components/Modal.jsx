import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const closeHandler = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <BackDrop
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='backdrop'
      onClick={closeHandler}
    >
      <motion.img
        initial={{ y: '-100vh' }}
        animate={{ y: '0' }}
        src={selectedImg}
        alt='fullsize'
      />
    </BackDrop>
  );
};

const BackDrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    max-width: 60%;
    max-height: 80%;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
    border: solid 3px white;
    @media screen and (max-width: 786px) {
      max-width: 90%;
      max-height: 90%;
    }
  }
`;

export default Modal;

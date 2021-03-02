import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  return (
    <StyledGrid>
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className='img-wrap'
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url}
              alt='image'
            />
          </motion.div>
        ))}
    </StyledGrid>
  );
};

const StyledGrid = styled.div`
  width: 70%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 20px;
  @media screen and (max-width: 786px) {
    width: 90%;
    grid-template-columns: 1fr;
    padding: 5px;
  }
  .img-wrap {
    overflow: hidden;
    height: 0;
    padding: 50% 0;
    position: relative;
    opacity: 0.8;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export default ImageGrid;

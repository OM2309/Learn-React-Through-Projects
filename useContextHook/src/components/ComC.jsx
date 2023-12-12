import { useContext } from 'react';
import { BioDataContext } from './ComA';

const ComC = () => {
  const name = useContext(BioDataContext);
  return (
    <>
      <p>{name}</p>
    </>
  );
};

export default ComC;
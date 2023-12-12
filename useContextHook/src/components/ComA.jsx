import { createContext } from 'react';
import ComC from './ComC';

// Create a context
export const BioDataContext = createContext();

const ComA = () => {
  return (
    <BioDataContext.Provider value={"Anurag Sharma"}>
      <ComC />
    </BioDataContext.Provider>
  );
};

export default ComA;
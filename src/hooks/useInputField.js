import { useState } from 'react';

const useInputField = () => {
  const [input, setInput] = useState('');
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  const clearInput = () => {
    setInput('');
  };
  
  return { input, handleInputChange, clearInput };
};

export default useInputField;
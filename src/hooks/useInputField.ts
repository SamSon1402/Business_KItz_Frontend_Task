import { useState, ChangeEvent } from 'react';

interface InputFieldReturn {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearInput: () => void;
}

const useInputField = (): InputFieldReturn => {
  const [input, setInput] = useState<string>('');
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };
  
  const clearInput = (): void => {
    setInput('');
  };
  
  return { input, handleInputChange, clearInput };
};

export default useInputField;
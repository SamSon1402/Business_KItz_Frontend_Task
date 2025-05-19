import { useState } from 'react';

const useNavigation = () => {
  const [page, setPage] = useState('edit');
  
  const navigateTo = (pageName) => {
    setPage(pageName);
  };
  
  return { page, navigateTo };
};

export default useNavigation;
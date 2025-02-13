import { useEffect, useState } from "react";

const useTabFocus = () => {
    const [isFocused, setIsFocused] = useState(true);
  
    useEffect(() => {
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          setIsFocused(true);
        } else {
          setIsFocused(false);
        }
      };
  
      document.addEventListener('visibilitychange', handleVisibilityChange);
  
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }, []);
  
    return isFocused;
  };

  export default useTabFocus;
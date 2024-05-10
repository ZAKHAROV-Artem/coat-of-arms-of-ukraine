import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncesValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncesValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};

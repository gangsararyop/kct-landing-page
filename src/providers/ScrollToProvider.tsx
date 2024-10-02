"use client";

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface ScrollToProviderProps extends PropsWithChildren {}

const ScrollContext = createContext<{
  setId: Dispatch<SetStateAction<string | null>>;
}>({
  setId: () => {},
});

const ScrollToProvider: FC<ScrollToProviderProps> = ({ children }) => {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const targetId = id.substring(1);

      const timeout = setTimeout(() => {
        console.log("masuk sini", targetId);

        const element = document.getElementById(targetId)?.offsetTop;

        window?.scrollTo({
          top: (element || 0) - 50,
          behavior: "smooth",
        });
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [id]);

  return (
    <ScrollContext.Provider value={{ setId }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);

export default ScrollToProvider;

import React, { createContext, useContext } from 'react';

interface MobileContextData {
  mobile: boolean;
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactElement;
}

const MobileContext = createContext<MobileContextData>({} as MobileContextData);

const MobileProvider: React.FC<Props> = ({ children }) => {
  const mobileBreakPoint = 768;

  const [mobile, setMobile] = React.useState<boolean>(
    window.innerWidth < mobileBreakPoint,
  );

  const handleResize = () => {
    setMobile(window.innerWidth < mobileBreakPoint);
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MobileContext.Provider
      value={{
        mobile,
        setMobile,
      }}
    >
      {children}
    </MobileContext.Provider>
  );
};

function useMobile(): MobileContextData {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error('useMobile must be used within an MobileContext');
  }
  return context;
}

export { MobileProvider, useMobile };

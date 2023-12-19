import React, { createContext, useContext } from 'react';

export interface IMessageProps {
  text: string;
  title: string | undefined;
}

export type MessageType = 'warning' | 'error' | 'info' | 'success';

interface GlobalAlertDataProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: IMessageProps;
  setMessage: React.Dispatch<React.SetStateAction<IMessageProps>>;
  messagetype: MessageType;
  setMessagetype: React.Dispatch<React.SetStateAction<MessageType>>;
}

interface Props {
  children: React.ReactElement;
}

const GlobalAlertData = createContext<GlobalAlertDataProps>(
  {} as GlobalAlertDataProps,
);

const GlobalAlertDataProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<IMessageProps>({
    text: '',
    title: '',
  });
  const [messagetype, setMessagetype] = React.useState<MessageType>('info');

  return (
    <GlobalAlertData.Provider
      value={{
        open,
        setOpen,
        message,
        setMessage,
        messagetype,
        setMessagetype,
      }}
    >
      {children}
    </GlobalAlertData.Provider>
  );
};

function useGlobalAlertData(): GlobalAlertDataProps {
  const context = useContext(GlobalAlertData);
  if (!context) {
    throw new Error(
      'useGlobalAlertData must be used within an GlobalAlertData',
    );
  }
  return context;
}

export { GlobalAlertDataProvider, useGlobalAlertData };

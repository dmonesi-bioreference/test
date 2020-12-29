import React, { createContext, FC } from 'react';

type RadioContextProps = {
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
};

export const RadioContext = createContext<Partial<RadioContextProps>>({});

const RadioGroup: FC<RadioContextProps> = ({
  name,
  value,
  onChange,
  children,
}) => {
  return (
    <RadioContext.Provider
      value={{
        name,
        value,
        onChange,
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};

export default RadioGroup;

import { createContext, ReactNode, useState } from "react";

// Define the shape of the context
interface DndContextType {
  toggle: boolean;
  handleToggle: () => void;
  responsiveState: { resize: boolean; size: string };
  handleSize: (obj: { resize: boolean; size: string }) => void;
}

interface Props {
  children: ReactNode;
}

// Create Context with default values
export const DndContext = createContext<DndContextType | undefined>(undefined);

const DndProvider = ({ children }: Props) => {
  const [toggle, setToggle] = useState(true);
  const [responsiveState, setResponsiveState] = useState({ resize: false, size: "95%" });

  const handleSize = (obj: { resize: boolean; size: string }) => {
    setResponsiveState(obj);
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <DndContext.Provider value={{ toggle, handleToggle, responsiveState, handleSize }}>
      {children}
    </DndContext.Provider>
  );
};

export default DndProvider;

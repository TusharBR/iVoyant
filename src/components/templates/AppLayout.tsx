import LeftContainer from '../organisms/LeftContainer';
import MainContainer from '../organisms/MainContainer';

interface ResponsiveStateInterface {
  resize: boolean;
  size: string;
}

interface AppLayoutProps {
  toggle: boolean;
  responsiveState: ResponsiveStateInterface;
  handleSize: ({ resize, size }: ResponsiveStateInterface) => void;
}

const AppLayout =({ toggle, responsiveState, handleSize }:AppLayoutProps) => {
  return (
    <div className="app-layout">
      <LeftContainer toggle={toggle} handleSize={handleSize} />
      <MainContainer responsiveState={responsiveState} />
    </div>
  );
};

export default AppLayout;

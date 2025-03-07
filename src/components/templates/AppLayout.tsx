import LeftContainer from '../organisms/LeftContainer';
import MainContainer from '../organisms/MainContainer';

interface toggleInterface{
  toggle:boolean;
}

const AppLayout = ({toggle}:toggleInterface) => {
  return (
    <div className="app-layout">
      <LeftContainer toggle={toggle}/>
      <MainContainer />
    </div>
  );
};

export default AppLayout;

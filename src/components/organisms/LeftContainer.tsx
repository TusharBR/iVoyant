// import React from 'react';
// import Card from '../molecules/Card';
// import Button from '../atoms/Button';

// const LeftContainer: React.FC = () => {
//   return (
//     <div className="left-container">
//       <Card title="Card 1" content="This is the content of Card 1." id="card-1" />
//       <Card title="Card 2" content="This is the content of Card 2." id="card-2" />
//       <Button onClick={() => alert('Left Container Button clicked!')}>Left Container Button</Button>
//     </div>
//   );
// };

// export default LeftContainer;

import React from 'react';
import Button from '../atoms/Button';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';
import Card from '../molecules/Card';

const LeftContainer: React.FC = () => {
  return (
    <div className="left-container">
      <Header  title="Header Component" id="header-1" />
      <Button id="button-1">Click Me</Button>
      <Footer content="Footer Component" id="footer-1" />
      <Card title="Footer Component" content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, vero.' id="card-1" />
    </div>
  );
};

export default LeftContainer;

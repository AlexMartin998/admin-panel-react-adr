import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import './single.scss';

export const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <div className="top">
          <div className="left">
            <h1 className="title"></h1>
          </div>
          <div className="rigth"></div>
        </div>

        <div className="bottom"></div>
      </div>
    </div>
  );
};

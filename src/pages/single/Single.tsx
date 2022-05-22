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
            <div className="editButtom">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <a
                    href="mailto:recipient@email.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    janedoe@gmail.com
                  </a>
                  {/* <span className="itemValue">janedoe@gmail.com</span> */}
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <a
                    href="mailto:recipient@email.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +593 999 999 9999
                  </a>
                  {/* <span className="itemValue">+593 999 999 9999</span> */}
                </div>
                <div className="detailItem">
                  <address>
                    <span className="itemKey">Address: </span>
                    <span className="itemValue">
                      Elton St. 234 Garden Yd. NewYork
                    </span>
                  </address>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">Right</div>
        </div>

        <div className="bottom"></div>
      </div>
    </div>
  );
};

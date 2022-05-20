import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import './widget.scss';

interface WidgetData {
  title: string;
  isMoney?: boolean;
  linkLabel?: string;
  icon?: JSX.Element;
}

interface WidgetProps {
  type: 'user' | 'widgets' | 'user' | 'order' | 'erarning' | 'balance';
}

const Widget = ({ type }: WidgetProps) => {
  let widgetData: WidgetData;

  switch (type) {
    case 'user':
      widgetData = {
        title: '',
        isMoney: false,
        linkLabel: 'See all users',
        icon: <PersonOutlinedIcon />,
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">121212</span>
        <span className="link">See all users</span>
      </div>

      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
        <PersonOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;

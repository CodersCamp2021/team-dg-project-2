import '../styles/Button.css';

import { useNavigate } from 'react-router-dom';

const Button = ({ pathname, text }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`${pathname}`);

  return (
    <button type="button" onClick={handleClick} className="btn">
      {text}
    </button>
  );
};

export default Button;
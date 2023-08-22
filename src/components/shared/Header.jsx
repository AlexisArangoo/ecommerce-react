import { Link, useNavigate } from "react-router-dom";
import './styles/Header.css'
import { useSelector } from "react-redux";

const Header = ({setOnCart}) => {

  const navigate = useNavigate()
 
  const onLogin = useSelector(reducer => reducer.onLogin)

  const handleOnCart = () => {  
    if (localStorage.getItem('token')) {
      setOnCart(true)
    }else {
      navigate('/login')
    }
   }
  
  return (
    <header className="header">
      <div className="header-container-h1" >
        <Link to="/">
          <h1 className="header-h1">e-commerce</h1>
        </Link>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          {onLogin
          ? (
            <Link to="/profile">
               <li className="header-nav-item">
                  <i className="bx bx-user"></i>
               </li>
            </Link>
          ) 
          : (
            <Link to="/login">
                <li className="header-nav-item">
                  Login
                </li>
            </Link>
          )}
          
          <Link to={onLogin ? '/purchases' : '/login'}>
              <li className="header-nav-item">
                <i className='bx bx-archive'></i>
              </li>
          </Link>

        
          <li className="header-nav-item item-cart" onClick={handleOnCart}>
            <i className='bx bx-cart'></i>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;

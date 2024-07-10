
import Button from "react-bootstrap/Button";
import "./Headerpublic.css";
import { NavLink} from "react-router-dom";

const Headerpublic = () => {
  return (
    <div className="header-public flex-row" >
      <div className="header-int flex-row" >
        <img src="./src/assets/Micarlogo.png" className="img-logo img-fluid" />
      </div>
      <div className="header-int flex-row" >
        <img src="./src/assets/Fontsmicar.png" className="img-txt img-fluid"/>
      </div>
      <div className="header-int flex-row" >
       <NavLink to='/login' className='active'> 
          <Button variant="outline-dark" className="btn-lgn img-fluid" >Login</Button>
        </NavLink>
      </div>
    </div>
  )
}

export default Headerpublic;

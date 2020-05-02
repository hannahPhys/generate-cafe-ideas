import React from "react";
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../sass/Footer.scss';
import About from "../About";

class footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>

        <MDBFooter className="font-small fixed-bottom"
          style={{
            'borderTop': '1px solid ' + this.props.textColor
          }}>
          <MDBContainer fluid className="text-center">
            <MDBRow>
              <MDBCol className="mcbcol-about" >
                <NavLink to="/About" style={{ color: this.props.textColor }}>About</NavLink>
              </MDBCol>
              <MDBCol className="mdbcol-copy" style={{ color: this.props.textColor }}>&copy; {new Date().getFullYear()} Copyright: Hannah Auckram </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBFooter >
      </ HashRouter>
    );
  }
}

export default footer;
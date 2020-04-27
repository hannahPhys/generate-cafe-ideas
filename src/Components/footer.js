import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../sass/Footer.scss';

class footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MDBFooter className="font-small fixed-bottom"
        style={{
          'border-top': '1px solid ' + this.props.textColor
        }}>
        <MDBContainer fluid className="text-center">
          <MDBRow>
            <MDBCol className="mcbcol-about" ><a style={{ color: this.props.textColor }} href="#">About</a></MDBCol>
            <MDBCol className="mdbcol-copy" style={{ color: this.props.textColor }}>&copy; {new Date().getFullYear()} Copyright: Hannah Auckram </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter >
    );
  }
}

export default footer;
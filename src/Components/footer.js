import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../sass/Footer.scss';

const footer = () => {
  return (
    <MDBFooter className="font-small fixed-bottom">
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol className="mcbcol-about"><a href="#">About</a></MDBCol>
          <MDBCol className="mdbcol-copy">          &copy; {new Date().getFullYear()} Copyright: Hannah Auckram
</MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default footer;
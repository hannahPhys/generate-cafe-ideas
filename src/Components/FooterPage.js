import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="white" className="font-small fixed-bottom">
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol className="mcbcol-about"><a>About</a></MDBCol>

        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Hannah Auckram
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
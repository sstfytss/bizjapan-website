import React from "react";

// Import styled components
import Container from "./styled/Container";
import PartnerCards from "./PartnerCards";

import Pulse from "../images/pulse.svg";

const Partners = () => (
  <Container title="Partners">
    <Pulse
      style={{
        height: `3em`,
        display: `block`,
        margin: `2em auto`
      }}
    />
    <PartnerCards />
  </Container>
);

export default Partners;

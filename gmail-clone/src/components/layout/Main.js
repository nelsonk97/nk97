import React from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar.js";
import EmailsView from "./EmailsView.js";
import SideIcons from "./SideIcons.js";

function Main() {
  return (
    <Wrapper>
      <Sidebar />
      <EmailsView />
      <SideIcons />
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 50px;
`;

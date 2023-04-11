import React from "react";

import styled from "styled-components";
import Sidebar from "./SideBar";

const Container = styled.div`
width: 100%;
height: 100%;
`,
	MainPage = styled.div`
  margin-left: 21.5%;
  width: 80%;
  height: 100%;
	`;
export default function Home({children, bg}) {

	return (
		<Container className="flex  ">
   <Sidebar />
   <MainPage className="pl-7 ">{children}</MainPage>
		</Container>
	);
}

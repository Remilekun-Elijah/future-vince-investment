import React from "react";
import { Link } from "react-router-dom";
import propTypes from 'prop-types'
import Avatar from 'react-avatar';
import Storage from "../utils/storage";
import history from "../utils/history";
import styled from "styled-components";


const Heading = styled.h1`
		color: var(--C_blue_light);
	`,
	Container = styled.div`
		background: var(--c_gray);
	`,
	SubHeading = styled.h2`
		color: var(--C_blue_light);
	`,
	UserCentre = styled.div`
		svg {
			color: #030d25;
		}
	`,
	Logo = styled.img`
		width: 40px;
		height: 40px;
	`,
	Wrapper = styled.div``,
	HeaderContainer = styled.div``;


const DashNavbar = () => {
  const logout = () => {
         Storage.remove('token');
         history.push("/");
  };
  return (
    <Container className="relative pt-3 rounded-bl-lg pr-3  h-20 z-50">
			<HeaderContainer className="flex text-left justify-between items-center px-7">
				<div>
					<Heading className="text-2xl font-semibold leading-7">
						{/* {title} */}
					</Heading>
					<SubHeading className="text-sm mt-1 leading-4 font-normal">
						{/* {subtitle} */}
					</SubHeading>
				</div>

				{/* {children} */}

				<UserCentre className="flex justify-center items-center">
        <Link className="text-[var(--C_black_lite)] text-decoration-none text-gray-100 hover:text-gray-200" to="./" onClick={logout}>Log Out</Link>
        <Avatar className="ms-4" googleId="118096717852922241760" size="45" round={true} />
				</UserCentre>
			</HeaderContainer>
		</Container>
  );
};

DashNavbar.propTypes = {
  isSignedUp: propTypes.bool,
  setIsSignedUp: propTypes.func
}
export default DashNavbar;

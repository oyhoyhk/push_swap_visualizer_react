import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <HeaderContainer>
      <div style={{ width: "20%" }} />
      <Title>Push Swap Visualizer</Title>
      <Link
        to={location.pathname === "/" ? "/description" : "/"}
        style={{ width: "20%", textAlign: "right" }}
      >
        {location.pathname === "/" ? "Description" : "Home"}
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px auto;
  width: 580px;
`;
const Title = styled.div`
  font-size: 2.5rem;
  text-align: center;
`;
export default Header;

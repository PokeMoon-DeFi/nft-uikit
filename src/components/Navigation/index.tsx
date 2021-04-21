import { Header } from "components/layout";
import { Logo } from "components/Icons";
import Button from "components/Button";
import styled from "styled-components";

const linkConfig = [
  {
    target: "/buy",
    label: "Buy Packs",
  },
  {
    target: "/gallery",
    label: "Gallery",
  },
];

const StyledLinkContainer = styled.div`
  background: white;
  border-radius: 28px;

  min-height: 40px;
  padding: 20px;
  margin: 10px;
  border: 2px solid #2e0cff;
  text-align: center;
`;

const StyledLink = styled.a`
  color: black;
  font-size: 2em;
  text-decoration: none;
`;

const NavHeader = () => {
  return (
    <Header>
      <Logo style={{ height: "20vh" }} />
      <div style={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
        {linkConfig.map((link) => (
          <StyledLinkContainer>
            <StyledLink href={link.target}>{link.label}</StyledLink>
          </StyledLinkContainer>
        ))}
      </div>
      <div>RIGHT SIDE</div>
    </Header>
  );
};
export default NavHeader;

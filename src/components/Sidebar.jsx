import styled from "styled-components";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(225, 225, 241);
  position: sticky;
  top: 50px; /* required */
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 13px;
  color: rgb(158, 157, 157);
`;

const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

const Item = styled.li`
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  color: #555;
  background-color: ${(props) =>
    props.active === "true" ? "rgb(133, 133, 185)" : ""};
  color: ${(props) => (props.active === "true" ? "white" : "")};

  a:hover {
    color: white;
    transition: all 0.3s ease;
  }
  &:hover {
    background-color: rgb(133, 133, 185);
    color: white;
    transition: all 0.3s ease;
  }
`;

const sLink = {
  textDecoration: "none",
  color: "#555",
};

const sIcon = { marginRight: "5px", fontSize: "20px !important" };

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <Link to="/" style={sLink}>
              <Item>
                <LineStyle style={sIcon} />
                Home
              </Item>
            </Link>
            <Item>
              <Timeline style={sIcon} />
              Analytics
            </Item>
            <Item>
              <TrendingUp style={sIcon} />
              Sales
            </Item>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <Link to="/users" style={sLink}>
              <Item>
                <PermIdentity style={sIcon} />
                Users
              </Item>
            </Link>
            <Item>
              <Storefront style={sIcon} />
              Products
            </Item>
            <Item>
              <AttachMoney style={sIcon} />
              Transactions
            </Item>
            <Item>
              <BarChart style={sIcon} />
              Reports
            </Item>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <Item>
              <MailOutline style={sIcon} />
              Mail
            </Item>
            <Item>
              <DynamicFeed style={sIcon} />
              Feedback
            </Item>
            <Item>
              <ChatBubbleOutline style={sIcon} />
              Messages
            </Item>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <Item>
              <WorkOutline style={sIcon} />
              Manage
            </Item>
            <Item>
              <Report style={sIcon} />
              Reports
            </Item>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

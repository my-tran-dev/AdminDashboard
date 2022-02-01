import styled from "styled-components";
import { Visibility } from "@material-ui/icons";

const Wrapper = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -2px rgba(121, 143, 255, 0.53);
  box-shadow: 0px 0px 15px -2px rgba(121, 143, 255, 0.53);
  padding: 20px;
  margin-right: 20px;
  border-radius: 10px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.span`
  font-weight: 600;
`;

const UserTitle = styled.span`
  font-weight: 300;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  cursor: pointer;
  color: #555;
  background-color: rgb(225, 225, 241);
  &:hover {
    background-color: rgb(133, 133, 185);
    color: white;
    transition: all 0.3s ease;
  }
`;

const sIcon = {
  fontSize: "16px",
  marginRight: "5px"
};

const WidgetSm = () => {
  return (
    <Wrapper>
      <Title>New Join Members</Title>
      <List>
        <Item>
          <Image src="no-avatar.png" />
          <User>
            <Username>John</Username>
            <UserTitle>0000000089</UserTitle>
          </User>
          <Button>
            <Visibility style={sIcon} />
            Display
          </Button>
        </Item>
        <Item>
          <Image src="female1.jpg" />
          <User>
            <Username>Marie</Username>
            <UserTitle>0000003089</UserTitle>
          </User>
          <Button>
            <Visibility style={sIcon} />
            Display
          </Button>
        </Item>
        <Item>
          <Image src="male1.png" />
          <User>
            <Username>Jack</Username>
            <UserTitle>0000000078</UserTitle>
          </User>
          <Button>
            <Visibility style={sIcon} />
            Display
          </Button>
        </Item>
        <Item>
          <Image src="female2.png" />
          <User>
            <Username>Hannah</Username>
            <UserTitle>0000000067</UserTitle>
          </User>
          <Button>
            <Visibility style={sIcon} />
            Display
          </Button>
        </Item>
      </List>
    </Wrapper>
  );
};

export default WidgetSm;

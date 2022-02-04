import styled from "styled-components";
import {
  PermIdentity,
  LocalPhone,
  Email,
  LocationOn,
  Cake,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 5;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1``;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-image: linear-gradient(
    to right,
    #02aab0 0%,
    #00cdac 51%,
    #02aab0 100%
  );

  margin: 10px;
  padding: 10px 35px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  font-weight: 600;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  -webkit-box-shadow: 0px -5px 16px 0px rgba(25, 121, 35, 0.2);
  box-shadow: 0px -5px 16px 0px rgba(25, 121, 35, 0.2);

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -2px rgba(121, 143, 255, 0.53);
  box-shadow: 0px 0px 15px -2px rgba(121, 143, 255, 0.53);
  padding: 20px;
  margin-right: 20px;
  border-radius: 10px;
`;

const ShowTop = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  margin-right: 20px;
`;

const ShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShowUsername = styled.span`
  font-weight: 600;
`;

const ShowTitle = styled.span`
  font-weight: 300;
`;

const ShowBottom = styled.div`
  margin-top: 20px;
`;

const ShowBotTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: rgb(158, 157, 157);
`;

const sIcon = {
  marginRight: "10px",
};

const ShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;

const ShowInfoTitle = styled.span``;

const UserUpdate = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -2px rgba(121, 143, 255, 0.53);
  box-shadow: 0px 0px 15px -2px rgba(121, 143, 255, 0.53);
  padding: 20px;
  margin-right: 20px;
  border-radius: 10px;
`;

const UpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const UpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const UpdateLeft = styled.div``;

const UpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  > label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 600;
  }
`;

const UpdateIcon = {
  cursor: "pointer",
};

const Input = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;

  &:focus-visible {
    outline: none;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

const UpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

const UpdateImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

const User = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Edit user</Title>
        <Link
          to="/newUser"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <Button>Create</Button>
        </Link>
      </TitleContainer>
      <UserContainer>
        <UserShow>
          <ShowTop>
            <Image src="../male1.png" />
            <ShowTopTitle>
              <ShowUsername>Jack</ShowUsername>
              <ShowTitle>Software Dev</ShowTitle>
            </ShowTopTitle>
          </ShowTop>
          <ShowBottom>
            <ShowBotTitle>Account Details</ShowBotTitle>
            <ShowInfo>
              <PermIdentity style={sIcon} />
              <ShowInfoTitle>Jackgudboy</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <Cake style={sIcon} />
              <ShowInfoTitle>25/01/1989</ShowInfoTitle>
            </ShowInfo>
            <ShowBotTitle>Contact Details</ShowBotTitle>
            <ShowInfo>
              <LocalPhone style={sIcon} />
              <ShowInfoTitle>+33 6 12 34 56 78</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <Email style={sIcon} />
              <ShowInfoTitle>jack@gmail.com</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <LocationOn style={sIcon} />
              <ShowInfoTitle>Paris | FR</ShowInfoTitle>
            </ShowInfo>
          </ShowBottom>
        </UserShow>
        <UserUpdate>
          <UpdateTitle>Edit</UpdateTitle>
          <UpdateForm>
            <UpdateLeft>
              <UpdateItem>
                <label>Username</label>
                <Input type="text" placeholder="Jackgudboy"></Input>
              </UpdateItem>
              <UpdateItem>
                <label>Birthday</label>
                <Input type="text" placeholder="25/01/1989"></Input>
              </UpdateItem>
              <UpdateItem>
                <label>Phone</label>
                <Input type="text" placeholder="+33 6 12 34 56 78"></Input>
              </UpdateItem>
              <UpdateItem>
                <label>Email</label>
                <Input type="text" placeholder="jack@gmail.com"></Input>
              </UpdateItem>
              <UpdateItem>
                <label>Address</label>
                <Input type="text" placeholder="Paris | FR"></Input>
              </UpdateItem>
            </UpdateLeft>
            <UpdateRight>
              <UpdateUpload>
                <UpdateImage src="../male1.png" alt="" />
                <label htmlFor="file">
                  <Publish style={UpdateIcon} />
                </label>
                <Input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                ></Input>
              </UpdateUpload>
              <Button>Update</Button>
            </UpdateRight>
          </UpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;

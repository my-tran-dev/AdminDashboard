import { FormControlLabel, Switch } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
    flex: 5;
    padding: 20px;
`;

const NewProductTitle = styled.h1``;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: gray;
`;

const Input = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#2ECA45",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: "grey",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#d8d8da",
      opacity: 1,
      transition: "duration:500",
    },
  }));
  
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
    };
  `;

const NewProduct = () => {
  return (
    <Container>
        <NewProductTitle>
            NewProduct
        </NewProductTitle>
        <Form>
            <Item>
                <Label>Name product</Label>
                <Input type="text" placeholder="" />
            </Item>
            <Item>
                <Label>Description</Label>
                <Input type="text" placeholder="" />
            </Item>
            <Item>
                <Label>Price</Label>
                <Input type="text" placeholder="" />
            </Item>
            <Item>
                <Label>In stock</Label>
                <Input type="text" placeholder="" />
            </Item>
            <Item>
                <Label>Active</Label>
                <FormControlLabel
              style={{ marginLeft: "20px" }}
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            />
            </Item>
        </Form>
        <Button>Create</Button>
    </Container>
  )
}

export default NewProduct
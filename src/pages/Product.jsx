import styled from "styled-components";
import { Euro, Publish, ToggleOn, ShowChart } from "@material-ui/icons";
import { FormControlLabel, Switch } from "@material-ui/core";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import { productData } from "../dummyData";

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

const ProductContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ProductShow = styled.div`
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
  width: 100px;
  height: 100px;
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;
  margin-right: 20px;
`;

const ShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShowProduct = styled.span`
  font-weight: 600;
`;

const Description = styled.span`
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

const ProductUpdate = styled.div`
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

const Product = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Edit product</Title>
        <Link
          to="/newProduct"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <Button>Create</Button>
        </Link>
      </TitleContainer>
      <ProductContainer>
        <ProductShow>
          <ShowTop>
            <Image src="../iphone13pro.jpg" />
            <ShowTopTitle>
              <ShowProduct>Iphone 13 Pro</ShowProduct>
              <Description>
                L'iPhone 13 Pro d'Apple est un smartphone ultra haut de gamme
                doté d'un écran de 6,1 pouces. Doté de la technologie ProMotion,
                il dispose d'un taux de rafraîchissement adaptatif pouvant
                varier entre 10 et 120 Hz. Doté d'un triple module caméra ultra
                sophistiqué avec des équivalents 13 mm, 26 mm et 77 mm, ce
                smartphone utilise la puce A15 Bionic. Il existe en versions 128
                Go, 256 Go, 512 Go ou 1 To de stockage.
              </Description>
            </ShowTopTitle>
          </ShowTop>
          <ShowBottom>
            <ShowBotTitle>Product Details</ShowBotTitle>
            <ShowInfo>
              <Euro style={sIcon} />
              <ShowInfoTitle>1 250.00</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <ToggleOn style={sIcon} />
              <ShowInfoTitle>Active</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <ShowChart style={sIcon} />
              <ShowInfoTitle>50</ShowInfoTitle>
            </ShowInfo>
          </ShowBottom>
        </ProductShow>
        <ProductUpdate>
          <UpdateTitle>Edit</UpdateTitle>
          <UpdateForm>
            <UpdateLeft>
              <UpdateItem>
                <label>Name product</label>
                <Input type="text" placeholder="Iphone 13 Pro" />
              </UpdateItem>
              <UpdateItem>
                <label>Description</label>
                <Input
                  type="text"
                  placeholder="L'iPhone 13 Pro d'Apple est un smartphone..."
                />
              </UpdateItem>
              <UpdateItem>
                <label>Price</label>
                <Input type="text" placeholder="1 250.00€" />
              </UpdateItem>
              <UpdateItem>
                <label>Active</label>
                <FormControlLabel
                  style={{ marginLeft: "2px" }}
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                />
              </UpdateItem>
              <UpdateItem>
                <label>Stock</label>
                <Input type="text" placeholder="50" />
              </UpdateItem>
            </UpdateLeft>
            <UpdateRight>
              <UpdateUpload>
                <UpdateImage src="../iphone13pro.jpg" alt="" />
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
        </ProductUpdate>
      </ProductContainer>

      <Chart
        data={productData}
        title="Product Analytics"
        dataKey="Sales"
        grid
      />
    </Container>
  );
};

export default Product;

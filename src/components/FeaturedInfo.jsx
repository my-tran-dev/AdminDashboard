import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const Featured = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Item = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -2px rgba(121, 143, 255, 0.53);
  box-shadow: 0px 0px 15px -2px rgba(121, 143, 255, 0.53);
`;

const Title = styled.span`
  font-size: 20px;
`;

const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

const Money = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const MoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const sIconPos = {
  fontSize: "14px",
  marginLeft: "5px",
  color: "green",
};

const sIconNeg = {
    fontSize: "14px",
    marginLeft: "5px",
    color: "red",
};

const FeaturedSub = styled.span`
font-size: 15px;
color: gray;
`;

const FeaturedInfo = () => {
  return (
    <Featured>
      <Item>
        <Title>Revenue</Title>
        <MoneyContainer>
          <Money>2,415 €</Money>

          <MoneyRate>
            -11,4
            <ArrowDownward style={sIconNeg} />
          </MoneyRate>
        </MoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </Item>

      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>4,415 €</Money>

          <MoneyRate>
            -1,4
            <ArrowDownward style={sIconNeg} />
          </MoneyRate>
        </MoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </Item>

      <Item>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money>2,245 €</Money>

          <MoneyRate>
            +3,4
            <ArrowUpward style={sIconPos} />
          </MoneyRate>
        </MoneyContainer>
        <FeaturedSub>Compared to last month</FeaturedSub>
      </Item>
    </Featured>
  );
};

export default FeaturedInfo;

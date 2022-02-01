import styled from "styled-components";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import { userData } from "../dummyData";

const Container = styled.div`
  flex: 5;
`;

const Wrapper = styled.div``;

const Widgets = styled.div`
  display: flex;
  margin: 20px;
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
      <Widgets>
          <WidgetSm />
          <WidgetLg />
      </Widgets>
    </Container>
  );
};

export default Home;

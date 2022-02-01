import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -2px rgba(121, 143, 255, 0.53);
  box-shadow: 0px 0px 15px -2px rgba(121, 143, 255, 0.53);
`;

const Title = styled.h3``;

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
            { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default Chart;

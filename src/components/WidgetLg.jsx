import styled from "styled-components";

const Wrapper = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -2px rgba(121, 143, 255, 0.53);
  box-shadow: 0px 0px 15px -2px rgba(121, 143, 255, 0.53);
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

const Tr = styled.tr`
  cursor: pointer;

  
`;

const Th = styled.th`
  text-align: left;
`;

const Td = styled.td``;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const User = {
  display: "flex",
  alignItems: "center",
  fontWeight: "600",
};

const normal = {
  fontWeight: "300",
};

const Button = styled.button`
  width: 70px;
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease;
    transform: scale(1.1);
  }
`;

const approved = {
  backgroundColor: "#e5faf2",
  color: "#3bb077",
};

const declined = {
  backgroundColor: "#fff0f1",
  color: "#d95087",
};

const pending = {
  backgroundColor: "#ebf1fe",
  color: "#2a7ade",
};

const WidgetLg = () => {
  return (
    <Wrapper>
      <Title>Lastest transactions</Title>
      <Table>
        <Tr>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
        </Tr>
        <Tr>
          <Td style={User}>
            <Image src="female1.jpg" />
            Marie
          </Td>
          <Td style={normal}>21 Jul 2021</Td>
          <Td style={normal}>23.98€</Td>
          <Td>
            <Button style={approved}>Approved</Button>
          </Td>
        </Tr>
        <Tr>
          <Td style={User}>
            <Image src="female2.png" />
            Hannah
          </Td>
          <Td style={normal}>15 Dec 2021</Td>
          <Td style={normal}>19.99€</Td>
          <Td>
            <Button style={declined}>Declined</Button>
          </Td>
        </Tr>
        <Tr>
          <Td style={User}>
            <Image src="male1.png" />
            Jack
          </Td>
          <Td style={normal}>01 Jan 2022</Td>
          <Td style={normal}>50.00€</Td>
          <Td>
            <Button style={pending}>Pending</Button>
          </Td>
        </Tr>
        <Tr>
          <Td style={User}>
            <Image src="female1.jpg" />
            Marie
          </Td>
          <Td style={normal}>24 Nov 2021</Td>
          <Td style={normal}>41.30€</Td>
          <Td>
            <Button style={approved}>Approved</Button>
          </Td>
        </Tr>
      </Table>
    </Wrapper>
  );
};

export default WidgetLg;

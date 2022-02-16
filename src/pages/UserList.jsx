import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { DeleteOutline, EditOutlined, Add, Search } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  flex: 5;
  position: relative;
`;

const TopContainer = styled.div`
  height: 60px;
  margin: 0px 60px;
`;

const AddNewUser = styled.div`
  position: absolute;
  right: 0;
  top: 10px;
  z-index: 999;
  margin-right: inherit; 
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-image: linear-gradient(
    to right,
    #02aab0 0%,
    #00cdac 51%,
    #02aab0 100%
  );
  width: 40px;
  height: 40px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  font-weight: 600;
  box-shadow: 0 0 20px #eee;
  border-radius: 50%;
  display: block;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

const sUser = {
  display: "flex",
  alignItems: "center",
};

const sImg = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  objectFit: "cover",
  marginRight: "10px",
};

const sLink = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
};

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-cell, .MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within,.MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within, *:focus":
    {
      outline: 0,
    },
}));

const useStyles = makeStyles((theme) => ({
  sPos: {
    "&:hover": {
      backgroundColor: "#e5faf2",
      color: "#3bb077",
      transition: "all 0.3s ease",
      transform: "scale(1.1)",
    },
  },
  sNeg: {
    "&:hover": {
      backgroundColor: "#fff0f1",
      color: "#d95087",
      transition: "all 0.3s ease",
      transform: "scale(1.1)",
    },
  },
}));

const UserList = () => {
  const classes = useStyles();
  //const dispatch = useDispatch();
  const [data, setData] = useState(userRows);
  const [searchValue, setSearchValue] = useState("");
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleSearchSubmit = () => {
    //use dispatch to call action
    console.log(searchValue);
    if (!searchValue.length) {
      setData(userRows);
    }
    const newData = userRows.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    setData(newData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "user",
      headerName: "User",
      width: 300,
      renderCell: (params) => {
        return (
          <div style={sUser}>
            <img style={sImg} src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <IconButton className={classes.sPos}>
              <Link to={"/user/" + params.row.id} style={sLink}>
                <EditOutlined />
              </Link>
            </IconButton>
            <IconButton className={classes.sNeg}>
              <DeleteOutline onClick={() => handleDelete(params.row.id)} />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <TopContainer>
          <FormControl variant="standard">
            <InputLabel htmlFor="search">Search box</InputLabel>
            <Input
              id="search"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="search"
                    onClick={handleSearchSubmit} //create method handle submit data
                  >
                    {<Search />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <AddNewUser>
            <Link
              to="/newUser"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Button>
                <Add style={{ paddingTop: "5px" }} />
              </Button>
            </Link>
          </AddNewUser>
      </TopContainer>

      <div style={{ height: "calc(100% - 60px)" }}>
        <StyledDataGrid
          rows={data}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Container>
  );
};

export default UserList;

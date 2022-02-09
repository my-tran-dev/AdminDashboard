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
import { Link } from "react-router-dom";
import { productRows } from "../dummyData";
import { useState } from "react";

const Container = styled.div`
  flex: 5;
  position: relative;
`;

const TopContainer = styled.div`
  height: 60px;
  margin: 0px 60px;
`;

const SearchBox = styled.div``;

const AddContainer = styled.div``;

const AddNewProduct = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: 999;
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

const sProduct = {
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

const ProductList = () => {
  const classes = useStyles();
  const [data, setData] = useState(productRows);
  const [searchValue, setSearchValue] = useState("");
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleSearchSubmit = () => {
    //use dispatch to call action
    console.log(searchValue);
    if (!searchValue.length) {
      setData(productRows);
    }
    const newData = productRows.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    setData(newData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div style={sProduct}>
            <img style={sImg} src={params.row.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 450,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <IconButton className={classes.sPos}>
              <Link to={"/product/" + params.row.id} style={sLink}>
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
        <SearchBox>
          {/* <Search />
          <SearchInput /> */}
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
        </SearchBox>
        <AddContainer>
          <AddNewProduct>
            <Link
              to="/newProduct"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Button>
                <Add style={{ paddingTop: "5px" }} />
              </Button>
            </Link>
          </AddNewProduct>
        </AddContainer>
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

export default ProductList;

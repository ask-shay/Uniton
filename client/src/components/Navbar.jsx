import { Badge } from "@material-ui/core";
import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from "@material-ui/icons";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import React from "react"; 
// import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

const SearchContainer = styled.div`
  border: 1px solid #f4f0f0;
  display: flex;
  align-items: center;
  margin-left: 25px;
  width: 90%;
`;

const Input = styled.input`
  border: none;
  padding: 9px;
  width: 100%;
  margin-right: 10px;
  ${mobile({ width: "50px" })}
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/api/products/search?query=${searchQuery}`);
  //     const data = await response.json();
  //     setSearchResults(data);
  //   } catch (error) {
  //     console.error('Error fetching search results:', error);
  //   }
  // };

  return (
    <Container>
      <Wrapper>
      <Left>
          <StyledLink to="http://localhost:3000">
            <Logo>UNITON INDIA.</Logo>
          </StyledLink>
        </Left>
        <Center>
          <SearchContainer>
            <Input
              placeholder="Search"
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              style={{ color: "#555", fontSize: 20, marginRight: 10, cursor: 'pointer' }}
              // onClick={handleSearch}
            />
          </SearchContainer>
        </Center>
        <Right>
          <StyledLink to="/register">
            <MenuItem>REGISTER</MenuItem>
          </StyledLink>
          <StyledLink to="/login">
            <MenuItem>LOGIN</MenuItem>
          </StyledLink>
          <StyledLink to="/setting">
            <MenuItem>
            <Person2OutlinedIcon/> 
            {/* provide a drop down menu for logout / your orders / support  */}
            </MenuItem>
          </StyledLink>
          <StyledLink to="/favourites">
            <MenuItem>
            <FavoriteBorderOutlined/> 
         
            </MenuItem>
          </StyledLink>

          <StyledLink to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import AvatarUser from '/products/avatar.png'

const Header = styled(AppBar)`
  background-color: white !important;
  color: black;
  border:none;
  padding: 0 16px;
  margin-bottom:5px;
  box-shadow:none !important;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;



export default function HeaderBar() {
  return (
    <Header position="static" >
      <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
        <IconButton edge="start" aria-label="menu" onClick={() => window.alert('Menu options not implemented.')}>
          <MenuIcon />
        </IconButton>
        <UserInfo>
          <Avatar alt="User" src={AvatarUser} onClick={() => window.alert('User info not implemented.')} />
        </UserInfo>
      </Toolbar>
    </Header>
  );
}
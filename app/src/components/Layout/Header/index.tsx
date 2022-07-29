import { Box, Typography } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  return (
    <Box component='header' m={1}>
      <Typography component='h1' variant='h3'>Entre | Sagas</Typography>
    </Box>
  );
}

export default Header

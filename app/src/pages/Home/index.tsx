import React from "react";
import { Box, Grid } from "@mui/material";
import ContentTrendingsArea from "./trandings/ContentTrendingsArea";
//import themeDefault from "../../themes/default";

const Home: React.FC = () => {

  // function handlerSearch() {
  //   getContent("all", "day");
  // }

  return (
    <Grid sx={{
    }}>
      <Box component='main'>
        <ContentTrendingsArea
          key="movies"
          title="Filmes em Alta"
          content="movie"
          period="day"
        />
        <ContentTrendingsArea
          key="series"
          title="Series em Alta"
          content="tv"
          period="day"
        />
      </Box>
    </Grid>
  );
};

export default Home;
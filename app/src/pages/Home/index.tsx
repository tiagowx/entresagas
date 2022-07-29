import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import ContentsArea from "./ContentsArea";
import MuitiSearch from "../../components/Layout/MultiSearch";
import getContentService from "../../services/trendingsService";
import { IContent } from "../../interfaces/IContent";
//import themeDefault from "../../themes/default";

const Home: React.FC = () => {

  const [movies, setMovies] = useState<IContent[] | undefined>(undefined);
  const [series, setSeries] = useState<IContent[] | undefined>(undefined);

  useEffect(() => {
    const updateMovies = async () => {
      const json = await getContentService('movie', 'day');
      setMovies(json);
    };
    const updateSeries = async () => {
      const json = await getContentService('tv', 'day');
      setSeries(json);
    };

    updateSeries();
    updateMovies();
  }, [movies]);

  return (
    <Grid sx={{}}>
      <MuitiSearch />
      <Box component='main'>
        <ContentsArea
          key="1"
          title="Filmes em Alta"
          contents={movies}
        />
      </Box>
      <Box component='main'>
        <ContentsArea
          key="2"
          title="Series em Alta"
          contents={series}
        />
      </Box>
    </Grid>
  );
};

export default Home;
import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import { IMovie } from "../../interfaces/IMovie";
import getContent from "../../services/trendings";

const Home: React.FC = () => {


  const [contents, setContents] = useState<IMovie[] | undefined>(undefined);


  function handlerSearch() {

    getContent("all", "day");
  }

  useEffect(() => {
    const updateContent = async () => {
      const json = await getContent("all", "day");
      setContents(json);
    };

    updateContent();
  }, [])


  return (
    <Grid>
      <Box component='aside'>
        <Button onClick={handlerSearch}>Buscar</Button>
      </Box>
      <Box component='section'>
        {contents !== undefined && contents.map((item) => (
          <MovieCard
            key={'cm' + item.id}
            adult={item.adult}
            backdrop_path={item.backdrop_path}
            genre_ids={item.genre_ids}
            id={item.id}
            original_language={item.original_language}
            original_title={item.original_title}
            overview={item.overview}
            popularity={item.popularity}
            poster_path={item.poster_path}
            release_date={item.release_date}
            title={item.title}
            video={item.video}
            vote_average={item.vote_average}
            vote_count={item.vote_count}

          />
        ))}
      </Box>
    </Grid>
  )
};

export default Home;
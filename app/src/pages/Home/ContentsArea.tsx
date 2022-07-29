import { Box, Grid, Typography } from "@mui/material";
import MovieCard from "../../components/MovieCard";
import { IContentTrendingsArea } from "../../interfaces/IContentTrendingsArea";

const ContentsArea: React.FC<IContentTrendingsArea> = (content: IContentTrendingsArea) => {

  return (
    <Box key={content.key}>
      <Typography component='h2' variant='h4' m={2} textAlign='end'>
        {content.title}
      </Typography>
      <Grid 
        sx={{
          display: 'flex',
          position:'relative',
          overflowY: 'hidden',
          overflowX: 'scroll',
          p:1
        }}>
        {content.contents && content.contents.map(item => (
          <Grid >
            <MovieCard
              key={content.key}
              content={item}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ContentsArea;
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from "../../../components/MovieCard";

const Movies: React.FC = () => {

  return (
    <Box component='section'>
      <Typography component='h2' variant='h3'>
        Filmes em alta
      </Typography>
      <Box>
        <Card />
      </Box>
    </Box>
  );
}
export default Movies;
import React from 'react';
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { IMovie } from "../../interfaces/IMovie";

const MovieCard: React.FC<IMovie> = (item: IMovie) => {

  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardHeader title={item.title} />
      <CardMedia component='img'
        alt={item.title}
        image={item.poster_path}
      />
      <CardContent title={item.title} />
    </Card>
  )
}

export default MovieCard;
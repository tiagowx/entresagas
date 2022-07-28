import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardHeader, CardMedia, Typography } from "@mui/material";
import { IContent } from "../../interfaces/IContent";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import configs from '../../configs'

interface ContentProps {
  content: IContent
}



const MovieCard: React.FC<ContentProps> = (props: ContentProps) => {

  return (
    <Card key={props.content.id} sx={{
      display: 'flex',
      mx: 1,
      flexDirection: 'column',
      width: '240px',
      height: '100%',
      justifyContent: 'space-evenly',
    }}>
      <CardMedia component='img'
        alt={props.content.title}
        image={`${configs.api_img_url}${props.content.backdrop_path}`}
      />
      <CardHeader title={props.content.title || props.content.name} sx={{ justifySelf: 'flex-start' }} />

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography component='h6' variant='h6'>Ver Mais</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="h6" variant='h6'>Sinopse:</Typography>
          <Typography component='p'>
            {props.content.overview}
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Card >
  )
}

export default MovieCard;
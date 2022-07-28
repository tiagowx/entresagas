import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MovieCard from "../../../components/MovieCard";
import { IContent } from "../../../interfaces/IContent";
import { IContentTrendingsArea } from "../../../interfaces/IContentTrendingsArea";
import getContent from "../../../services/trendings";

const ContentTrendingsArea: React.FC<IContentTrendingsArea> = (content: IContentTrendingsArea) => {
  const [contents, setContents] = useState<IContent[] | undefined>(undefined);

  useEffect(() => {
    const updateContent = async () => {
      const json = await getContent(content.content, content.period);
      setContents(json);
    };

    updateContent();
  }, [content]);

  return (
    <Box key={content.content}>
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
        {contents && contents.map(item => (
          <Grid >
            <MovieCard
              key={`${content.content}${item.id}`}
              content={item}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ContentTrendingsArea;
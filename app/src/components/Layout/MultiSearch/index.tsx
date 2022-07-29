import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import searchService from "../../../services/searchService";
import { IContent } from "../../../interfaces/IContent";
import ContentsArea from "../../../pages/Home/ContentsArea";
import themeDefault from "../../../themes/default";

const MuitiSearch: React.FC = () => {

  const [resultSearch, setResultSearch] = useState<IContent[] | undefined>(undefined);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length === 0) {
      setResultSearch(undefined);
      return;
    }
    const sendSearch = async () => {
      const json = await searchService(search);
      setResultSearch(json);
    };
    setTimeout(() =>
      sendSearch()
      , 3000);
  }, [search])

  return (
    <Box
    >
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'end',
          bgcolor: themeDefault.palette.background.default,
          color: themeDefault.palette.text.secondary
        }}
      >

        <TextField
          value={search}
          label='Buscar'
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </Box>
      {resultSearch && search.length > 0 &&
        <ContentsArea key='search' title="Resultado da busca" contents={resultSearch} />
      }
    </Box>
  );
}

export default MuitiSearch;
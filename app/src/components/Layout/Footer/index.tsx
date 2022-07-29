import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import themeDefault from "../../../themes/default";

const Footer: React.FC = () => {
  return (
    <Box component='footer' sx={{
      maxWidth: 'full',
      mt: 2,
      p: 2,
      bgcolor: themeDefault.palette.background.default,
      color: themeDefault.palette.text.primary
    }} >
      <Typography component='p' textAlign='center'>
        &copy; Todos direitos reservados. | Entre Sagas 2022
      </Typography>
    </Box>
  )
}
export default Footer;
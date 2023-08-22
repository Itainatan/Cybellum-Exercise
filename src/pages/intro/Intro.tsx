import { Card, CardContent, Typography } from '@mui/material';
import logo from 'assets/images/cybellum-logo-vertical-black.svg';
import Styled from './intro.styled';
import useIntro from './hooks';

export default function Intro() {
  const { selectedNotification } = useIntro()

  return (
    <Styled.Box>
      <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
        <CardContent>
          <Styled.CardMedia component="img" alt="Cybellum" image={logo} />
          <Typography gutterBottom variant="h5" component="div" sx={{ mt: 4 }}>
            {selectedNotification?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {selectedNotification?.description}
          </Typography>
        </CardContent>
      </Card>
    </Styled.Box>
  );
}

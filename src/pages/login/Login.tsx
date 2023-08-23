import { Button, CardMedia, InputAdornment, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac-dig-twins.png';
import { bottomLinks } from './constants';
import { useLogin } from './hooks';
import { Error } from '@mui/icons-material';
import { IconButton } from './login.styled'

export default function Login() {
  const { register, onSubmit, errors, } = useLogin()

  // I build a mui theme for cybellum 
  // I used variants and colors for the typography, and a style for buttons an text fields
  // For Box i used the props insted of create a styled component
  // i tried to make the ui responsive as much as can by the figma

  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" flexDirection="column" flex="0.7" sx={{ p: '8%', pb: '1%' }} justifyContent="space-between">
        <Box>
          <CardMedia component="img" alt="Cybellum" image={cybellumSign} sx={{ width: 151, height: 55 }} />
          <Typography variant="h1" color="primary.main" sx={{ mt: 4, mb: 4.5 }}>
            Welcome to the <br />
            Product Security Platform
          </Typography>
          <Box sx={{ width: '65%' }}>
            <form onSubmit={onSubmit}>
              <TextField
                label="Username"
                error={!!errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        {!!errors.password?.message && <Error />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                {...register("email", {
                  required: true
                })} />
              <TextField
                type='password'
                label="Password"
                sx={{ mt: 3.5, mb: 0.5 }}
                error={!!errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        {!!errors.password?.message && <Error />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                {...register("password", {
                  required: true,
                })} />
              <Typography variant="body3" color="error.light">{errors.password?.message}</Typography>
              <Button>
                <Typography variant='subtitle3' color='primary.light'>
                  Forgot your password?
                </Typography>
              </Button>
              <Button variant="contained" fullWidth sx={{ mt: 4, mb: 4, clear: 'both' }} type="submit">
                <Typography variant='subtitle2' color='secondary.light'>
                  Log in
                </Typography>
              </Button>
            </form>
          </Box>
        </Box>

        <Box>
          {Object.keys(bottomLinks).map((link) => (
            <Button key={link}>
              <Typography variant='subtitle2' color='primary.light'>
                {link}
              </Typography>
            </Button>
          ))}
        </Box>

      </Box>
      <Box flex="1" sx={{ pr: "3%" }}>
        <CardMedia component="img" alt="Digital Twins" image={monitor} sx={{ mt: 4 }} />
      </Box>
    </Box>
  );
}

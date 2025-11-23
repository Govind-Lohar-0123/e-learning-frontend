import { Box } from '@mui/material';

export default function Background({ img }) {
  return (
    <Box className="mx-auto w-75 h-75 mt-2">
      <img
        src={`${process.env.PUBLIC_URL}/img/${img}.png`}
        className="w-100 h-100 d-block"
        alt=""
      />
    </Box>
  );
}

import { Skeleton } from "@mui/material";
import { Stack } from "@mui/material";

export const Loading = () => {
  return (
    <Stack spacing={2}>
      <Skeleton variant="rectangular" width={235} height={152} sx={{bgcolor: '#666'}} />
      <Skeleton variant="text" sx={{ fontSize: "1rem", width: '150px', bgcolor: '#666' }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem", bgcolor: '#666' }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem", bgcolor: '#666' }} />
    </Stack>
  );
};

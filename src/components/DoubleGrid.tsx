import "react";
import { Grid2 } from "@mui/material";

interface DoubleGridProps {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
}

export default function DoubleGrid({
  firstContent,
  secondContent,
}: DoubleGridProps) {
  return (
    <Grid2
      container
      direction={{ md: "row", xs: "column" }}
      spacing={2}
      size={12}
      sx={{ pt: 2 }}
    >
      <Grid2 size={{ xs: 12, md: 6 }}>{firstContent}</Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>{secondContent}</Grid2>
    </Grid2>
  );
}

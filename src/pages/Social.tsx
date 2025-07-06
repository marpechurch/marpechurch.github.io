import "react";
import { Instagram, Page } from "../components";
import { Paper } from "@mui/material";
import { MARPE_INSTAGRAM } from "../utils/constants";

export default function Social() {
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <Instagram url={MARPE_INSTAGRAM} />
    </Paper>
  );

  return <Page content={content} />;
}

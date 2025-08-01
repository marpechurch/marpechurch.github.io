import "react";

import { Page, YouTube } from "../components";
import { Paper } from "@mui/material";
import { SERMONS_PLAYLIST } from "../utils/constants";

export default function Sermons() {
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <YouTube src={SERMONS_PLAYLIST} title="설교 영상" />
    </Paper>
  );

  return <Page content={content} />;
}

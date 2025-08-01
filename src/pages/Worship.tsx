import "react";
import { Paper } from "@mui/material";

import { Page, YouTube } from "../components";
import { WORSHIP_PLAYLIST } from "../utils/constants";

export default function Worship() {
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <YouTube src={WORSHIP_PLAYLIST} title="마르페 주일 찬양 플레이리스트" />
    </Paper>
  );

  return <Page content={content} />;
}

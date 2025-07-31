import "react";

import { Page, YouTube } from "../components";
import { Paper } from "@mui/material";
import { WORSHIP_PLAYLIST } from "../utils/constants";

export default function Worship() {
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <YouTube src={WORSHIP_PLAYLIST} title="마르페 주일 찬양 플레이리스트" />
    </Paper>
  );

  return <Page title="찬양" content={content} />;
}

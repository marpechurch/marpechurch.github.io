import "react";
import { Link, List, ListItem, Typography } from "@mui/material";

import zelleImg from "../assets/zelle.webp";
import { Page } from "../components";
import { ZELLE } from "../utils/constants";

export default function Offering() {
  const content = (
    <List>
      <ListItem sx={{ pb: 0 }}>온라인 헌금:</ListItem>
      <ListItem sx={{ pt: 0 }}>
        <List>
          <ListItem>
            <Typography>
              <Link href={ZELLE} target="_blank" rel="noopener noreferrer">
                Zelle QR 코드
              </Link>
              &nbsp;(marpechurch&#8203;@gmail.com)
            </Typography>
          </ListItem>
        </List>
      </ListItem>
      <ListItem sx={{ pb: 0 }}>수표 헌금:</ListItem>
      <ListItem sx={{ pt: 0 }}>
        <List>
          <ListItem>Pay to: Marpe church</ListItem>
          <ListItem>Address: 9 Archer Dr. Woburn, MA 01801</ListItem>
        </List>
      </ListItem>
    </List>
  );

  return <Page content={content} imageLink={ZELLE} imageSrc={zelleImg} />;
}

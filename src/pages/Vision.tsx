import "react";
import { List, ListItem, Paper } from "@mui/material";

import { Page } from "../components";

export default function Vision() {
  const content = (
    <Paper elevation={1} sx={{ p: { xs: 1.5, md: 3 } }}>
      <List>
        <ListItem sx={{ fontSize: "h6.fontSize", pb: 0 }}>1. 선교: </ListItem>
        <ListItem sx={{ pt: 0 }}>
          <List>
            <ListItem>
              보스턴은 최고의 전략적 선교지입니다. 매년 전세계에서 복음을 모르는
              유학생들이 들어오고 있고, 유명 대학들이 즐비합니다. 캠퍼스 선교는
              보스턴의 선교적 필요입니다. 이 필요를 이해하고 그에 맞는 선교를
              교회가 제시하고 주도해야 합니다. 넘쳐나는 유학생들에게 복음을
              전하고, 그들을 다시 온 열방에 선교사로 파송하는 비전을 품고
              있습니다.
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ fontSize: "h6.fontSize", pb: 0 }}>2. 청년:</ListItem>
        <ListItem sx={{ pt: 0 }}>
          <List>
            <ListItem>
              청년들이 교회에서 사라지고 있는 이 위기의 시대 가운데 교회는
              청년들을 그리스도의 제자로 훈련하고, 그들을 교회의 주역으로
              세워주어야 합니다. 청년들이 교회운영에 직접 참여하고 건강한 교회를
              세워가는 새로운 시도를 하면서, 청년들은 성장하고 교회는 역동적으로
              변화됩니다. 마르페 교회는 청년들을 그리스도의 제자로 훈련하고
              성장시키는 교회입니다.
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ fontSize: "h6.fontSize", pb: 0 }}>
          3. 교회학교 & 가정:
        </ListItem>
        <ListItem sx={{ pt: 0 }}>
          <List>
            <ListItem>
              교회학교는 다음세대를 세우는 사역입니다. 가정과 교회가 함께
              협력하여 자녀들을 신앙으로 양육하고, 부모와 교사가 함께 자녀들을
              위해 기도하며, 신앙의 본을 보이는 것이 중요합니다. 마르페 교회는
              가정과 교회가 협력하여 다음세대를 세우는 교회입니다.
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ fontSize: "h6.fontSize", pb: 0 }}>4. 예배:</ListItem>
        <ListItem sx={{ pt: 0 }}>
          <List>
            <ListItem>
              형식에 얽매이고, 틀에 갇힌 예배가 아니라 성령안에 자유함이 있는
              예배, 성령의 임재를 경험할 수 있는 깊이 있는 예배, 그리고 궁극적으로
              삶의 예배로 이어질 수 있는 예배를 추구합니다. 무엇보다 마르페 교회는
              직장과 캠퍼스안에 예배를 세우기 위해 비전을 제시합니다. 성도들이
              스스로 직장안에서 예배모임을 만들고, 캠퍼스에서 예배모임을 만들어,
              온 땅가운데 하나님의 이름이 높아지도록 예배를 세워가기를 원합니다.
              나아가 이 시대의 가장 큰 선교지인 미디어 세상가운데 예배를 세워
              잃어버린 영혼들이, 방황하는 영혼들이 하나님을 예배할 수 있기를
              소망합니다.
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Paper>
  );

  return <Page content={content} />;
}

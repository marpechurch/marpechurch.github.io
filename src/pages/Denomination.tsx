import "react";
import { Typography } from "@mui/material";

import { DoubleGrid, Page, YouTube } from "../components";
import {
  CMA_IMAGE,
  DENOMINATION_ENGLISH,
  DENOMINATION_KOREAN,
} from "../utils/constants";

export default function Denomination() {
  const content = (
    <Typography>
      C&MA는 The Christian And Missionary Alliance의 약자이며 세계의 복음화를
      위해 전 세계 90개 국가의 2만 5천여 교회, 1천200명의 선교사와 7백만의
      신실한 신자들이 함께 동역하고 있습니다. The Christian And Missionary
      Alliance (C&MA)는 1887년에 심슨(A. B. Simpson) 목사님을 중심으로 뉴욕시의
      맨하탄에서 7명이 예배 드리는 것으로 시작되었습니다. 거기서부터 복음이
      아프리카로, 중국으로, 그리고 전 세계로 전파되기 시작했습니다. C&MA 교단은
      다른 교단들이 한국에 선교사를 보낼 때 이미 많은 교단들이 들어가서
      선교사역을 하고 있는 한국에 선교사를 파송하지 않았으며, 대신 일본에는
      신학교 및 선교사를 파송했었고 일본에 ‘동양선교회’라는 신학교를 세웠습니다.
      그곳에서 신학을 공부했던 한국인 목사님이 한국으로 돌아가 세운 교단이
      성결교단입니다. 한국의 성결 교단의 모체가 바로 C&MA 교단입니다. 한국에
      많이 알려진 A.W. 토저 목사님과 빌리 그래함 목사님도 C&MA 교단 출신
      목사님이셨습니다. C&MA 교단은 현재도 전세계 복음화를 위해 최선을 다하고
      있는 대표적 복음주의 교단입니다.
    </Typography>
  );

  const secondaryContent = (
    <DoubleGrid
      firstContent={
        <YouTube
          src={DENOMINATION_KOREAN}
          title="C&MA 교단 소개 (한국어)"
        />
      }
      secondContent={
        <YouTube src={DENOMINATION_ENGLISH} title="C&MA 교단 소개 (영어)" />
      }
    />
  );

  return (
    <Page
      content={content}
      secondaryContent={secondaryContent}
      imageSrc={CMA_IMAGE}
      title="교단 소개"
    />
  );
}

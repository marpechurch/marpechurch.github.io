import {
  AutoAwesome as VisionIcon,
  ChildCare as KidsIcon,
  Church as ChurchIcon,
  LocationCity as DenominationIcon,
  Man4 as PastorIcon,
  Map as DirectionsIcon,
  MusicNote as WorshipIcon,
  HistoryEdu as RegisterIcon,
  Instagram as SocialIcon,
  VolunteerActivism as OfferingIcon,
  YouTube as SermonsIcon,
} from "@mui/icons-material";
import { Box } from "@mui/material";

import marpeLogo from "../assets/marpe-logo-bw.webp";

import {
  Church,
  Denomination,
  Directions,
  Home,
  Kids,
  Offering,
  Pastor,
  Register,
  Sermons,
  Social,
  Vision,
  Worship,
} from "../pages/index.tsx";

export const urls = [
  "/",
  "/church",
  "/pastor",
  "/denomination",
  "/vision",
  "/kids",
  "/directions",
  "/sermons",
  "/social",
  "/worship",
  "/offering",
  "/register",
];

export function urlToComponent(url: string) {
  const urlComponentMap = {
    "/": <Home />,
    "/church": <Church />,
    "/pastor": <Pastor />,
    "/denomination": <Denomination />,
    "/vision": <Vision />,
    "/kids": <Kids />,
    "/directions": <Directions />,
    "/sermons": <Sermons />,
    "/social": <Social />,
    "/worship": <Worship />,
    "/offering": <Offering />,
    "/register": <Register />,
  };

  const component = urlComponentMap[url as keyof typeof urlComponentMap];

  return component;
}

export function urlToIcon(url: string) {
  const urlIconMap = {
    "/": (
      <Box
        component="img"
        alt="Marpe Logo"
        src={marpeLogo}
        sx={{ height: "48px", width: "auto" }}
      />
    ),
    "/church": <ChurchIcon />,
    "/pastor": <PastorIcon />,
    "/denomination": <DenominationIcon />,
    "/vision": <VisionIcon />,
    "/kids": <KidsIcon />,
    "/directions": <DirectionsIcon />,
    "/sermons": <SermonsIcon />,
    "/social": <SocialIcon />,
    "/worship": <WorshipIcon />,
    "/offering": <OfferingIcon />,
    "/register": <RegisterIcon />,
  };
  const icon = urlIconMap[url as keyof typeof urlIconMap];
  return icon;
}

export function urlToTitle(url: string): string {
  const urlTitleMap = {
    "/": "마르페 교회로 환영합니다!",
    "/church": "교회 소개",
    "/pastor": "목사님 소개",
    "/denomination": "소속 교단",
    "/vision": "비전",
    "/kids": "마르페 키즈",
    "/directions": "오시는 길",
    "/sermons": "설교 말씀",
    "/social": "인스타그램",
    "/worship": "찬양",
    "/offering": "헌금",
    "/register": "교인 등록",
  };

  const title = urlTitleMap[url as keyof typeof urlTitleMap];

  return title;
}

import {
  Church,
  Denomination,
  Directions,
  Home,
  Kids,
  Offering,
  Staff,
  Program,
  Register,
  Sermons,
  Social,
  Vision,
  Worship,
  Youth,
} from "../pages/index.tsx";

// Flattened URLs for routing
export const urls = [
  "/",
  "/church",
  "/staff",
  "/denomination",
  "/vision",
  "/youth",
  "/kids",
  "/directions",
  "/program",
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
    "/staff": <Staff />,
    "/denomination": <Denomination />,
    "/vision": <Vision />,
    "/youth": <Youth />,
    "/kids": <Kids />,
    "/directions": <Directions />,
    "/sermons": <Sermons />,
    "/social": <Social />,
    "/worship": <Worship />,
    "/offering": <Offering />,
    "/register": <Register />,
    "/program": <Program />,
  };

  const component = urlComponentMap[url as keyof typeof urlComponentMap];

  return component;
}

export function urlToTitle(url: string): string {
  const urlTitleMap = {
    "/": "마르페 교회로 환영합니다!",
    "/church": "교회 소개",
    "/staff": "섬기는 이들",
    "/denomination": "소속 교단",
    "/vision": "비전",
    "/youth": 'Marpe Youth "LPD"',
    "/kids": "마르페 키즈",
    "/directions": "오시는 길",
    "/program": "주보",
    "/sermons": "설교 말씀",
    "/social": "인스타그램",
    "/worship": "찬양",
    "/offering": "헌금",
    "/register": "교인 등록",
  };

  const title = urlTitleMap[url as keyof typeof urlTitleMap];

  return title;
}

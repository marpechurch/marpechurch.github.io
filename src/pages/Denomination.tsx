import "react";
import { Typography } from "@mui/material";

import denominationImg from "../assets/denomination.png";

import Page from "../components/Page";

export default function Denomination() {
  const content = (
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie
      suscipit nunc, ut iaculis nunc lobortis vitae. Sed malesuada eleifend
      erat, vel congue dolor sollicitudin vel. Aliquam cursus mattis massa. Nam
      elementum ex aliquet eros auctor, eu placerat nisi sagittis. Etiam varius,
      nulla ac aliquet porttitor, augue mi eleifend felis, ut tempus ipsum
      lectus in metus. Nam elementum semper sagittis. Morbi lacinia condimentum
      diam sed blandit. Integer elementum lectus eu vestibulum sollicitudin.
      Suspendisse potenti. Praesent ac nisi sit amet libero interdum facilisis
      lacinia non neque. Mauris egestas venenatis eros, a iaculis arcu mollis
      in. Donec odio purus, tristique at feugiat quis, vulputate non orci.
      Praesent quis ante eu lectus lacinia volutpat placerat at diam. Phasellus
      molestie pharetra ultrices. Phasellus finibus tortor lacinia neque
      efficitur molestie. Duis lobortis sit amet tellus vitae pellentesque.
    </Typography>
  );

  return <Page content={content} imageSrc={denominationImg} title="교단 소개" />;
}

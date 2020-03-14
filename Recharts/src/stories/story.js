import React from "react";
import DetailChart from "../components/chart";
import { storiesOf } from "@storybook/react";

storiesOf("Charts", module)
.add("Detail Chart", () => (
      <DetailChart />
));

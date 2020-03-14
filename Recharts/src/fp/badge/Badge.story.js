import React from "react";
import { storiesOf } from "@storybook/react";
import Badge from "./Badge.component";

storiesOf("Badges", module).add("Crop Status Badge active", () => (
  <Badge active />
));
storiesOf("Badges", module).add("Crop Status Badge inactive", () => (
  <Badge active={false} />
));

import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card.component";

storiesOf("Cards", module).add("Crop Status Card", () => (
  <Card title="Status" />
));

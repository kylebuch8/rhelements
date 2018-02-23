import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, select } from "@storybook/addon-knobs/polymer";
import "./rh-number.rough-draft.js";

const stories = storiesOf("Number", module);

stories.addDecorator(withKnobs);

stories.add("rh-number", () => {
  const number = text("Number", "299792458");
  const type = select(
    "Type",
    {
      abbrev: "Magnitude abbreviation",
      ordinal: "Ordinal",
      percent: "Percentage",
      bytes: "Bytes",
      e: "Scientific notation",
      thousands: "Spaced thousands"
    },
    ""
  );

  return `
    <rh-number type="${type}">
      ${number}
    </rh-number>
  `;
});

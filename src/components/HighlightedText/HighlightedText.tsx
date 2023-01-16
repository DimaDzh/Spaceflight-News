import React from "react";

import "./style.scss";
type Props = {
  filter: any | (string | JSX.Element)[];
  str: string;
};

const HighlightedText = (props: Props): any => {
  const { filter, str } = props;

  if (!filter) return str;

  const regexp = new RegExp(filter, "ig");

  const matchValue = str.match(regexp);

  if (matchValue) {
    return str.split(regexp).map((s, index, array) => {
      if (index < array.length - 1) {
        const find = matchValue.shift();
        return (
          <>
            {s}
            <span className="yellow">{find}</span>
          </>
        );
      }
      return s;
    });
  }
  return str;
};

export default HighlightedText;

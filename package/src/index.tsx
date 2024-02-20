import React from "react";
import jsondiffpatch from "jsondiffpatch";

type JsonDiffProps = {
  oldJson: object;
  currentJson: object;
  isHidden: boolean;
};

const JsonDiff:React.FC<JsonDiffProps> = ({ oldJson, currentJson, isHidden }) => {
  // get comparison obj
  const delta = jsondiffpatch.diff(oldJson, currentJson);
  // delta is undefined if the 2 objects are the exact same - not sure how I can render this
  // console.log('delta: ', delta);

  if (delta) {
    // Use library's html formatter that generates vanilla CSS
    const htmlFormatter = jsondiffpatch.formatters.html;
    const htmlDiff = htmlFormatter.format(delta, oldJson);
    // React-specific functions to handle raw html
    const createMarkupHtml = () => ({ __html: htmlDiff });

    return (
      <div
        className={`json-diff-container ${
          isHidden ? "jsondiffpatch-unchanged-hidden" : ""
        }`}
      >
        <div dangerouslySetInnerHTML={createMarkupHtml()}></div>
      </div>
    );
  }
};

export default JsonDiff;

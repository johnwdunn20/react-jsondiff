import React from "react";
import * as jsondiffpatch from "jsondiffpatch";
import './jsonDiffCss.css';
import DOMPurify from 'dompurify';
import classnames from 'classnames';

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
    const htmlFormatter: any = jsondiffpatch.formatters.html;
    const htmlDiff = htmlFormatter.format(delta, oldJson);
    // helper function to sanitize the html and insert it into the DOM
    const createMarkupHtml = () => ({ __html: DOMPurify.sanitize(htmlDiff) });

    return (
      <div
        className={`json-diff-container ${
          isHidden ? "jsondiffpatch-unchanged-hidden" : ""
        }`}
      >
        <div dangerouslySetInnerHTML={createMarkupHtml()}></div>
      </div>
    );
  } else {
    return <div className="json-diff-container">No changes</div>;
  }
};

export default JsonDiff;

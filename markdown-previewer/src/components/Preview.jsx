import { useEffect } from "react";
import { useSelector } from "react-redux";
import { marked } from "marked";

function Preview() {
  const preview = useSelector((state) => state.editorText.editorText);
  const parsedPreview = marked.parse(preview);

  marked.setOptions({
    breaks: true,
  });

  useEffect(() => {}, [preview]);

  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: parsedPreview }} className="border border-5 rounded-5 p-2"/>
  );
}

export default Preview;

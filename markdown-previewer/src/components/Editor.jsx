import { useDispatch, useSelector } from "react-redux";
import { changeAction } from "../redux/actions";
import { useEffect } from "react";

function Editor() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.editorText.editorText);

  const handleTextArea = (event) => {
    dispatch(changeAction(event.target.value));
  };

  useEffect(() => {}, [text]);

  return (
    <textarea
      name="editor"
      id="editor"
      value={text}
      onChange={handleTextArea}
      className="w-50 rounded-5 p-2"
    ></textarea>
  );
}

export default Editor;

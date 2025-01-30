import { CHANGE } from "../actions";

const initialState = {
  editorText:
    "# MARKDOWN DI ESEMPIO H1  \n\n" +
    "## Titolo H2  \n\n" +
    "[Link](https://github.com/Zoltan3do)  \n\n" +
    "`const ciao = 'Hello World!'`  \n\n" +
    "```javascript  \n" +
    "console.log('Hello World 2.0')  \n" +
    "console.log('ZOltan3do')  \n" +
    "```  \n\n" +
    "- ciao  \n" +
    "* come ti chiami?  \n\n" +
    "> citazione  \n\n" +
    "![ciao](https://www.adesso-online.de/sites/adesso.spotlight-verlag.de/files/styles/mode_content/public/2018-10/ciao_compleanno.jpg?itok=2oc5NRPs)  \n\n" +
    "**Testo** in __grassetto__!",
};

const editorTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        editorText: action?.payload,
      };
    default:
      return state;
  }
};

export default editorTextReducer;

import store from "../index.js";
import {_setBackgroundColor, _setBoxShadow, _setColor, _setFontSize} from "./index.js";
export const setBackgroundColor = data => store.dispatch(_setBackgroundColor(data))
export const setColor = data => store.dispatch(_setColor(data))
export const setFontSize = data => store.dispatch(_setFontSize(data))
export const setBoxShadow = data => store.dispatch(_setBoxShadow(data))
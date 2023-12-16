import store from "../index.js";
import {_setCurrentAccount} from "./index.js";

export const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data))
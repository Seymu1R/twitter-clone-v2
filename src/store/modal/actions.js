import store from "../index.js";
import  {_setModal, _removeModal} from "./index.js";

export const setModal = (name, data= false) => store.dispatch(_setModal({name, data}))
export  const  removeModal = () => store.dispatch(_removeModal())
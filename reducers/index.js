import { combineReducers } from "redux";
import NotebooksReducers from "./notebooks";
import PhonesReducers from "./phones";
import ActivePhone from "./phone-active";

const allReducers = combineReducers({
  notebooks: NotebooksReducers,
  phones: PhonesReducers,
  active: ActivePhone
});

export default allReducers;

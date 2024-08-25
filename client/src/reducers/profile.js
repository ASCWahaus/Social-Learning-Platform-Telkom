import { UPDATE_PROFILE, GET_PROFILE } from "../constants/actionTypes";

const InitialState = {
  profile: {
    _id: "",
    avatar: null,
    biography: "",
    company: "",
    name: "",
    position: "",
    skill: [],
  },
};
const profile = (state = InitialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return { ...state, profile: action?.payload.profile };
    case GET_PROFILE:
      return { ...state, profile: action?.payload.profile };
    default:
      return state;
  }
};

export default profile;

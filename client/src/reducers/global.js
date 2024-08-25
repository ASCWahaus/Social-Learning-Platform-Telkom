// eslint-disable-next-line import/no-anonymous-default-export
// ini postsnya diganti states

export default (state = { showModal: false, data: {}, isSearch: false }, action) => {
    switch (action.type) {
      case "OPEN_MODAL":
        return { ...state, showModal: true, data: action.data };
      case "HIDE_MODAL":
        return { ...state, showmodal: false };
      case "IS_SEARCH":
        return { ...state, isSearch: true };
      case "NO_SEARCH":
        return { ...state, isSearch: false };
      default:
        return state;
    }
  };
  
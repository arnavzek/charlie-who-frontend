export default function reducer(prevState, action) {
  switch (action.type) {
    case "UPDATE":
      return { ...prevState, [action.field]: action.value };
    case "UPDATE_MEMBERS":
      return {
        ...prevState,
        members: { ...prevState.members, [action.field]: action.value },
      };
    case "REMOVE_MEMBER":
      delete prevState.members[action.field];
      return {
        ...prevState,
        members: { ...prevState.members },
      };
    case "RESET":
      return window.defaultState;
    default:
      throw Error("Invalid reducer type", action);
  }
}

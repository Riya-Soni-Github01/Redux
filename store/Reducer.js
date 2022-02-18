
const initialState = {
  user: {
    username: 'Guest',
    password: '1234'
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addUser':
      return {
        user: { ...state.user, username: action.payload.username, password: action.payload.password }
      };
    default:
      return state
  }
}
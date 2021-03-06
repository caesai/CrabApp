export const actions = {
  openPopUp: (payload) => ({
    type: 'OPEN_POPUP',
    payload
  }),
  closePopUp: () => ({
    type: 'CLOSE_POPUP'
  }),
  throwPopUpError: (errmsg) => ({
    type: 'CATCH_POPUP_ERROR',
    err: errmsg
  }),
  login(payload) {
    return (dispatch) => {
      dispatch({
        type: 'LOGIN_REQUEST',
        payload: {
          name: payload.name,
          nextUrl: '/profile'
        }
      })
    }
  },
  auth: (payload) => ({
    type: 'LOGIN_SUCCESS',
    payload
  }),
  logout: () => ({
    type: 'LOGOUT'
  }),
  loadContract: (payload) => ({
    type: 'LOAD_CONTRACT',
    payload
  }),
  loadCommunties: (payload) => ({
    type: 'LOAD_COMMUNITIES',
    payload
  }),
  selectComm: (payload) => ({
    type: 'SELECT_COMMUNITY',
    payload
  }),
  loadGame: () => ({
    type: 'LOAD_GAME'
  })
};

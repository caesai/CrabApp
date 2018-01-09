const initialState = {
  contractLoaded: false,
  communitiesQnt: 0,
  communities: [],
  selectedComm: ''
}

export default function currentGames (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CONTRACT':
    return Object.assign({}, state, {
      contractLoaded: action.payload.contractLoaded,
      communitiesQnt: action.payload.qnt
    });
    case 'LOAD_COMMUNITIES':
    return Object.assign({}, state, {
      communities: [...state.communities, action.payload]
    });
    case 'SELECT_COMMUNITY':
    return Object.assign({}, state, {
      selectedComm: action.payload.selectedComm
    });
    default:
    return state;
  }
}

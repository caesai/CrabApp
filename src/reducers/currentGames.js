const initialState = {
  contractLoaded: false,
  communitiesQnt: 0,
  communities: []
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
    default:
    return state;
  }
}

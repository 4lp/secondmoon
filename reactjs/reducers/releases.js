import * as releaseActions from "../actions/releaseActions"

const initialState = {
	isLoadingRelease: false,
	release: undefined,
}

export default function release(state=initialState, action={}) {
  switch (action.type) {
  case releaseActions.RELEASE:
    return {...state, isLoadingTeams: true}
  case releaseActions.RELEASE_SUCCESS:
    return {...state, isLoadingRelease: false, content: action.res}
  case releaseActions.RELEASE_ERROR400:
  case releaseActions.RELEASE_ERROR500:
  case releaseActions.RELEASE_FAILURE:
    return {...state, isLoadingRelease: false}
  default:
    return state
  }
}
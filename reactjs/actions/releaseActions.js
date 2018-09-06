import { request } from "../utils"

export const RELEASE = "RELEASE"
export const RELEASE_SUCCESS = "RELEASE_SUCCESS"
export const RELEASE_ERROR400 = "RELEASE_ERROR400"
export const RELEASE_ERROR500 = "RELEASE_ERROR500"
export const RELEASE_FAILURE = "RELEASE_FAILURE"

export function fetchRelease() {
  return function (dispatch) {
    let url = "http://localhost:8000/release/"
    dispatch({type: RELEASE})
    return request(
      url, {},
      (json) => { dispatch({type: RELEASE_SUCCESS, res: json}) },
      (json) => { dispatch({type: RELEASE_ERROR400, res: json}) },
      (res) => { dispatch({type: RELEASE_ERROR500, res: res}) },
      (ex) => { dispatch({type: RELEASE_FAILURE, error: ex}) },
    )
  }
}
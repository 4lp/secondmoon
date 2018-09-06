import { request } from "../utils"

export const BLOGPOST = "BLOGPOST"
export const BLOGPOST_SUCCESS = "BLOGPOST_SUCCESS"
export const BLOGPOST_ERROR400 = "BLOGPOST_ERROR400"
export const BLOGPOST_ERROR500 = "BLOGPOST_ERROR500"
export const BLOGPOST_FAILURE = "BLOGPOST_FAILURE"

export function fetchBlogpost() {
  return function (dispatch) {
    let url = "http://localhost:8000/blogpost/"
    dispatch({type: BLOGPOST})
    return request(
      url, {},
      (json) => { dispatch({type: BLOGPOST_SUCCESS, res: json}) },
      (json) => { dispatch({type: BLOGPOST_ERROR400, res: json}) },
      (res) => { dispatch({type: BLOGPOST_ERROR500, res: res}) },
      (ex) => { dispatch({type: BLOGPOST_FAILURE, error: ex}) },
    )
  }
}
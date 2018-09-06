import React from "react"
import * as releaseActions from '../actions/releaseActions'
import ReleaseContent from '../components/ReleaseContent'
import { connect } from "react-redux"

@connect(state => ({
  release: state.release
}))

export default class ReleaseContainer extends React.Component {
  componentDidMount() {
    let {dispatch, release} = this.props
    if (!release.isLoadingRelease && release.content === undefined) {
      dispatch(releaseActions.fetchRelease())
    }
  }

  renderLoading() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            Loading...
          </div>
        </div>
      </div>
    )
  }

  render() {
    let {release} = this.props
    if (release.isLoadingRelease || release.content === undefined) {
      return this.renderLoading()
    }
    return (
      <div className="releases">
        <div className="row">
          {release.content !== undefined &&
          <ReleaseContent content={release.content} page={this.props.page} setRelease={this.props.setRelease} setReleaseMain={this.props.setReleaseMain} />
          }
        </div>
      </div>
    )
  }
}

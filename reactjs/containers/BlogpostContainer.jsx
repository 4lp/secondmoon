import React from "react"
import * as blogpostActions from '../actions/blogpostActions'
import BlogpostContent from '../components/BlogpostContent'
import { connect } from "react-redux"

@connect(state => ({
  blogpost: state.blogpost
}))

export default class BlogpostContainer extends React.Component {
  componentDidMount() {
    let {dispatch, blogpost} = this.props
    if (!blogpost.isLoadingBlogpost && blogpost.content === undefined) {
      dispatch(blogpostActions.fetchBlogpost())
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
    let {blogpost} = this.props
    if (blogpost.isLoadingBlogpost || blogpost.content === undefined) {
      return this.renderLoading()
    }
    return (
      <div>
        <div className="row">
          {blogpost.content !== undefined &&
          <BlogpostContent content={blogpost.content} count={this.props.count} setBlog={this.props.setBlog} />
          }
        </div>
      </div>
    )
  }
}

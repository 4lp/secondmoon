import React from "react"

export default class BlogpostContent extends React.Component {
  render() {
    let {content} = this.props
    let contentNodes = []
    let count = ""
    let i = 0
    let j = 0 
		let page = 0
		let pagination = []
    if (this.props.count === "all") {
      count = 2
    } else {
      count = parseInt(this.props.count, 10)
    }

		let countMin = count - 2

    content.forEach((item, index) => {
      if (i < count && i >= countMin) {
        let node = (
          <div className="blogpost">
          <h2>{item.name}</h2>
          <p><em>{item.date}</em></p>
          <p>{item.content}</p>
          </div>
        )
        contentNodes.push(node)
      }
      i++
    })
    
    content.forEach((item) => {
			if (j % 2 === 0){
				page++
				let newCount = page * 2
				let node = null 
				if (count === newCount){
					node = (
						<a className="fa" onClick={()=>{this.props.setBlog(newCount)}}><strong>{page}</strong></a>
					)
				} else {
					node = (
						<a className="fa" onClick={()=>{this.props.setBlog(newCount)}}>{page}</a>
					)
				}
				pagination.push(node)
			}
			j++
		})

    return (
			<div>
      	<div>{contentNodes}</div>
				<div className="text-center">
					<div className="blogpost">
						{pagination}
					</div>
				</div>
			</div>
    )
  }
}

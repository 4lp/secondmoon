import React from "react"

export default class ReleaseContent extends React.Component {
	componentDidMount(){
		let script = this.props.optionalContent
		eval(script);
	}

	renderDefault () {
		let name = this.props.selectedRelease[0]
		let date = this.props.selectedRelease[1]
		let info = this.props.selectedRelease[2]
		let image = this.props.selectedRelease[3]
		let bc_code = this.props.selectedRelease[4]
		return (
			<div className="row" style={{background: 'center url('+image+')', backgroundSize: 'cover'}}>
				<div className="col-md-6">
					<iframe 
					className="releases"
					style={{width: "65%", height: "500px", border: "none", padding: "20px"}} 
					src={"https://bandcamp.com/EmbeddedPlayer/album="+bc_code+"/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"}
					seamless>
					</iframe>
				</div>
				<div className="col-md-6 blogpost">
					<h3>{name}</h3>
					<em>{date}</em>
					<hr/>
					<p>{info}</p>
				</div>
				<h5 onClick={()=>{this.props.setSelectedRelease("none")}}>Back to Releases</h5>
			</div>
		)
	}

	renderOptional () {
		return (
			<div dangerouslySetInnerHTML={{__html: this.props.optionalHTML}}></div>
		)
	}
	
	render () {
		return (
			<div>{this.props.optionalHTML === "" ? this.renderDefault() : this.renderOptional()}</div>
		)
	}
}

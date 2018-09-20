import React from "react"
import { render } from "react-dom"
import {
	  createStore,
	  compose,
	  applyMiddleware,
	  combineReducers,
} from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import * as reducers from "./reactjs/reducers"
import BlogpostContainer from "./reactjs/containers/BlogpostContainer"
import ReleaseContainer from "./reactjs/containers/ReleaseContainer"

let finalCreateStore = compose(
  applyMiddleware(thunk),
	  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
let reducer = combineReducers(reducers)
let store = finalCreateStore(reducer)


const fortunes = [
    'Can we go to the park.',
    'Where is the orange cat? Said the big black dog.',
    'We can make the bird fly away if we jump on something.',
    'We can go down to the store with the dog. It is not too far away.',
    'My big yellow cat ate the little black bird.',
    'I like to read my book at school.',
    'We are going to swim at the park.',
	'<img src="https://i.imgur.com/4FObzQn.png"/>',
	'<img src="https://i.imgur.com/4FObzQn.png"/>',
	'<img src="https://i.imgur.com/4FObzQn.png"/>',
	'<img src="https://i.imgur.com/5X9HM5o.gif"/>',
]

class App extends React.Component {

	newsClickHandler(){
		dhtmlwindow.open('ajaxbox', 'div', 'news', 'NEWS', 'left=300px,top=100px,resize=1,scrolling=1'); 
		render(<BlogpostPage/>, document.querySelector("#ajaxbox>.drag-contentarea"))
		return false
	}

	releaseClickHandler(){
		dhtmlwindow.open('ajaxbox', 'div', 'releases', 'RELEASES', 'left=300px,top=100px,resize=1,scrolling=1'); 
		render(<ReleasePageContainer/>, document.querySelector("#ajaxbox>.drag-contentarea"))
		return false
	}

    render(){
        return (
            <div id="page0">
				<img className="main-img" src="https://i.imgur.com/kowrKXx.png"></img>
				<ul>
					<li>
						<a 
							href="#" 
								onClick={()=>{this.newsClickHandler()}}
						>
						news
						</a>
					</li>
					<li>
						<a 
							href="#" 
								onClick={()=>{this.releaseClickHandler()}}
						>
						releases
						</a>
					</li>
				</ul>
                <div id="releases" style={{display: "none"}}>
                    <p>Here's what we've done!</p>
                </div>
                <div id="news" style={{display: "none"}}>
                    <h1>NEWS</h1>
                </div>

            </div>
        )
    }
}

class App2 extends React.Component {

        renderSoundcloud () {
            let source = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/398875308&amp;" +
                "auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;" +
                "show_reposts=false&amp;visual=true"
            return (
                <iframe 
                width="100%"
                height="400" 
                scrolling="no" 
                frameBorder="no" 
                src= {source}
                ></iframe>
                )
    }

    render(){
        return (
            <div id="page1">
                {this.renderSoundcloud()}
            </div>
        )
    }
}

class App3 extends React.Component {
    render(){
        return(
            <div id="page2">
                <div id="instafeed"></div>
            </div>
            )
    }
}
class App4 extends React.Component {
    render(){
        return(
            <div id="page3">
                <iframe style={{border: "0"}} width="400" height="400" src="https://www.youtube.com/embed/z6VMK1t3TuY?t=54s&disablekb=1" frameBorder="0" allowFullScreen></iframe>
            </div>
            )
    }
}
class App5 extends React.Component {

    render(){
        return(
            <div>
                <form action="https://formspree.io/secondmoonrecs@gmail.com" method="POST">
                    <label htmlFor="emailname">Your Name</label>
                    <input className="form-control" name="emailname" id="emailname" type="text"/>
                    <label htmlFor="emailreply">Your Email</label>
                    <input className="form-control"name="emailreply" id="emailreply" type="email"/>
                    <label htmlFor="emailmessage">Message</label>
                    <textarea className="form-control"name="emailmessage" id="emailmessage"></textarea>
                    <br/>
                    <button className="btn btn-primary" type="submit" value="Send">Submit</button>
                </form>
            </div>
            )
    }
}
class App6 extends React.Component {
    constructor(props){
          super(props);
          this.state = {
              fortune: "",
			  question: "",
			  image: "https://i.imgur.com/KVpx6Ol.png"
          };
	      this.handleChange = this.handleChange.bind(this);
      }

      setFortune(fortune){
          this.setState({ fortune: fortune })
      }

      getRandomInt(min, max) {
          min = Math.ceil(min)
          max = Math.floor(max)
          return Math.floor(Math.random() * (max - min)) + min
      }

	  clearAnswer(){
		  return null
	  }

      getFortune(e) {
		  e.preventDefault()
          let len = fortunes.length
          let i = this.getRandomInt(0, len)
          this.setFortune(fortunes[i])
		  this.setState({ question: "" })
      }

	  handleChange(e) {
		  this.setState({ question: e.target.value })
	  }

    render(){
        return(
            <div id="page5">
				<form className="text-center">
                    <label htmlFor="question">Ask the Cube</label>
                    <input className="form-control" name="question" id="question" onChange={this.handleChange} value={this.state.question}/>
					<img src={this.state.image}/>
                	<button className="btn" 
						onMouseEnter={()=>this.setState({image: "https://i.imgur.com/f3DLll5.png"})}
						onMouseLeave={()=>this.setState({image: "https://i.imgur.com/KVpx6Ol.png"})}
						onClick={(e) => this.getFortune(e)}
					>
						~ A S K !~
					</button>
					<div dangerouslySetInnerHTML={{__html: this.state.fortune}}></div>
				</form>
            </div>
            )
    }
}

class BlogpostPage extends React.Component {
	render(){
		return(
			<Provider store={store}>
				<BlogpostContainer count="02"/>
			</Provider>
		)
	}
}

class ReleasePageContainer extends React.Component {
	render(){
		return(
			<Provider store={store}>
				<ReleaseContainer/>
			</Provider>
		)
	}
}

render(<App/>, document.getElementById("page0"))
render(<App2/>, document.getElementById("page1"))
render(<App3/>, document.getElementById("page2"))
render(<App4/>, document.getElementById("page3"))
render(<App5/>, document.getElementById("message"))
render(<App6/>, document.getElementById("page5"))

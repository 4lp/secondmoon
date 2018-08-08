import React from "react"
import { render } from "react-dom"
//import nodemailer from "nodemailer"

const fortunes = [
    'Can we go to the park.',
    'Where is the orange cat? Said the big black dog.',
    'We can make the bird fly away if we jump on something.',
    'We can go down to the store with the dog. It is not too far away.',
    'My big yellow cat ate the little black bird.',
    'I like to read my book at school.',
    'We are going to swim at the park.'
]

class App extends React.Component {

    render(){
        return (
            <div id="page0">
                <h1 className="text-center">SECOND MOON</h1>
                <a 
                    href="#" 
                        onClick={()=>{dhtmlwindow.open('ajaxbox', 'div', 'releases', 'RELEASES', 'width=650px,height=400px,left=300px,top=100px,resize=0,scrolling=1'); 
                    return false}}
                >
                RELEASES
                </a>
                <a 
                    href="#" 
                        onClick={()=>{dhtmlwindow.open('ajaxbox', 'div', 'news', 'NEWS', 'width=650px,height=400px,left=300px,top=100px,resize=0,scrolling=1'); 
                    return false}}
                >
                RELEASES
                </a>
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
                    <label for="emailname">Your Name</label>
                    <input className="form-control" name="emailname" id="emailname" type="text"/>
                    <label for="emailreply">Your Email</label>
                    <input className="form-control"name="emailreply" id="emailreply" type="email"/>
                    <label for="emailmessage">Message</label>
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
              fortune: ""
          };
      }

      setFortune(fortune){
          this.setState({ fortune: fortune })
      }

      getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        }

      getFortune() {
          let len = fortunes.length
          let i = this.getRandomInt(0, len)
          this.setFortune(fortunes[i])
      }

    render(){
        return(
            <div id="page5">
                <button className="btn" onClick={() => this.getFortune()}>~ask the noochCube~</button>
                <p>{this.state.fortune}</p>
            </div>
            )
    }
}

render(<App/>, document.getElementById("page0"))
render(<App2/>, document.getElementById("page1"))
render(<App3/>, document.getElementById("page2"))
render(<App4/>, document.getElementById("page3"))
render(<App5/>, document.getElementById("message"))
render(<App6/>, document.getElementById("page5"))

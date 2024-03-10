import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSub = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="main-heading">Welcome</h1>
          <p className="discription">Thanks you!Happy Learning</p>
          <button type="button" className="btn" onClick={this.onSub}>
            {isSubscribed ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome

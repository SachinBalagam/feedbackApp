// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isButtonClicked: false}

  onClickEmoji = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isButtonClicked} = this.state
    return (
      <div className="bg-container">
        {!isButtonClicked && (
          <div className="card">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {emojis.map(each => (
                <li key={each.id} className="each-list">
                  <button
                    type="button"
                    className="button"
                    onClick={this.onClickEmoji}
                  >
                    <img
                      src={each.imageUrl}
                      alt={each.name}
                      className="image"
                    />
                    <p>{each.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isButtonClicked && (
          <div className="card">
            <img src={loveEmojiUrl} alt="love emoji" className="image" />
            <h1>Thank You!</h1>
            <p className="description">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback

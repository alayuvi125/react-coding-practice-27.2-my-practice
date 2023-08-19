// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationFrom extends Component {
  state = {
    firstName: '',
    lastName: '',
    homePage: true,
    isFirstNameFilled: true,
    isLastNameFilled: true,
  }

  onSubmitForm = event => {
    event.preventDefault()
    // const {firstName, lastName} = this.state
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({isFirstNameFilled: false})
    } else {
      this.setState({isFirstNameFilled: true})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({isLastNameFilled: false})
    } else {
      this.setState({isLastNameFilled: true})
    }
  }

  renderFirstName = () => {
    const {firstName, isFirstNameFilled} = this.state
    return (
      <>
        <label htmlFor="firstName" className="labels">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          onBlur={this.onBlurFirstName}
          placeholder="First Name"
          value={firstName}
          className="input-field"
          onChange={this.onChangeFirstName}
        />
        {isFirstNameFilled ? (
          <></>
        ) : (
          <p className="error-message">
            <sup>*</sup>Required
          </p>
        )}
      </>
    )
  }

  renderLastName = () => {
    const {lastName, isLastNameFilled} = this.state
    return (
      <>
        <label htmlFor="lastName" className="labels">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          onBlur={this.onBlurLastName}
          placeholder="Last Name"
          value={lastName}
          className="input-field"
          onChange={this.onChangeLastName}
        />
        {isLastNameFilled ? (
          <></>
        ) : (
          <p className="error-message">
            <sup>*</sup>Required
          </p>
        )}
      </>
    )
  }

  onClickAnotherResponse = () => {
    this.setState({homePage: true})
  }

  onCLickFormButton = () => {
    const {firstName, lastName} = this.state
    if (firstName.length === 0 && lastName.length === 0) {
      this.setState({isFirstNameFilled: false, isLastNameFilled: false})
    } else if (firstName.length === 0 && lastName.length !== 0) {
      this.setState({isFirstNameFilled: false, isLastNameFilled: true})
    } else if (firstName.length !== 0 && lastName.length === 0) {
      this.setState({isLastNameFilled: false, isFirstNameFilled: true})
    } else {
      this.setState({
        homePage: false,
        isLastNameFilled: true,
        isFirstNameFilled: true,
        firstName: '',
        lastName: '',
      })
    }
  }

  render() {
    const {homePage} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Registration</h1>
        <form onSubmit={this.onSubmitForm} className="form-container">
          {homePage ? (
            <>
              <div className="input-field-container">
                {this.renderFirstName()}
              </div>
              <div className="input-field-container">
                {this.renderLastName()}
              </div>
              <button
                type="submit"
                className="button"
                onClick={this.onCLickFormButton}
              >
                Submit
              </button>
            </>
          ) : (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="image"
              />
              <p className="success">Submitted Successfully</p>
              <button
                type="submit"
                className="button"
                onClick={this.onClickAnotherResponse}
              >
                Submit Another Response
              </button>
            </>
          )}
        </form>
      </div>
    )
  }
}

export default RegistrationFrom

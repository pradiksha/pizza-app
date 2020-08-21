import React, { Component } from 'react'
import { MDBIcon } from "mdbreact";
import "./index.css"

const PizzaSlice = ({ iconClass, minusClass, plusClass, heading, headingClass, value, plusOnclick, minusOnClick }) => (
  <p className="d-flex title">
    <MDBIcon icon="pizza-slice" className={iconClass} />
    <span className={headingClass}>{heading}</span>
    <div className="mrg-rht">
      <MDBIcon icon="minus" className={minusClass} onClick={minusOnClick} />
      {value}
      <MDBIcon icon="plus" className={plusClass} onClick={plusOnclick} />
    </div>
  </p>
)

const CustomerComponent = ({ iconName, minusClass, plusClass, heading, headingClass, value, plusOnclick, minusOnClick }) => (
  <div>
    <div className="border-line"></div>
    <p className="d-flex title">
      <MDBIcon icon={iconName} size="2x" className="icon" />
      <span className="txt">{heading}</span>
      <div className="text-right">
        <MDBIcon icon="minus" className={minusClass} onClick={minusOnClick} />
        {value}
        <MDBIcon icon="plus" className={plusClass} onClick={plusOnclick} />
      </div>
    </p>
  </div>
)

class Pizza extends Component {

  state = {
    adult: 1,
    child: 0,
    small: 0,
    medium: 1,
    large: 0,
    errMsg: "",
    total: 200,
  }

  handleSmallIncrement = () => {
    const { small, medium, large, adult, child, total } = this.state
    let smallI = small + 1;
    let mediumI = medium
    let largeI = large
    let adultI = adult
    let childI = child
    let final = total
    if (smallI > 1) {
      mediumI = medium + (smallI / 2)
      if (mediumI > 1) {
        largeI = large + (mediumI / 2)
      }
      mediumI = mediumI % 2
      smallI = smallI % 2
      if (adultI > 0) {
        if (mediumI > adultI) {
          childI = (mediumI - adultI) * 2 + smallI
        }
        else {
          childI = (largeI - ((adultI - mediumI) / 2)) * 4 + smallI
        }
      }
      else {
        adultI = adult + 1
        if (mediumI > adultI) {
          childI = (mediumI - adultI) * 2 + smallI
        }
        else {
          childI = (largeI - ((adultI - mediumI) / 2)) * 4 + smallI
        }
      }
      final = (smallI * 150) + (mediumI * 200) + (largeI * 300)
      if (final < 1000) {
        this.setState({ small: smallI, medium: mediumI, large: largeI, adult: adultI, child: childI, total: final, errMsg: "" })
      }
    }
    else {
      childI = childI + smallI
      final = (smallI * 150) + (mediumI * 200) + (largeI * 300)
      if (final < 1000) {
        this.setState({ small: smallI, child: childI, total: final, errMsg: "" })
      }
    }

  }

  handleMediumIncrement = () => {
    const { small, medium, large, adult, child, total } = this.state
    let smallI = small
    let mediumI = medium + 1
    let largeI = large
    let adultI = adult + 1
    let childI = child
    let final = total
    if (mediumI > 1) {
      largeI = large + (mediumI / 2)
      mediumI = mediumI % 2
      final = (smallI * 150) + (mediumI * 200) + (largeI * 300)
      if (final < 1000) {
        this.setState({ small: smallI, medium: mediumI, large: largeI, adult: adultI, child: childI, total: final, errMsg: "" })
      }
    }
    else {
      final = (smallI * 150) + (mediumI * 200) + (largeI * 300)
      if (final < 1000) {
        this.setState({ medium: mediumI, adult: adultI, total: final, errMsg: "" })
      }
    }
  }

  handleLargeIncrement = () => {
    const { large, adult, medium, small, total } = this.state
    let largeI = large + 1
    let adultI = adult + 2
    let mediumI = medium
    let smallI = small
    let final = total
    final = (smallI * 150) + (mediumI * 200) + (largeI * 300)
    if (final < 1000) {
      this.setState({ large: largeI, adult: adultI, total: final, errMsg: "" })
    }
  }

  handleAdultIncrement = () => {
    const { adult, large, medium, small, total } = this.state
    let adultI = adult + 1
    let largeI = large
    let mediumI = medium + 1
    let smallI = small
    let final = total
    if (mediumI > 1) {
      largeI = large + (mediumI / 2)
      mediumI = mediumI % 2
      final = (smallI * 150) + (mediumI * 200) + (largeI * 300)
      if (final < 1000) {
        this.setState({ medium: mediumI, large: largeI, adult: adultI, total: final, errMsg: "" })
      }
    }
    else {
      final = (smallI * 150) + (mediumI * 200) + (largeI * 300)
      if (final < 1000) {
        this.setState({ medium: mediumI, adult: adultI, total: final, errMsg: "" })
      }
    }
  }

  handleChildIncrement = () => {
    const { small, medium, large, adult, child, total } = this.state
    let smallI = small + 1;
    let mediumI = medium
    let largeI = large
    let adultI = adult
    let childI = child
    let final = total
    if (smallI > 1) {
      mediumI = medium + (smallI / 2)
      if (mediumI > 1) {
        largeI = large + (mediumI / 2)
      }
      mediumI = mediumI % 2
      smallI = smallI % 2
      if (adultI > 0) {
        if (mediumI > adultI) {
          childI = (mediumI - adultI) * 2 + smallI
        }
        else {
          childI = (largeI - ((adultI - mediumI) / 2)) * 4 + smallI
        }
      }
      else {
        adultI = adult + 1
        if (mediumI > adultI) {
          childI = (mediumI - adultI) * 2 + smallI
        }
        else {
          childI = (largeI - ((adultI - mediumI) / 2)) * 4 + smallI
        }
      }
      final = (smallI * 150) + (mediumI * 200) + (largeI * 300)
      if (final < 1000) {
        this.setState({ small: smallI, medium: mediumI, large: largeI, adult: adultI, child: childI, total: final, errMsg: "" })
      }
    }
    else {
      childI = childI + smallI
      final = (smallI * 150) + (mediumI * 200) + (largeI * 300)
      if (final < 1000) {
        this.setState({ small: smallI, child: childI, total: final, errMsg: "" })
      }
    }
  }

  handleSmallDecrement = () => {
    const { small, child, medium, large, total } = this.state
    let smallD = small - 1
    let childD = child - 1
    let mediumD = medium
    let largeD = large
    let final = total
    if (small > 0) {
      final = (smallD * 150) + (mediumD * 200) + (largeD * 300)
      if (final < 1000) {
        this.setState({ small: smallD, child: childD, total: final, errMsg: "" })
      }
    }
  }

  handleMediumDecrement = () => {
    const { medium, adult, child, large, small, total } = this.state
    let mediumD = medium
    let adultD = adult
    let childD = child
    let smallD = small
    let largeD = large
    let final = total
    if ((medium >= 1) || (large > 0 && medium > 0)) {
      if (adult > 1) {
        adultD = adultD - 1
        mediumD = mediumD - 1
      }
      else {
        if (childD > 1) {
          childD = childD - 2
          mediumD = mediumD - 1
        }
      }
      final = (smallD * 150) + (mediumD * 200) + (largeD * 300)
      if (final < 1000) {
        this.setState({ medium: mediumD, adult: adultD, child: childD, total: final, errMsg: "" })
      }
    }
  }

  handleLargeDecrement = () => {
    const { large, adult, child, medium, small, total } = this.state
    let largeD = large
    let adultD = adult
    let childD = child
    let mediumD = medium
    let smallD = small
    let final = total
    if ((large >= 1) || (large > 0 && medium > 0)) {
      if (adult > 2) {
        adultD = adultD - 2
        largeD = largeD - 1
      }
      else {
        if (childD > 3) {
          childD = childD - 4
          largeD = largeD - 1
        }
      }
      final = (smallD * 150) + (mediumD * 200) + (largeD * 300)
      if (final < 1000) {
        this.setState({ large: largeD, adult: adultD, child: childD, total: final, errMsg: "" })
      }
    }
  }

  handleAdultDecrement = () => {
    const { adult, large, medium, child, small, total } = this.state
    let adultD = adult
    let mediumD = medium
    let largeD = large
    let childD = child
    let smallD = small
    let final = total
    if (adult > 1) {
      adultD = adultD - 1
      mediumD = Math.floor((adultD % 2) + (childD / 4))
      largeD = Math.floor((adultD / 2) + (childD / 4))
      final = (smallD * 150) + (mediumD * 200) + (largeD * 300)
      if (final < 1000) {
        this.setState({ adult: adultD, medium: mediumD, large: largeD, total: final, errMsg: "" })
      }
    }
  }

  handleChildDecrement = () => {
    const { adult, large, medium, child, small, total } = this.state
    let adultD = adult
    let mediumD = medium
    let largeD = large
    let childD = child
    let smallD = small
    let final = total
    if (childD > 0) {
      childD = childD - 1
      smallD = childD % 2
      mediumD = Math.floor((adultD % 2) + (childD / 2)) % 2
      largeD = Math.floor((adultD / 2) + (childD / 4))
      final = (smallD * 150) + (mediumD * 200) + (largeD * 300)
      if (final < 1000) {
        this.setState({ adult: adultD, medium: mediumD, large: largeD, small: smallD, child: childD, total: final, errMsg: "" })
      }
    }
  }


  render() {
    const { small, medium, large, adult, child, total } = this.state
    return (
      <div>
        <h2 className="title txt order-head">Order <strong className="highlight">Pizza</strong></h2>
        <div className="box">
          <div>
            <div className="d-flex text-right">
              <div>
                <PizzaSlice
                  iconClass="icon small-icon"
                  minusClass={small === 0 ? "disable-icon" : "minus-icon"}
                  plusClass={(total + 150) > 1000 ? "disable-icon" : "plus-icon"}
                  heading="SMALL"
                  headingClass="small-txt"
                  value={small}
                  plusOnclick={this.handleSmallIncrement}
                  minusOnClick={this.handleSmallDecrement}
                />

                <PizzaSlice
                  iconClass="icon medium-icon"
                  minusClass={medium === 0 || large === 0 ? "disable-icon" : "minus-icon"}
                  plusClass={(total + 200) > 1000 ? "disable-icon" : "plus-icon"}
                  heading="MEDIUM"
                  headingClass="medium-txt"
                  value={medium}
                  plusOnclick={this.handleMediumIncrement}
                  minusOnClick={this.handleMediumDecrement}
                />

                <PizzaSlice
                  iconClass="icon large-icon"
                  minusClass={(medium === 0 && large === 1) || large === 0 ? "disable-icon" : "minus-icon"}
                  plusClass={(total + 300) > 1000 ? "disable-icon" : "plus-icon"}
                  heading="LARGE"
                  headingClass="large-txt"
                  value={large}
                  plusOnclick={this.handleLargeIncrement}
                  minusOnClick={this.handleLargeDecrement}
                />
              </div>
            </div>

            <CustomerComponent
              iconName="user"
              minusClass={adult < 2 ? "disable-icon" : "minus-icon"}
              plusClass={(total + 200) > 1000 ? "disable-icon" : "plus-icon"} 
              heading="ADULT"
              headingClass
              value={adult}
              plusOnclick={this.handleAdultIncrement}
              minusOnClick={this.handleAdultDecrement}
            />
            
            <CustomerComponent
              iconName="child"
              minusClass={child === 0 ? "disable-icon" : "minus-icon"}
              plusClass={(total + 150) > 1000 ? "disable-icon" : "plus-icon"} 
              heading="CHILDREN"
              headingClass
              value={child}
              plusOnclick={this.handleChildIncrement}
              minusOnClick={this.handleChildDecrement}
            />
          </div>
        </div>
        <div className="order-head">
          <h3 className="title txt">Order <strong className="highlight">Total </strong> </h3>
          <div className="float-right total-amt">{total}</div>
        </div>
      </div>
    )
  }
}

export default Pizza

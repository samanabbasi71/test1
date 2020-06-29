import React, { Component } from 'react'
// import { Alert } from 'reactstrap';
export default class Alert extends Component {
    constructor(props) {
        super(props);
        this.state={
          visible : true
        }
      }


      componentDidMount(){
        setTimeout(() => {
            this.setState({ visible: false });
          }, 6000);
      }
    render() {
      const {
        title
      } = this.props
        return (
        <div className={this.state.visible ? 'alert-show' : 'alert-hide'} >
<p class="line-1 anim-typewriter">{title}</p>
      </div>
        )
    }
}

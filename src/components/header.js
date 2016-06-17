import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
	  <div className="row">
	    <div id="top1" className="col-lg-12">
	      <h3>Wallet Browser</h3>
	      <h4></h4>
	      <p>
	        <a>
	          <button onClick={() => this.props.hideGallery()} className="btn btn-default">Home</button>
	        </a>
	      </p>
	    </div>
	  </div>
  )
    }
}

export default Header;

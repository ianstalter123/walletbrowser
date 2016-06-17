import React from 'react';

class WalletListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {image: '', showResults: false};
    }

    componentWillMount() {
    	 this.setState({image: "data:image/jpeg;base64," + this.props.img })
    }

    render() {
        return (
        	<div>
        	 <div onClick={() => this.props.setGallery(this.props.gallery)} className="col-lg-3 col-md-3 col-sm-6 col-xs-6 nopadding space">
        		<div className="poster">
          		<img className="posterImage" src= {this.state.image}/>
        		</div>
        	 </div>
        </div>
        	);
    }
}

export default WalletListItem;

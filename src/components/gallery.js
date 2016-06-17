import React from 'react';

let galleryItems = '';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {gallery: []};
        console.log('hello gallery');


    }
     getGallery(me) {
          	for (var key in this.props.gallery) {
          		this.state.gallery.push("data:image/jpeg;base64," + this.props.gallery[key].image)
          	}
          	//console.log(this.state.gallery);
    }

    componentWillMount() {
    		  this.getGallery(this);

    	   	galleryItems = this.state.gallery.map((item) => {
      		return (

      			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 nopadding space">
      			<div className="poster">
      				<img className="posterImage"
      				 src={item}
      				 key={this.state.gallery.indexOf(item)}
      				 ></img>
      			</div>
      			</div>
       			);
 				 	})
  			}

    render() {
        return (
        	<div>

								{galleryItems}

          </div>
        		  )
    }
}

export default Gallery;

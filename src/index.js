import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';
import WalletList from './components/wallet_list';
import Gallery from './components/gallery';
import Header from './components/header';

const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database')

const app = firebase.initializeApp({
    apiKey: 'fFtcZUWBkkHFj699Jr489ojoE0eLwx1kBQ3Kt2JD',
    databaseURL: 'crackling-fire-8350.firebaseio.com'
  });

const database = app.database();

const ref = database.ref("wallets");

const wallets = [];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {wallets: [], gallery: [], show:false};
    }

    getWallets(me) {
          ref.once('value', function(snap) {
          	for (var key in snap.val()) {
          		wallets.push(snap.val()[key])
          	}
				 	me.setState({wallets:wallets});
				  //console.log('state',me.state);
				})
    }

    componentWillMount() {
    	this.getWallets(this);
  	}

    render() {
    	if (this.state.show === false) {
        return (
        	<div>
        		<Header/>
        		<WalletList
        		setGallery={gallery => this.setState({gallery:gallery, show:true})}
        		wallets={this.state.wallets}/>
        	</div>
        	);
      } else {
      	return (
      		<div>
      		<Header hideGallery={gallery => this.setState({gallery:[], show:false})}
/>
      		<Gallery
      				gallery={this.state.gallery} />
      		</div>
      		)
      }
    }
}

ReactDOM.render(<App/>, document.querySelector('.container-fluid'));

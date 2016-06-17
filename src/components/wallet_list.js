import React from 'react';
import WalletListItem from './wallet_list_item';

let names = [];
let walletItems = '';

class WalletList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {gallery:[]};
    }

     componentWillUpdate(nextProps) {
     	this.props = nextProps;

     	//console.log('wallets', this.props.wallets);

     	walletItems = this.props.wallets.map((wallet) => {
      return (
      	<WalletListItem
      	setGallery={this.props.setGallery}
      	name={wallet.name}
      	gallery={wallet.images}
      	img={wallet.image}
      	key={this.props.wallets.indexOf(wallet)}/>
       );
  })
}
    render() {
        return (
					<div>
						{walletItems}
					</div>
        	);
    }
}

export default WalletList;

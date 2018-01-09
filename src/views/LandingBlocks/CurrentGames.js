import React from 'react';
import Web3 from 'web3';
import abi from './abi.json';
import {actions} from '/utils/actions';
import {connect} from 'react-redux';

const web3 = new Web3(global.web3.currentProvider);
const contractAddress = '0xDaa7fF74c625b3feE326c62f6DC7D3d0C378088a';
const contract = new web3.eth.Contract(abi,contractAddress);

const mapStateToProps = (state) => ({
  contractLoaded: state.currentGames.contractLoaded,
  communitiesQnt: state.currentGames.communitiesQnt,
  communities: state.currentGames.communities
});

const RenderCommunitiesList = (props) => {
  const commArray = props.communities.map((comm, key)=>
    <tr key={key}>
      <td>{comm.name}</td>
      <td>{comm.votes}</td>
    </tr>
  )
  return commArray;
}

let CurrentGames = class extends React.Component {
  constructor(props) {
    super(props);

    this.getCommunitiesData = this.getCommunitiesData.bind(this);
  }
  componentDidMount() {
    contract.methods.communitiesNumber().call().then( (qnt) => {
       this.props.dispatch(actions.loadContract({
         contractLoaded: true,
         qnt: qnt
       }))
    });
    setTimeout(()=>{
      if (this.props.contractLoaded) {
        for (let i = 0; i <= this.props.communitiesQnt - 1; i++) {
          this.getCommunitiesData(i);
        }
      }
    },1000)
  }
  getCommunitiesData(index) {
    let community = {
      name: '',
      votes: 0
    };
    contract.methods.communities(index).call().then(name => {
      community.name = name;
    });
    contract.methods.votes(index).call().then(votes => {
      community.votes = votes;
    });
    setTimeout(()=>{
      this.props.dispatch(actions.loadCommunties(community))
    },1000)
  }

  render(){
    return(
      <table>
        <tbody>
          <RenderCommunitiesList communities={this.props.communities} />
        </tbody>
      </table>
    )
  }
}

CurrentGames = connect(mapStateToProps)(CurrentGames);

export default CurrentGames;

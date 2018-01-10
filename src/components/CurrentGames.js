import React from 'react';
import Web3 from 'web3';
import abi from './abi/abi.json';
import {actions} from '/utils/actions';
import {connect} from 'react-redux';
import Loader from './Loader';

const web3 = new Web3(global.web3.currentProvider);
const contractAddress = '0xDaa7fF74c625b3feE326c62f6DC7D3d0C378088a';
const contract = new web3.eth.Contract(abi,contractAddress);

const mapStateToProps = (state) => ({
  gameLoaded: state.currentGames.gameLoaded,
  contractLoaded: state.currentGames.contractLoaded,
  communitiesQnt: state.currentGames.communitiesQnt,
  communities: state.currentGames.communities,
  selectedComm: state.currentGames.selectedComm
});

let voteForm = (props) => {
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      let senderAddr = e.currentTarget.querySelector('input[name="address"]').value;
      let senderValue = e.currentTarget.querySelector('input[name="qnt"]').value;
      contract.methods.voteForCommunity(props.selectedComm).send({from: senderAddr.toString(), gas: 3000000, value: web3.utils.toWei(senderValue, 'ether')});
      props.dispatch(actions.closePopUp());
    }}>
      <p>Enter your address</p>
      <input type='text' name='address' />
      <p>Enter value</p>
      <input type='text' name='qnt' />
      <button type='submit'>Vote</button>
    </form>
  )
}

let communityForm = (props) => {
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      let commName = e.currentTarget.querySelector('input[name="commname"]').value;
      let senderAddr = e.currentTarget.querySelector('input[name="address"]').value;
      let senderValue = e.currentTarget.querySelector('input[name="qnt"]').value;
      contract.methods.createCommunity(commName.toString()).send({from: senderAddr.toString(), gas: 3000000, value: web3.utils.toWei(senderValue, 'ether')});
      props.dispatch(actions.closePopUp());
    }}>
      <p>Enter your address</p>
      <input type='text' name='address' />
      <p>Enter crab name</p>
      <input type='text' name='commname' />
      <p>Entervalue</p>
      <input type='text' name='qnt' />
      <button type='submit'>Create</button>
    </form>
  )
}

let CurrentGames = class extends React.Component {
  constructor(props) {
    super(props);

    this.getCommunitiesData = this.getCommunitiesData.bind(this);
  }
  componentDidMount() {
    console.log(contract);
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
          if (i == this.props.communitiesQnt - 1) {
            setTimeout(()=>{
              this.props.dispatch(actions.loadGame());
            },1000);
          }
        }
      }
    },1000);
  }
  getCommunitiesData(index) {
    let community = {
      id: index,
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
    },1000);
  }

  render(){
    return(
      <table className='gameTable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Votes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!this.props.gameLoaded ?
            <tr>
              <td colSpan='3'><Loader /></td>
            </tr> : null
          }

          {this.props.communities.sort((a,b)=>{
            return b.votes - a.votes;
            }).map((comm, key) =>
            <tr key={key}>
              <td>{comm.name}</td>
              <td>{comm.votes}</td>
              <td className='btnTd'>
                <button onClick={()=>{
                  this.props.dispatch(actions.selectComm({
                    selectedComm: comm.id
                  }));
                  this.props.dispatch(actions.openPopUp({
                    title: `Vote for ${comm.name}`,
                    body: voteForm
                  }));
                }}>Vote</button>
              </td>
            </tr>
          )}
          <tr className='btnTr'>
            <td colSpan='3' className='textCenter'>
              <button onClick={()=>{
                this.props.dispatch(actions.openPopUp({
                  title: 'Add new crab',
                  body: communityForm
                }))
              }}>Add new crab</button>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

voteForm = connect(mapStateToProps)(voteForm);
communityForm = connect(mapStateToProps)(communityForm);
CurrentGames = connect(mapStateToProps)(CurrentGames);

export default CurrentGames;

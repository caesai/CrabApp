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
  communities: state.currentGames.communities,
  selectedComm: state.currentGames.selectedComm
});

let voteForm = (props) => {
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      console.log(props.selectedComm)
      let senderAddr = e.currentTarget.querySelector('input').value;
      contract.methods.voteForCommunity(props.selectedComm).send({from: senderAddr.toString()}).then(reciept => {
        console.log(reciept)
      });
    }}>
      <p>Enter your address</p>
      <input type='text' />
      <button type='submit'>Vote</button>
    </form>
  )
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
      <table className='gameTable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Votes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.communities.map((comm, key)=>
            <tr key={key}>
              <td>{comm.name}</td>
              <td>{comm.votes}</td>
              <td className='btnTd'>
                <button onClick={()=>{
                  this.props.dispatch(actions.selectComm({
                    selectedComm: key
                  }));
                  this.props.dispatch(actions.openPopUp({
                    title: `Vote for ${comm.name}`,
                    body: voteForm
                  }));
                }}>Vote</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

voteForm = connect(mapStateToProps)(voteForm);
CurrentGames = connect(mapStateToProps)(CurrentGames);

export default CurrentGames;

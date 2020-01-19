import React from 'react';
import './App.css';
import HobbyList from './Components/HobbyList';
import Guarantee from './Components/Guarantee';
import delivery from './Components/f-delivery.png';
import coin from './Components/coin.png';
import chat from './Components/chat.png';
import Counter from './Components/Counter';


export default function App() {
  return (
    <div>
      <HobbyList />
      <div className='mainService'>
        <Guarantee
          img={delivery}
          title='Free shipping'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna sit amet purus gravida quis blandit turpis cursus. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. '
        />
        <Guarantee
          img={coin}
          title='100% Money back'
          description='Adipiscing elit ut aliquam purus. Ornare suspendisse sed nisi lacus sed viverra tellus in. Tortor at risus viverra adipiscing at. Dui ut ornare lectus sit amet. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Feugiat nisl pretium fusce id velit ut tortor pretium. Quisque non tellus orci ac auctor augue mauris augue. '
        />
        <Guarantee
          img={chat}
          title='Online support 24/7'
          description='Nunc congue nisi vitae suscipit. Cras tincidunt lobortis feugiat vivamus at augue. At urna condimentum mattis pellentesque. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Massa sed elementum tempus egestas sed sed risus. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum.'
        />
      </div>
      <Counter />
    </div>
  );
}
import ChannelBar from './components/ChannelBar/ChannelBar'
import SideBar from './components/SideBar/SideBar';
import ContentContainer from './components/ContentContainer/ContentContainer';

function App() {
  return (
    <div className='flex'>
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}

export default App;

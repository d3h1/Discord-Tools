import TopNav from '../TopNav';
import { BsPlusCircleFill } from 'react-icons/bs';

const ContentContainer = () => {
    return (
        // This is the current content that is statically set for now
        <div className='content-container'>
            <TopNav />
            <div className='content-list'>
                <Post name='Leo' timestamp='one week ago' text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Loremipsum dolor sit amet consectetur adipisicing elit.`} />
                <Post name='Charles' timestamp='one week ago' text={`Lorem ipsum dolor.`}/>
                <Post name='Mark' timestamp='6 days ago' text={`Lorem ipsum dolor sit amet consectetur sit amet consectetur adipisicing elit. Loremipsum dolor sit amet consectetur adipisicing elit.`}/>
                <Post name='Leonoa' timestamp='3 days ago' text={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}/>
                <Post name='Billy' timestamp='one week ago' text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}/>
                <Post name='Bobby' timestamp='2 days ago' text={`Lorem ipsum dolor sit amet !`}/>
                <Post name='Tessa' timestamp='10 hours ago' text={`Lorem ipsum dolor sit ?`}/>
                <Post name='Tilly' timestamp='25 minutes ago' text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum.`}/>
                <Post name='Milly' timestamp='just now' text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.`}/>
            </div>
            <BottomBar />
        </div>
    );
};

// This will be our input box that will allow the user to enter what they want plus their information
const BottomBar = () => (
    <div className='bottom-bar'>
        <PlusIcon />
        <input className='bottom-bar-input' type='text' placeholder='Enter message...'/>
    </div>
);

// This is how we are gonna display this post that were defined above 
const Post = ({ name, timestamp, text }) => {
    
    // Avatar picture will be randomized based on the seed and randomized on the link being drawn from
    const seed = Math.round(Math.random() * 100);
    return (
        <div className=''>
            <div className=''>
                <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
            </div>

            {/* The format of each post */}
            <div className='post-content'>
                <p className='post-owner'>
                    {name}
                    <small className='timestamp'>
                        {timestamp}
                    </small>
                </p>
                <p className='post-text'>
                    {text}
                </p>
            </div>
        </div>
    );
};

// The plus icon will be shown to put a new post 
const PlusIcon = () => (
    <BsPlusCircleFill size='22' className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'/>
);

export default ContentContainer;
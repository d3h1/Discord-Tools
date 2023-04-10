import { useState } from "react";
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus} from 'react-icons/fa';

// Declaring our constant variables  
const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

// We are creating a channel bar that will include three factors 
const ChannelBar = () => {
    return (
        <div className='channel-bar shadow-lg'>
            <ChannelBlock />
            {/* Creating a container that will include three factors */}
            <div className='channel-container'>
                <Dropdown header="Topics" selections={topics} />
                <Dropdown header="Questions" selections={questions} />
                <Dropdown header="Random" selections={random} />
            </div>
        </div>
    );
};

// Dropdown menu -- Header | Selection
const Dropdown = ({ header, selection }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        // On click, the drop down menu will extend downwards -- then close on click again -- works on an if else based on whether or not the menu is expanded or not 
        <div className="dropdown">
            <div onClick={() => setExpanded(!expanded)} className="dropdown-header">
                <ChevronIcon expanded={expanded}/>
                <h5 className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>
                    {header}
                </h5>
                <FaPlus size='12' className="text-accent text-opacity-80 my-auto ml-auto" />
            </div>
            {expanded && 
                selection &&
                selection.map((selections) => <TopicSelection selection={selection} />)}
        </div>
    );
};

// This is going to change the positioning of the chevron -- open will be down || closed will be right 
const ChevronIcon = ({ expanded }) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
    return expanded ? (
        <FaChevronDown size='14' className={chevClass} />
        ) : (
            <FaChevronRight size='14' className={chevClass} />     
    );
};

// Menu will allow you to select one of the topics
const TopicSelection = ({ selection }) => {
    <div className="dropdown-selection">
        <BsHash className="text-gray-400" size='24'/>
        <h5 className="dropdown-selection-text">{selection}</h5>
    </div>
};

// Channels will have to be put into blocks -- styles by the css
const ChannelBlock = () => (
    <div className="channel-block">
        <h5 className="channel-block-text">Channels</h5>
    </div>
)

export default ChannelBar;

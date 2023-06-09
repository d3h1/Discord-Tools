import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

// This will be our sidebar -- animated and colored to discords usual colors 
const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
                    
        <SideBarIcon icon={<FaFire size="28" />} />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

// This is how we will set our icons their tooltips 
const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group" >
    {icon}

    <span className='sidebar-tooltip group-hover:scale-100'>
      {text}
    </span>
  </div>
)

const Divider = () => <hr className='sidebar-hr' />;

export default SideBar;
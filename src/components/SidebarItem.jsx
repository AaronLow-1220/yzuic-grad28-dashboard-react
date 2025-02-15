

import Icon from './Icon';

function SidebarItem({props}) {
    return (
        <div className="sidebar-item text-gray-800 flex items-center gap-x-[0.5rem] px-[1rem] py-[0.5rem] hover:bg-gray-100 cursor-pointer rounded-md">
            <Icon iconName={props.icon} />
            <p className="">{props.name}</p>
        </div>
    )
}

export default SidebarItem;
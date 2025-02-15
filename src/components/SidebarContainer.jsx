import SidebarItem from "./SidebarItem";
import "../../public/css/init.css";
import "../../public/css/sidebar.css";

function SidebarContainer() {
	return (
		<div className="sidebar-container p-[0.5rem] w-64 h-screen bg-white text-white">
			<div className="sidebar-logo">
				<h1 className="text-4xl font-bold text-gray-800 p-[1rem]">草莓派</h1>
			</div>
			<SidebarItem props={{ icon: "users", name: "Groups" }} />
		</div>
	);
}

export default SidebarContainer;

import { MdOutlinePeople } from "react-icons/md";

const icons = {
	users: MdOutlinePeople,
};

const Icon = ({ iconName }) => {
	const Icon = icons[iconName];
	return <Icon />;
};

export default Icon;

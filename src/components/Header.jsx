import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
	const onClick = (e) => {
		console.log(e);
	};
	return (
		<header className="header">
			<h1> {title}</h1>
			<Button color={'green'} text={'Add'} />
		</header>
	);
};

Header.defaultProps = {
	title: 'No Title',
};

Header.propTypes = {
	title: PropTypes.string,
};

// Styling inline with variables is acceptable if you want to (only use one {} on style=)
// const headingStyle = {
// 	color: 'red',
// 	backgroundColor: 'black',
// };
export default Header;

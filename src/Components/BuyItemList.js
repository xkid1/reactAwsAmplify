import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/action/users';

const BuyItemList = () => {
	const users = useSelector((state) => state.users);
	// const dispatch = useDispatch();
	const handleClick = (e) => {
		console.log(e);
	};
	const items = users.info;
	console.log(items);

	return (
		<div className="container">
			{items.map((item, index) => (
				<div
					className="itemsToAdd"
					key={index}
					onClick={() => {
						handleClick(index);
					}}
				>
					<div className="imgItems">
						<img src="https://ui-avatars.com/api/?name=elmer" />
					</div>
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.body}</p>
					</div>
				</div>
			))}
		</div>
	);
};

// const mapStateProps = (state) => {
// 	return {
// 		users: state.users,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators(
// 		{
// 			setUserInfo,
// 		},
// 		dispatch,
// 	);
// };

// export default connect(mapStateProps, mapDispatchToProps)(buyItemList);
export default BuyItemList;

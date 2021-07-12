import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// if (module.hot) {
//   module.hot.accept();
// }

const App = () => {
	return (
	<div className="ui container comments">
		<ApprovalCard>
			<CommentDetail author="Radek" timeAgo="Today at 4:45PM" content="Sample comment1" avatar={faker.image.avatar()} />
		</ApprovalCard>
		<ApprovalCard>
			<CommentDetail author="Patryk" timeAgo="Today at 5:45PM" content="Sample comment2" avatar={faker.image.avatar()} />
		</ApprovalCard>
		<ApprovalCard>
			<CommentDetail author="Piotr" timeAgo="Today at 6:45PM" content="Sample comment3" avatar={faker.image.avatar()} />
		</ApprovalCard>
	</div> 
	)
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
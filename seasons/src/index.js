import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );
// 	return (
// 	<div>
//         Hello
// 	</div> 
// 	)
// };

/*
Execution order:
1. Instance of App component is created.
2. App component's constructor() function gets called.
3. State object is created and assigned to the this.state property
4. Geolocation service is called.
5. React calls the component render method.
6. App returns JSX, gets rendered to page as HTML.
7. We get result from geolocation service, and we update state.date
8. Updating the state causes calling the render() method the second time instantly along with the component children
9. App returns JSX for the second time.
*/

/*
Component Lifecycle:
1. constructor() - good place to one time setup
2. render() - only used to return JSX, no callouts etc.
Content visible on the screen
3. componentDidMount() - good place to do data-loading, it's best practice to do it here and not in constructor
Sit and wait for update
4. componentDidUpdate() - good place to do more data-loading when state/props change
Sit and wait until this component is not longer shown.
5. componentWillUnmount() - good place to do cleanup especially for not react stuff

Other lifecycle methods (rarely used) - shouldComponentUpdate, getDeriviedStateFromProps, getSnapshotBeforeUpdate 
Note: Everytime we update the component th render() method is called and then lifecycle method componentDidUpdate
*/
class App extends React.Component {
	//constructor method is optional
	constructor(props){
		super(props);

		//This is the only time we do direct assignment to this.state, rest of the time use this.setState
		//1st way to initialize state
		//this.state = {lat: null, errorMessage: null};
	}

	//2nd way to initialize state
	state = {lat: null, errorMessage: null};

	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			//Always use setState to set the state
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message })
		);
	}

	renderContent() {
		if(!this.state.errorMessage && this.state.lat){
			return <SeasonDisplay lat={this.state.lat} />
		}
		if(this.state.errorMessage && !this.state.lat){
			return <div>Error: {this.state.errorMessage}</div>
		}
		return <Spinner message='Please allow the location' />
	}

	render() {
		return <div>
			{this.renderContent()}
		</div>

	}
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
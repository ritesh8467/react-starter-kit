import configureStore from './store/store';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import App from './views/app'

const store = configureStore();
const target = document.getElementById('application');

ReactDOM.render(
	<Provider store={store}>
	  	<ReduxRouter>
	  		<Route>
				<Route name="home" path="/" handler={App}/>
			</Route>
	    </ReduxRouter>
  	</Provider>,
  	target
)
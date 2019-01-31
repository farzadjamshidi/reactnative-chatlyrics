import {createStackNavigator} from 'react-navigation';
import ForgetPassword from './login/ForgetPassword';
import LockProfile from './login/LockProfile';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import Home from './login/Home';
import Chat from './login/Chat';
import SelectMenu from './login/SelectMenu';

const Login = createStackNavigator({
    SignIn:{screen:SignIn},
    SignUp:{screen:SignUp},
    ForgetPassword:{screen:ForgetPassword},
    LockProfile:{screen:LockProfile},
    Home:{screen:Home},
    Chat:{screen:Chat},
    SelectMenu:{screen:SelectMenu},
},
{
    headerMode: 'none'
}
)

export default Login;
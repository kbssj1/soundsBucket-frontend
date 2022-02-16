import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import{ Main, 
        ArtistChannelList, 
        ArtistChannelDetail, 
        PreviewChannel, 
        SignIn, 
        SignUp, 
        SignupCompleted, 
        MyPage, 
        QnA, 
        ResetPassword, 
        ArtistChannelRequest, 
        ArtistChannelRequestForm, 
        Page404, 
        PasswordResetForm 
      } from "./pages/index";
import { Header } from "./components/index";
import { ThemeProvider} from "styled-components"
import theme from "./constants/theme";
import { Provider } from 'react-redux';
import store from "./system/redux/store";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header history={history} />
        <Router history={history}>
          <Switch>
            <Route exact={true} path={["/kr","/"]} component={Main} />
            <Route exact={true} path="/kr/channel" component={ArtistChannelList} />
            <Route exact={false} path="/kr/channel/:index" component={ArtistChannelDetail} />
            <Route exact={true} path="/kr/preview" component={PreviewChannel} />
            <Route exact={true} path="/kr/request_artist_channel" component={ArtistChannelRequest} />
            <Route exact={true} path="/kr/request_artist_channel/form" component={ArtistChannelRequestForm} />
            <Route exact={true} path="/kr/signin" component={SignIn} />
            <Route exact={true} path="/kr/signup" component={SignUp} />
            <Route exact={true} path="/kr/signup/completed" component={SignupCompleted} />
            <Route exact={true} path="/kr/request_password_reset" component={ResetPassword} />
            <Route exact={true} path="/kr/password_reset_form" component={PasswordResetForm} />
            <Route exact={false} path="/kr/qna" component={QnA} />
            <Route exact={false} path="/kr/mypage" component={MyPage} />
            <Route path="*" component={Page404} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
    );
}

export default App;

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import {Provider} from "react-redux";
import store from "./store/store";
import {WithSuspense} from "./components/HOC/withSuspense"
// @ts-ignore
const  Gallery = React.lazy(() => import('./components/gallery /gallery'))

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Switch>
                        <Route exact path={"/"} render={WithSuspense(Gallery)}/>
                    </Switch>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;

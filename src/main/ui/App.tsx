import React, {useEffect} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Header} from "./components/header/Header";
import {Routes} from "./components/routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {meTC} from "../bll/authorization-reducer";
import {AppStateType} from "../bll/store";

const App:React.FC = () => {
    const isInitialized = useSelector<AppStateType, boolean > ( state => state.auth.isInitialized )
    const dispatch = useDispatch ()
    useEffect(()=>{
        dispatch(meTC())
    },[])

    if (!isInitialized) {
        return <div
            style={ {position: 'fixed', top: '30%', textAlign: 'center', width: '100%'} }>
            loading
        </div>
    }


    return (<HashRouter>
            <div className="App">
                <Header/>
                <Routes/>
            </div>
        </HashRouter>
    );
};

export default App;

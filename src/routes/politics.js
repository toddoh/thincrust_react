import React, { lazy, Suspense, Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

import loader from '~/styles/transitions/loader.css';
const TrumpFirstYear = lazy(() => import('~/routes/politics/TrumpFirstYear'));

import store from '~/store';
import { APP_BACKGROUND_THEME } from '~/constants/actionTypes';
import { getCurrentBackgroundTheme } from '~/selectors/appBackgroundTheme';


const sections = [
    {
        name: 'TrumpFirstYear',
        id: 'TrumpFirstYear'
    }
];

function Politics({match}) {
    
    useEffect(() => {
        store.dispatch({ type: APP_BACKGROUND_THEME, state: { id: 'white' } })
    }, []);
    
    return (
        <div>
            <h1>Topics</h1>
            <ul>
                {sections.map(({ name, id }) => (
                    <li key={id}>
                        <Link to={`${match.url}/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            
            <Suspense fallback={<div className={loader.crust__loader}></div>}>
                <Route path={`${match.path}/TrumpFirstYear/:typeId?`} component={TrumpFirstYear} />
            </Suspense>
        </div>
    )
}


export default Politics;
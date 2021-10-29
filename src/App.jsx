import React, { useEffect } from 'react'

import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import "animate.css"

import hardwareback from './utility/HardwareBack/HardwareBack';
import Initializer from './pages/Initializers/Initializer';
import CalculatePage from './pages/CalculatePage/CalculatePage';
import FormulaCatalogue from './pages/FormulaCatalogue/FormulaCatalogue';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import CentrifugalPumps from './pages/_LessonPages/CentrifugalPumps';
import ReciprocatingPumps from './pages/_LessonPages/ReciprocatingPumps';

const App = () => {

  useEffect(() => {
      hardwareback()
  }, []);

  return (
    <IonApp>
        <IonReactRouter>

          <IonRouterOutlet>

            <Route exact path="/init" component={Initializer} />
            <Route exact path="/start" component={HomePage} />
            <Route exact path="/home" component={CalculatePage} />
            <Route exact path="/formula" component={FormulaCatalogue} />
            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/lessons/centrifugal" component={CentrifugalPumps}/>
            <Route exact path="/lessons/reciprocating" component={ReciprocatingPumps}/>

            <Redirect from="/" to="/init" exact/>

          </IonRouterOutlet>

        </IonReactRouter>
    </IonApp>
  )

}

export default App;

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import { HomeScreen } from '../pages/HomeScreen'
import { NotFound } from '../pages/NotFound'
import { Layout } from './Layout'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Layout >
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
            <Route exact path="/badges/:badgeId/edit" component={BadgeNew} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

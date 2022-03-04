import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import confLogo from '../images/badge-header.svg';
import './styles/Badges.css';
import api from '../api'
import { PageLoading } from './PageLoading';
import { ErrorLoading } from './ErrorLoading';
import { BadgesList } from '../components/BadgesList';

export default class Badges extends Component {

  state = {
    nextPage: 1,
    error: null,
    loading: true,
    data: []
  };

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    })
    try {
      let data = await api.badges.list();
      this.setState({
        loading: false,
        data
      })
    } catch (error) {
      this.setState({
        loading: false,
        error
      })
      console.log({
        error
      })
    }
    
  }
  timeoutId
  constructor(props){
    super(props)
    console.log('1--contructor')
    this.state = {
      data: [],
      loading: true,
      error: null,
    }
  }

  componentDidMount(){
    this.fetchData();
    console.log('3--componentDidMount')
  }

  componentWillUnmount() {
    console.log('--componentWillUnmount')
    clearTimeout(this.timeoutId)

  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log({
      txt: 'componentDidUpdate',
      prevProps,
      prevState
    })

    console.log({
      txt: 'actual',
      props: this.props,
      state: this.state
    })
  }

  render() {

    if (this.state.loading === true) {
      return <PageLoading />;
      // return 'Loading ...';
    }

    if (this.state.error) {
      // return `Error ${this.state.error.message}`;
      return <ErrorLoading />
    }

    console.log('2--render')
    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img 
                className="Badges__conf-logo" 
                src={confLogo} alt="Conf Logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList loading={this.state.loading} badges={this.state.data.reverse()}/>
            </div>
          </div>

          
          {/* {
            !this.state.loading && (
              <button className="btn btn-primary" onClick={()  => this.fetchData()}>Next</button>
            )
          } */}

        </div>
      </>
    )
  }
}

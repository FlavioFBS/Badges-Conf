import React, { Component } from 'react'

import { PageLoading } from './PageLoading';
import { ErrorLoading } from './ErrorLoading';

import api from '../api'
import './styles/BadgeDetails.css'
import { BadgeDetails } from './BadgeDetails';

export default class BadgeDetailsContainer extends Component {


  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})
    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({loading: false, data})
    } catch (error) {
      this.setState({loading: false, error})
      
    }
  }
  
  handleOpenModal = () => {
    this.setState({modalIsOpen: true})
  }

  handleCloseModal = () => {
    this.setState({modalIsOpen: false})
  }

  handleDeleteBadge = async (e) => {
    this.setState({loading: true, error: null})
    try {
      await api.badges.remove(this.props.match.params.badgeId)

      this.props.history.push('/badges')

    } catch (error) {
      this.setState({loading: false, error})
    }
  }

  render() {

    if (this.state.loading) {
      return <PageLoading />
    }
    if (this.state.error) {
      return <ErrorLoading message={this.state.error} />
    }



    return (
      <BadgeDetails 
        onCloseModal={this.handleCloseModal} 
        onOpenModal={this.handleOpenModal} 
        modalIsOpen={this.state.modalIsOpen} 
        badge={this.state.data}
        onDeleteBadge={this.handleDeleteBadge}
      />
    )
  }
}


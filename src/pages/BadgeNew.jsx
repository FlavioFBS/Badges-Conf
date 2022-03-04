import React, { Component } from 'react';
import Badge from '../components/Badge';
import confLogo from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import './styles/BadgeNew.css';
import api from '../api';
import { PageLoading } from './PageLoading';
import Swal from 'sweetalert2';

export default class BadgeNew extends Component {

  state = {
    loading: false,
    error: null,
    isEdit: false,
    idBadges: '',
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({
      loading: true,
      error: null
    })
    try {
      if (this.state.isEdit) {
        await api.badges.update(this.state.idBadges, this.state.form)
      } else {
        await api.badges.create(this.state.form)
      }
      this.setState({
        loading: false
      })
      swalFireMessage('success', 'Cool!', 'El badge se registró con éxito')
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({
        loading: false,
        error
      })
      swalFireMessage('error', 'Error!', this.state.error)
    }
  }

  async componentDidMount() {
    this.setState({
      loading: true
    })
    let urlSplit = this.props.location.pathname.split('/')
    if (urlSplit[1]==='badges' && urlSplit[3]==='edit') {
      try {
        let data = await api.badges.read(urlSplit[2])
        this.setState({
          isEdit: true,
          loading: false,
          idBadges: urlSplit[2],
          form: {...data}
        })
      } catch (error) {
        this.setState({
          loading: false,
          error
        })
        swalFireMessage('error', 'Error!', this.state.error)
      }
    } else {
      this.setState({
        loading: false,
        error: null
      })
    }
  }

  render() {

    if (this.state.loading === true) {
      return <PageLoading />;
      // return 'Loading ...';
    }

    return (
      <>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image" src={confLogo} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'} 
                lastName={this.state.form.lastName ||'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'twitterr'}
                email={this.state.form.email}
              />
            </div>

            <div className="col">
              <BadgeForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                handleChange={this.handleChange} 
                formValues={this.state.form}
                update={this.state.isEdit}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

function swalFireMessage(type, title, message) {
  Swal.fire({
    title: title,
    text: message,
    icon: type,
    confirmButtonText: 'Ok'
  })
}

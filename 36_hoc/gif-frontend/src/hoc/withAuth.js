import React from 'react'

const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      // either the user is null because we're still loading, or because we've loaded and login failed
      const redirect = !this.props.auth.current_user && !this.props.auth.loading
      if (redirect) {
        this.props.history.push('/')
      }
    }

    render() {
      /*
        this.props = {
          auth: {
            current_user: <some user>,
            loading: false
          }
          history: ReactRouterHistoryObject
        }
      }
      <WrappedComponent auth={{current_user: <some user>, loading: false}} history={ReactRouterHistoryObject} />
      */
      return (this.props.auth.loading ?
        <img src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
        :
        <WrappedComponent {...this.props} />
      )
    }
  }
}

export default withAuth;

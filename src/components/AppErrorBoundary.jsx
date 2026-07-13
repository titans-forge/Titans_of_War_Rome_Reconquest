import { Component } from 'react'

export default class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    if (this.state.failed) {
      return <main className="fatal-error"><h1>The imperial record could not be opened.</h1><p>Reload the page or clear the current campaign save.</p></main>
    }
    return this.props.children
  }
}

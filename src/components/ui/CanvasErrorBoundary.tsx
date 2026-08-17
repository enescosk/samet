import { Component, type ReactNode } from 'react'

export default class CanvasErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    console.warn('3D canvas failed to render, hiding it', error)
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

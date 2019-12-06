class CatchErrors extends React.Component {
    constructor(props) {
      super(props)
      this.state = { hasError: false}
    }
  
    static getDerivedStateFromError(error) {
        return {hasError: true };
      }

    componentDidCatch() {
        console.log('Sorry')
    }
  
    render() {
        const {hasError} = this.state
        const {children} = this.props
      return (
        <>
        {!hasError && "All Good"}
        {hasError && "Sorry"}
        {!hasError && children}
        </>
      )
    }
  }

  const BadComponent = ({
      apology = "No Apology"
    }) => (
    <h1>
      {apology}
    </h1>
  )
  
  render(
    <CatchErrors>
      <BadComponent />
    </CatchErrors>
  )
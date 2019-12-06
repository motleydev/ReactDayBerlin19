class CatchErrors extends React.Component {
    constructor(props) {
      super(props)
      this.state = { hasError: true}
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
        {hasError && <Help />}
        {!hasError && children}
        </>
      )
    }
  }

  const Help = ({}) => {
      return (
        <div>
            <form>
            <label>Name</label>
            <input />
            </form>
        </div>
        )
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
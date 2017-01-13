const React = require('react')

// TODO: reuse component from cerebro-ui when package is released
const Loading = require('./Loading')
const Header = require('./Header')
const Block = require('./Block')
const getDefinition = require('../getDefinition')
const styles = require('./styles.css')

class Preview extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
    this.fetchDefinition = this.fetchDefinition.bind(this)
  }

  componentDidMount() {
    this.timeout = setTimeout(this.fetchDefinition, 100)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  fetchDefinition() {
    getDefinition(this.props.word).then(definition => {
      this.setState({
        ...definition,
        loading: false,
      })
    }).catch(() => {
      this.setState({ error: true })
    })
  }
  render() {
    const { error, loading, blocks, header, plain } = this.state
    if (error) return <div>Can't fetch dictionary results.</div>
    if (loading) return <Loading />
    return (
      <div className={styles.preview}>
        <Header header={header} />
        {blocks.map(block => <Block key={block} block={block} />)}
        {plain && <div>{plain}</div>}
      </div>
    )
  }
}

Preview.propTypes = {
  word: React.PropTypes.string,
}

module.exports = Preview

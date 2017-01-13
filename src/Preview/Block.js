const React = require('react')
const styles = require('./styles.css')

const Block = ({ block }) => {
  const lines = block.split('\n')
  return (
    <div className={styles.definition}>
      {lines.map(line => <p key={line}>{line}</p>)}
    </div>
  )
}

Block.propTypes = {
  block: React.PropTypes.string.isRequired
}

module.exports = Block

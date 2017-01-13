const React = require('react')
const styles = require('./styles.css')

const Header = ({ header }) => {
  const { word, transcription, rest } = header
  return (
    <div className={styles.header}>
      <span className={styles.word}>{word}</span>
      {transcription && <span className={styles.transcription}>|{transcription}|</span>}
      {rest && <span className={styles.headerRest}>{rest}</span>}
    </div>
  )
}

Header.propTypes = {
  header: React.PropTypes.shape({
    word: React.PropTypes.string,
    transcription: React.PropTypes.string,
    rest: React.PropTypes.string,
  }).isRequired
}


module.exports = Header

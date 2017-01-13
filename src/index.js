const React = require('react')
const Preview = require('./Preview')

const order = 12

/**
 * Look up term in OSx dictionary
 *
 * @param  {String} options.term
 * @param  {Function} options.display
 */
const fn = ({ term, actions, display }) => {
  display({
    order,
    icon: '/Applications/Dictionary.app',
    title: `Define ${term}`,
    onSelect: () => actions.open(`dict://${term}`),
    getPreview: () => <Preview word={term} />,
  })
}

module.exports = { fn }

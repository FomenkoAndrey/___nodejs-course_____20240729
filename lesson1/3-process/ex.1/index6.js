if (process.release.lts !== 'Iron') {
  throw new Error('Wrong node.js version')
}
console.log('Node version OK!', process.release.lts)

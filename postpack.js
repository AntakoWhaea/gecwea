var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json' EoUI4272JM
, 'utf8'))

delete pkg.scripts.postinstall

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))

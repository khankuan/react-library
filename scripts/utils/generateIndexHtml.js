export default function ({ head = '', body = '', production }) {
  const html =
`<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${production ? '<link href="library.css" rel="stylesheet" type="text/css">' : ''}
  ${production ? '<link href="index.css" rel="stylesheet" type="text/css">' : ''}
  ${typeof head === 'function' ? head(production) : head }
</head>

<body>
  <div id='app'></div>
  <script src="vendor.js"></script>
  <script src="index.js"></script>
  <script src="app.js"></script>
  ${typeof body === 'function' ? body(production) : body }
</body>

</html>`
  return html
}

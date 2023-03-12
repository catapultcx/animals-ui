import createError from 'http-errors'

function initialiseErrors (app) {
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404))
  })

  // error handler
  app.use(function (err, req, res, next) {
    // console.error(err)
    let page = '500'
    switch (err.status) {
      case 500:
        break
      case 404:
        page = '404'
        break
      case 400:
        page = '400'
        break
    }
    res.status(err.status || 500)
    res.render(`errors/${page}.html`, { error: err })
  })
}

export { initialiseErrors }

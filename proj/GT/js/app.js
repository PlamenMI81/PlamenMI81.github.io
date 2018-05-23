$(() => {
  const app = Sammy('#app', function () {
    this.use('Handlebars', 'hbs')

    this.get('index.html', getWelcomePage)
    this.get('#/', getWelcomePage)

    let interval
    let error

    this.get('#/search', (ctx) => {
      let stopNum = $('#stopNum').val()
      search(stopNum, ctx)
    })

    this.get('#/search/:hash/:code', (ctx) => {
      let stopNum = ctx.params.code
      search(stopNum, ctx)
    })

    function search (stopNum, ctx) {
      notify.showLoader()
      remote.get(stopNum).then((res) => {
        let now = new Date()
        res.lines.forEach(l => {
          l.arrivals = l.arrivals.map(a => {
            let time = calculateTime(a.time, now)
            return time
          }).join(', ')
        })
        ctx.menuIcons = true
        ctx.name = res.name
        ctx.code = res.code
        ctx.hash = (+new Date()).toString(36)
        ctx.lines = res.lines
        ctx.loadPartials({
          nav: './tpl/nav.hbs'
        }).then(function () {
          this.partial('./tpl/card.hbs')
        })
        clearInterval(interval)
        error = false
        notify.hideLoader()
      }).catch(() => {
        notify.hideLoader()
        clearInterval(interval)
        error = true
        ctx.redirect('#/')
      })
    }

    function getWelcomePage (ctx) {
      if (error) {
        ctx.error = error
      }
      ctx.menuIcons = false
      ctx.loadPartials({
        nav: './tpl/nav.hbs',
        error: './tpl/error.hbs'
      }).then(function () {
        this.partial('./tpl/stopSearch.hbs').then(() => {
          $('.carousel').carousel()
          interval = setInterval(function () {
            $('.carousel').carousel('next')
          }, 3000)
        })
      })
    }

    function calculateTime (arriveTime, currentTime) {
      let startTime = moment(currentTime, 'HH:mm:ss a')
      let endTime = moment(arriveTime, 'HH:mm:ss a')
      let duration = moment.duration(endTime.diff(startTime))
      let hours = parseInt(duration.asHours())
      let minutes = parseInt(duration.asMinutes()) % 60
      if (hours === 0) {
        return `${minutes}m`
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      return `${hours}h${minutes}m`
    }
  })
  app.run()
})

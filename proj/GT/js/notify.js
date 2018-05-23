let notify = (() => {
  let busyi

  function showInfo (message) {
    let infoBox = $('#infoBox')
    infoBox.find('span').text(message)
    infoBox.fadeIn()
    setTimeout(() => infoBox.fadeOut(), 3000)
  }

  function showError (message) {
    let errorBox = $('#errorBox')
    errorBox.find('span').text(message)
    errorBox.fadeIn()
    setTimeout(() => errorBox.fadeOut(), 3000)
  }

  function handleError (reason) {
    showError(reason.responseJSON.description)
  }

  function showLoader () {
    let loaderDiv = $('#busybox')
    loaderDiv.fadeIn()
  }

  function hideLoader () {
    let loaderDiv = $('#busybox')
    loaderDiv.fadeOut()
  }

  return {
    showInfo,
    showError,
    handleError,
    showLoader,
    hideLoader
  }
})()

for (let index = 1; index < 2000; index++) {
  const element = document.createElement('span')
  element.classList.add('pixel')
  document.querySelector('.container').appendChild(element)
}
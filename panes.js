const panes = document.querySelectorAll('.pane')
const neos = document.querySelectorAll('.neo')
const tbs = document.querySelectorAll('.tb')

let z = 1


neos.forEach((neo) => {
  const title = neo.querySelector('.title')
  const corner = neo.querySelector('.corner')

  neo.addEventListener('mousedown', () => {
    z = z + 1
    neo.style.zIndex = z
  })

  title.addEventListener('mousedown', (event) => {
    neo.classList.add('is-dragging')

    let l = neo.offsetLeft
    let t = neo.offsetTop

    let startX = event.pageX
    let startY = event.pageY

    const drag = (event) => {
      event.preventDefault()

      neo.style.left = l + (event.pageX - startX) + 'px'
      neo.style.top = t + (event.pageY - startY) + 'px'
    }

    const mouseup = () => {
      neo.classList.remove('is-dragging')

      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', mouseup)
  })

  corner.addEventListener('mousedown', (event) => {
    let w = neo.clientWidth
    let h = neo.clientHeight

    let startX = event.pageX
    let startY = event.pageY

    const drag = (event) => {
      event.preventDefault()

      neo.style.width = w + (event.pageX - startX) + 'px'
      neo.style.height = h + (event.pageY - startY) + 'px'
    }

    const mouseup = () => {
      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', mouseup)
  })
})


panes.forEach((pane) => {
  const title = pane.querySelector('.title')
  const corner = pane.querySelector('.corner')

  pane.addEventListener('mousedown', () => {
    z = z + 1
    pane.style.zIndex = z
  })

  title.addEventListener('mousedown', (event) => {
    pane.classList.add('is-dragging')

    let l = pane.offsetLeft
    let t = pane.offsetTop

    let startX = event.pageX
    let startY = event.pageY

    const drag = (event) => {
      event.preventDefault()

      pane.style.left = l + (event.pageX - startX) + 'px'
      pane.style.top = t + (event.pageY - startY) + 'px'
    }

    const mouseup = () => {
      pane.classList.remove('is-dragging')

      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', mouseup)
  })

  corner.addEventListener('mousedown', (event) => {
    let w = pane.clientWidth
    let h = pane.clientHeight

    let startX = event.pageX
    let startY = event.pageY

    const drag = (event) => {
      event.preventDefault()

      pane.style.width = w + (event.pageX - startX) + 'px'
      pane.style.height = h + (event.pageY - startY) + 'px'
    }

    const mouseup = () => {
      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', mouseup)
  })
})

tbs.forEach((tb) => {
  const title = tb.querySelector('.title')
  const corner = tb.querySelector('.corner')

  tb.addEventListener('mousedown', () => {
    z = z + 1
    tb.style.zIndex = z
  })

  title.addEventListener('mousedown', (event) => {
    tb.classList.add('is-dragging')

    let l = tb.offsetLeft
    let t = tb.offsetTop

    let startX = event.pageX
    let startY = event.pageY

    const drag = (event) => {
      event.preventDefault()

      tb.style.left = l + (event.pageX - startX) + 'px'
      tb.style.top = t + (event.pageY - startY) + 'px'
    }

    const mouseup = () => {
      tb.classList.remove('is-dragging')

      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', mouseup)
  })

  corner.addEventListener('mousedown', (event) => {
    let w = tb.clientWidth
    let h = tb.clientHeight

    let startX = event.pageX
    let startY = event.pageY

    const drag = (event) => {
      event.preventDefault()

      tb.style.width = w + (event.pageX - startX) + 'px'
      tb.style.height = h + (event.pageY - startY) + 'px'
    }

    const mouseup = () => {
      document.removeEventListener('mousemove', drag)
      document.removeEventListener('mouseup', mouseup)
    }

    document.addEventListener('mousemove', drag)
    document.addEventListener('mouseup', mouseup)
  })
})

// Closes Containers 
const closeButtons = document.querySelectorAll('.close-container');

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
     const container = button.closest('.neo') || button.closest('.pane')  || button.closest('.tb');
    if (container) {
      container.style.display = 'none';
    }
  });
});
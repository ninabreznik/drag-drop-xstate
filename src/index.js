const XState = require('xstate')
console.log(XState)
const { Machine, interpret, assign } = XState

// create a box and append it to the body
var box = document.createElement('div')

box.style.backgroundColor = 'green'
box.style.position = 'absolute'
box.style.width = '50px'
box.style.height = '50px'
box.id = 'box'

const body = document.body
body.style.position = 'relative'
body.style.height = '100vh'
// body.style.width = '100%'

body.appendChild(box)

// create a state machine

const dragDropMachine = Machine({
  initial: 'idle',
  context: {
    x: 0,
    y: 0,
    pointerx: 0,
    pointery: 0,
    dx: 0,
    dy: 0
  },
  states: {
    idle: {
      on: {
        mousedown: {
          target: 'dragging',
          actions: assign((context, mouseEvent) => {
            return {
              ...context,
              pointerx: mouseEvent.clientX,
              pointery: mouseEvent.clientY
            }
          })
        },
      }
    },
    dragging: {
      on: {
        mousemove: {
          target: 'dragging',
          actions: assign((context, mouseEvent) => {
            return {
              ...context,
              dx: mouseEvent.clientX - context.pointerx,
              dy: mouseEvent.clientY - context.pointery
            }
          })
        },
        mouseup: {
          target: 'idle',
          actions: assign((context, mouseEvent) => {
            return {
              ...context,
              x: context.x + context.dx,
              y: context.y + context.dy,
              dx: 0,
              dy: 0
            }
          })
        }
      }
    }
  }
})

// create event tracker/service

const dragDropService = interpret(dragDropMachine)
  .onTransition(state => {
    if (state.changed) {
      console.log(state.context)
      body.dataset.state = state.toStrings().join(' ')
      box.style.left = state.context.x + state.context.dx + 'px'
      box.style.top = state.context.y + state.context.dy + 'px'
    }
  })
  .start()

  // add event listeners

  body.addEventListener('mousedown', event => {
    dragDropService.send(event)
  })
  body.addEventListener('mouseup', event => {
    dragDropService.send(event)
  })
  body.addEventListener('mousemove', event => {
    dragDropService.send(event)
  })

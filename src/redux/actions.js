
const eatAction = (value) => {
  return {
    type: 'EAT_JAM',
    jam: value
  }
}

const stackAction = (value) => {
  return {
    type: 'STACK_JAM',
    jam: value
  }
}

export { eatAction, stackAction }
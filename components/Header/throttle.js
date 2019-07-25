const throttle = (fn, threshold) => {
  let last = 0
  return (...args) => {
    const now = Date.now()
    if (now - last > threshold) {
      fn(...args)
      last = now
    }
  }
}

export default throttle

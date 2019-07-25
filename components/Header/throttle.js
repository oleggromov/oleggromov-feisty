const throttle = (fn, threshold) => {
  let last = 0
  let timeout
  return (...args) => {
    const now = Date.now()
    clearTimeout(timeout)
    if (now - last > threshold) {
      fn(...args)
      last = now
    } else {
      setTimeout(() => {
        fn(...args)
        last = now
      }, threshold)
    }
  }
}

export default throttle

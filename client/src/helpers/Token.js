function generateToken() {
  return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
}

export default generateToken;
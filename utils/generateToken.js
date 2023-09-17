import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, "absadascdsfsdfsd", {
    expiresIn: '30d',
  })
}

export default generateToken
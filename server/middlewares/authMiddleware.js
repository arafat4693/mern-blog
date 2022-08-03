export function verifyUser(req, res, next) {
  const { userId } = req.params
  if (!req.isAuthenticated()) {
    res.status(401)
    throw new Error("Please login first.")
  }
  if (req.user._id.toString() !== userId) {
    res.status(403)
    throw new Error("You are not authorized.")
  }
  next()
}

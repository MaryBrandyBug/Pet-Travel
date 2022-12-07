module.exports = function (req, res, next) {
  if (req.session.auth) {
    next();
  } else {
    res.status(403).json({ msg: 'Unauthorized' });
  }
};

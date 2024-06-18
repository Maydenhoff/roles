const validateUserMiddleware = () => {
    return async (req, res, next) => {
      console.log("llegue");
    const accessToken = req.headers["authorization"];
    if (!accessToken) return res.send("Access denied");
    try {
      const token = accessToken.split(" ")[1];
      const decoded = jwt.decode(token, process.env.SECRET);
      // console.log(decoded);
      const userId = decoded.id;

    } catch (error) {
        // console.log(error);
    }
  }
};

module.exports = validateUserMiddleware;

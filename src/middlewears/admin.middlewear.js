const adminmiddlewear = async(req,res,next)=>{
    try {
        const token = req.headers["authorization"].split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_ADMIN, (err, decode) => {
          if (err) {
            return res
              .status(401)
              .send({ success: false, message: "Un Authorized Admin" });
          } else {
            req.body.id = decode.id;
            next();
          }
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Please Provide Auth Token",
          error,
        });
      }
}

module.exports={
    adminmiddlewear
}
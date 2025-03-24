import { Router } from "express";

const apiRoutes = Router();

apiRoutes.use("/users", (req, res) => {
  res.send("Users route");
});

export { apiRoutes };

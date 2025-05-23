import express, { Request, Response } from "express";
import authJwt from "../../middlewares/authJwt";
import { services } from "../services/product-services";
import { validators } from "../../middlewares/validators";
const router = express.Router();
const group = express.Router();

/**
 * 제품 전체 조회
 */
router.get("/product/select", async (req: Request, res: Response) => {
  try {
    const result = await services.selectProduct();
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
/**
 * 제품 전체 조회
 */
router.get(
  "/product/select/:id",
  validators.params(["id"]),
  async (req: Request, res: Response) => {
    try {
      // console.log("제품 상세 조회 컨트롤러 id: ", req.params.id);
      const productId: number = parseInt(req.params.id);
      const result = await services.selectDetailProduct(productId);
      res.send(result);
      // res.send("rnt");
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

// router를 export
export default router;

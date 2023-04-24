import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/product';

const handle = async (res, req) => {
  await mongooseConnect();
  const ids = req.body.ids;
  res.json(await Product.find({ _id: ids }))
}

export default handle

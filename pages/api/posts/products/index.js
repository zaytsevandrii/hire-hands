import { getSession } from 'next-auth/react';
import Product from '../../../../models/Product';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session || !session.user.isAdmin) {
    return res.status(401).send('admin авторизация обязательна!');
  }
  // const { user } = session;
  if (req.method === 'GET') {
    return getHandler(req, res);
  }else if (req.method === 'POST') {
    return postHandler(req, res);
  }else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};

const getHandler = async (req, res) => {
  await db.connect();
  const products = await Product.find({category:'Серебро'});
  await db.disconnect();
  res.send(products);
};

const postHandler = async (req, res) => {
  await db.connect();
  const newProduct = new Product({
    name: 'имя',
    slug: 'name-' + Math.random(),
    image: '/images/ring1.jpg',
    price: 0,
    salePrice:0,
    category: 'Серебро',
    countInStock: 0,
    description: 'описание',
  });

  const product = await newProduct.save();
  await db.disconnect();
  res.send({ message: 'Товар успешно создан', product });
};

export default handler;
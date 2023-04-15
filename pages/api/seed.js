/* import User from '../../models/User';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler; */
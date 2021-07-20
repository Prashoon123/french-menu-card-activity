import desserts from "../../data/desserts.json";

export default async (req, res) => {
  res.send(desserts);
};

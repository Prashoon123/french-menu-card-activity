import drinks from "../../data/drinks.json";

export default async (req, res) => {
  res.send(drinks);
};

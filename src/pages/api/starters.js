import starters from "../../data/starters.json";

export default async (req, res) => {
  res.send(starters);
};

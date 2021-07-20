import dishes from "../../data/dishes.json";

export default async (req, res) => {
  res.send(dishes);
};

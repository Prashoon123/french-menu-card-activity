import salads from "../../data/salads.json";

export default async (req, res) => {
  res.send(salads);
};

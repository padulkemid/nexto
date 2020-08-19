export default function Jadah(req, res) {
  const struct = {
    status: 201,
    message: 'Tai anjing!',
  };
  res.status(201).json(struct);
}

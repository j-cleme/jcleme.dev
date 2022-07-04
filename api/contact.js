export default async function handler(req, res) {
  const { body } = req;
  console.log(body);
  // return res.send(`Hello ${body.name}, you just parsed the request body!`);
  res.statusCode = 308
  res.setHeader('location', '/contact')
  // Caching headers
  // res.set('Cache-control', 's-maxage=600')
  return res.end() //TODO
}

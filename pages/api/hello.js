// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'Ram Farid',
    age: 'Not allowed',
    student: true,
    job: 'Web devolper',
    jobTitle: 'Front-end devolper',
  })
}

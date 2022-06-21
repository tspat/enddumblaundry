export default async (req, res) => {
  const email = req.body.emailAddress

  try {
    const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/9146160/dc883473-0bc1-4a27-a0c4-dca200f6ce21', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "fields": [
          {
            "objectTypeId": "0-1",
            "name": "email",
            "value": email
          }
        ],
        "context": {
          "hutk": ":hutk",
          "pageUri": "www.stopdumblaundry.com/",
          "pageName": "Stop Dumb Laundry"
        }
      })
    })

      if (response.status === 200) {
        res.statusCode = 200
        res.end()
      } else {
        res.statusCode = 400
        res.end()
      }
  } catch { }
}

export default async (req, res) => {
  const email = req.body.emailAddress

  try {
    const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/9146160/f0e5fe5a-31cc-4018-9596-024ea565375c', {
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
          "pageUri": "www.earnfreelaundry.com/",
          "pageName": "Earn Free Laundry With Tumble"
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

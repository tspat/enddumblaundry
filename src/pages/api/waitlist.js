export default async (req, res) => {
  const mail = req.body.address

  try {
    const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/9146160/a35d8672-030a-485c-af83-0f2d22e215b0', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "fields": [
          {
            "objectTypeId": "0-1",
            "name": "email",
            "value": mail
          }
        ],
        "context": {
          "pageUri": "www.earnfreelaundry.com/",
          "pageName": "Waitlist"
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

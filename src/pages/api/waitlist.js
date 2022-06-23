export default async (req, res) => {
  const mail = req.body.address

  try {
    const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/9146160/28a96abf-f0db-4d59-b7ee-b3c9901f96d9', {
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
          "pageUri": "www.dumblaundry.com/",
          "pageName": "Apartmentalize"
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

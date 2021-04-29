import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/test_body_pareser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_pareser')
      .send({ name: 'Eu' })
      .expect({ name: 'Eu' })
  })
})

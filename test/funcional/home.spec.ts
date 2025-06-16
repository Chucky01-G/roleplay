import app from '@adonisjs/core/services/app'
import { test } from 'japa'
import supertest from 'supertest'

test.group('Home Route', () => {
  test('GET / deve retornar 200', async (assert) => {
    const response = await supertest(app.httpServer).get('/')
    assert.equal(response.status, 200)
  })
})

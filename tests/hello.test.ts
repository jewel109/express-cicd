
import request from 'supertest'
import app from '../lib'


describe("Testing if server working", () => {

  test("should accessable route /hello", async () => {
    const response = await request(app).get("/hello")
    // console.log(response.body)
    expect(response.body).toHaveProperty("data")
    expect(response.status).toBe(200)
  })
})

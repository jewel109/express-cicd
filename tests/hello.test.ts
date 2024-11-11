
import request from 'supertest'
import { uri } from '..'



describe("Testing if server working", () => {

  test("should accessable route /hello", async () => {
    const response = await request(uri).get("/hello")
    // console.log(response.body)
    expect(response.body).toHaveProperty("data")
    expect(response.status).toBe(200)
  })
})

import app, { port } from "./lib"

if (process.env.ENV !== "") {
  app.listen(port, () => {
    console.log(`server listening in port ${port}`)
  })

}

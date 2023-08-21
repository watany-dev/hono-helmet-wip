import { Hono } from 'hono'
import { secureHeaders } from 'hono/secure-headers'

const app = new Hono()

app.use('*', secureHeaders())
app.all('*', async (c) => {
  return c.text("Hello!")
})

export default app
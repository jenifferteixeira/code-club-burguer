import { Router }  from "express"

const routes = new Router()

routes.get('/', (request, response) => {
    return response.json({message: "oieee"})
})

export default routes
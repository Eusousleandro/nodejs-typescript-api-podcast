import { createServer, IncomingMessage, ServerResponse } from "http";
import { getFilterEpisode, getListEpisode } from './controllers/podcastController'
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/httpMethods";

const server = createServer( async (request: IncomingMessage, response: ServerResponse) => {

    const baseUrl = request.url?.split("?")[0];
    
    if(request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
        await getListEpisode(request, response);
    }

    if(request.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisode(request, response)
    }
})


export { server }
import { IncomingMessage, ServerResponse } from "http";
import { listEpisodesService } from "../services/listEpisodesService"
import { filterEpisodesService } from "../services/filterEpisodesService";
import { ContentType } from "../utils/contenType";
import { IPodCastTransf } from "../inteface/IFilterPodcast";

const getListEpisode = async (request: IncomingMessage, response: ServerResponse) => {

    const content: IPodCastTransf = await listEpisodesService();

    response.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
    response.write(JSON.stringify(content));

    response.end();
}

const getFilterEpisode = async(request: IncomingMessage, response: ServerResponse) => {
    
        const content: IPodCastTransf = await filterEpisodesService(request.url);

        response.writeHead(content.statusCode, { "Content-Type": ContentType.JSON })
        response.write(JSON.stringify(content));

        response.end();
}

export {
    getListEpisode,
    getFilterEpisode
}
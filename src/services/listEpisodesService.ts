import { IPodCastTransf } from "../inteface/IFilterPodcast";
import { podcastRepository } from "../repositories/podcastRepository";
import { StatusCode } from "../utils/statusCode";

const listEpisodesService = async ():Promise<IPodCastTransf> => {
    let responseFormt: IPodCastTransf = {
        statusCode: 0,
        body: []
    }

    const data = await podcastRepository();

    responseFormt = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    }

    return responseFormt;
}

export { listEpisodesService }
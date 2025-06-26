import { IPodCastTransf } from "../inteface/IFilterPodcast";
import { podcastRepository } from "../repositories/podcastRepository";
import { StatusCode } from "../utils/statusCode";

const filterEpisodesService = async (podcastName: string | undefined):Promise<IPodCastTransf> => {

    let responseFormt: IPodCastTransf = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?p=")[1] ?? "";
    const data = await podcastRepository(queryString);

    responseFormt.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    responseFormt.body = data

    return responseFormt;
}

export { filterEpisodesService }
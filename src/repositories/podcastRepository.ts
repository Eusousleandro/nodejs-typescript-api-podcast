import fs from "fs";
import path from "path";

import { IPodCast } from "../inteface/IPodCast";

const pathData = path.join(__dirname, "../repositories/podcast.json");

const podcastRepository = async (podcastName?: string):Promise<IPodCast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

    if(podcastName) {
        jsonFile = jsonFile.filter((podcast: IPodCast) => podcast.podcastName === podcastName)
    }

    return jsonFile;
}

export { podcastRepository };
import axios from "axios"
import { getRealTimeDatabase } from "firebase-utils-server"

export class SlackNotifier {
    constructor(private path: string){}
    async sendMessage(message: string): Promise<string>{
        let result = 'failed'
        try {
            result = await axios.post(
                this.path,
                JSON.stringify({
                    text: message
                })
            )
        }catch(e){
            if (e instanceof Error) {
                result = e.message
            }
        }
        return result
    }
}

export async function getSlackNotifier (channel: string): Promise<SlackNotifier> {
    const rdb = await getRealTimeDatabase()
    const ch = await rdb.get(await rdb.getReference('settings/slack/webhook/' + channel)) as string
    return new SlackNotifier(ch)
}
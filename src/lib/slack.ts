import axios from "axios"

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
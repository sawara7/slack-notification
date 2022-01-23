export declare class SlackNotifier {
    private path;
    constructor(path: string);
    sendMessage(message: string): Promise<string>;
}
export declare function getSlackNotifier(channel: string): Promise<SlackNotifier>;

export declare class SlackNotifier {
    private path;
    constructor(path: string);
    sendMessage(message: string): Promise<string>;
}

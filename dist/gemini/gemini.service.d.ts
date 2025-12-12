export declare class GeminiService {
    private apiKey;
    chat(message: string): Promise<{
        reply: any;
    }>;
}

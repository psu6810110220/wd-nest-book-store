import { GeminiService } from './gemini.service';
export declare class GeminiController {
    private readonly geminiService;
    constructor(geminiService: GeminiService);
    chat(body: {
        message: string;
    }): Promise<{
        reply: any;
    }>;
}

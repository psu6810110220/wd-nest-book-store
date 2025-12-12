"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let GeminiService = class GeminiService {
    apiKey = "AIzaSyB0uXmgPNXXBdqOWa5qrEIRoL0WV8qfWqk".trim();
    async chat(message) {
        console.log("🚀 Final Test: Gemini 1.5 Flash (API Enabled)...");
        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`;
            const response = await axios_1.default.post(url, {
                contents: [{ parts: [{ text: message }] }]
            }, {
                headers: { 'Content-Type': 'application/json' }
            });
            const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
            return { reply: text || "AI ไม่ตอบกลับ" };
        }
        catch (error) {
            console.error("❌ Error:", error.response?.data || error.message);
            return { reply: "AI Error: " + (error.response?.data?.error?.message || error.message) };
        }
    }
};
exports.GeminiService = GeminiService;
exports.GeminiService = GeminiService = __decorate([
    (0, common_1.Injectable)()
], GeminiService);
//# sourceMappingURL=gemini.service.js.map
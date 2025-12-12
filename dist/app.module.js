"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const book_category_module_1 = require("./book-category/book-category.module");
const book_module_1 = require("./book/book.module");
const fixtures_module_1 = require("./fixtures/fixtures.module");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const jwt_auth_guard_1 = require("./auth/guards/jwt-auth.guard");
const gemini_controller_1 = require("./gemini/gemini.controller");
const gemini_service_1 = require("./gemini/gemini.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT || '5432') || 5432,
                username: process.env.DB_USERNAME || 'postgres',
                password: process.env.DB_PASSWORD || 'postgres',
                database: process.env.DB_NAME || 'bookstore-dev',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
                dropSchema: true,
            }),
            book_category_module_1.BookCategoryModule,
            book_module_1.BookModule,
            fixtures_module_1.FixturesModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
        ],
        controllers: [
            app_controller_1.AppController,
            gemini_controller_1.GeminiController
        ],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            gemini_service_1.GeminiService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
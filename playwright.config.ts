import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config({path: ".env.test"});

export default defineConfig ({

    testDir: 'src/tests/',
    fullyParallel: true,
    workers: 1,
    reporter: [["html"]],
    expect:{
        timeout: 10000
    },
    use: {
        baseURL: process.env.BASE_URL,
        screenshot: "on",
        video: "on",
        headless: false,
        browserName: 'chromium'
    }

})
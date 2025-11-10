import { test, expect } from "@playwright/test";
import { TIMEOUT } from "dns";

test.describe("Login page tests", () => {

    test(" Verify Complete User Registration Flow with Account Cleanup", async ({ page, baseURL }) => {
        const signup = new Signup(page);

        await signup.visit(baseURL);
        await signup.signUpWithCredentials();

    });


});
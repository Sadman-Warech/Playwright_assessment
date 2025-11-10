import { test, expect } from "@playwright/test";
import Signup from "../../pages/Signup";
import { TIMEOUT } from "dns";

test.describe("Login page tests", () => {

    test(" Verify Complete User Registration Flow with Account Cleanup", async ({ page, baseURL }) => {
        const signup = new Signup(page);

        await signup.visit('/');
        await signup.signUpWithCredentials();

    });


});
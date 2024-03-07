import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

dotenv.config();

async function predict(model: string, prompt: string) {
    const HF_API_TOKEN: string = process.env.HF_API_TOKEN || "";
    const inference = new HfInference(HF_API_TOKEN);
    const result = await inference.textGeneration({
        model: model,
        inputs: prompt,
    });

    return result;
}

export const continuousOnlinePrompt = async (
    model: string = "google/flan-t5-xxl",
) => {
    let prompt = await rl.question(
        `Hi! This is ${model}, how can I help today?\n`,
    );

    try {
        while (true) {
            const answer = await predict(model, prompt);
            prompt = await rl.question(`${answer.generated_text}\n`);
        }
    } catch (err) {
        console.error(err);
    }
};


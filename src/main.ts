import { getPDFPagesAsStrings } from "./pdf-interface.js";

async function main() {
    const pages = await getPDFPagesAsStrings("./../assets/bard-spells.pdf");
    console.log(pages);
}

main();

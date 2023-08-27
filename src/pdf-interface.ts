import pdfjs, { PDFDocumentProxy } from "pdfjs-dist"; // does work
import * as fs from "fs/promises";

const { getDocument } = pdfjs;

async function getPDFPromise(
    filePathString: string,
): Promise<PDFDocumentProxy> {
    const filePath = new URL(filePathString, import.meta.url);
    const fileBytes = new Uint8Array(await fs.readFile(filePath));
    return await getDocument(fileBytes).promise;
}

export async function getPDFPagesAsStrings(filePathString: string) {
    try {

        const pdfPromise = await getPDFPromise(filePathString);
        console.log("[getPDF]: PDF loaded from path", filePathString, "\n\n");

        const numPages = pdfPromise.numPages;
        let pages: string[] = [];

        for (let i = 1; i <= numPages; i++) {

            const page = await pdfPromise.getPage(i);
            const textContent = await page.getTextContent();

            const consolidatedText = textContent.items.reduce((acc, curr) => {
                if ("str" in curr) {
                    return acc.concat(curr["str"]);
                }
                return acc;
            }, "");

            pages.push(consolidatedText);
        }

        return pages;
    } catch (err) {
        console.log("[ERR]: Error while reading PDF...\n\n", err);
    }
}

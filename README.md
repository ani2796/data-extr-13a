# Project Objective

Games such as DnD can be difficult for beginners to follow, but with the ability to train LLM models to be information sleuths, we can
create a bot that answers any question about the game, ideally with perfect accuracy.

Project outline: 
- Extract DnD (13th age) information and train an open source LLM to answer questions from the book after training it based on the JSON extracted data.

# Project Learnings

- LangChain.js (interface with Llama model)
- Basic NLP techniques (input transforms)
- PDF extraction

# Looking ahead

- UI for uploading PDF files
- Tabular and list data manipulation (games like DnD have creative rule expression too)
- Compare model performance for tabletop game rulebooks
- Try other DnD variants, see which tabletop game is the easiest to explain to new players

# Dev Setup

-   Prettier
-   ESLint
-   TypeScript
-   Nodemon
-   PDF.js

# Scripts

## `npm run eslint-prettier-conflict` ([docs](https://github.com/prettier/eslint-config-prettier#cli-helper-tool))

Checks if any ESLint rules are unnecesary/conflict with Prettier

## `npm run build`

Creates new TS transpile build in `dist/`

## `npm run dev` ([guide](https://devimalplanet.com/how-to-build-and-run-typescript-watch-mode#1-using-tsc--w-and-nodemon))

TS transpile and run

## `npm run debug`

TS transpile and run Node.js debugger (`node inspect`)



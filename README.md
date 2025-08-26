# Playwright Sandbox

## Table of Contents

[Description](#description)
[Prerequisites](#prerequisites)
[Usage](#usage)
[Author](#author)

## Description

End-to-end tests powered by Playwright, with simple domain models and factories for realistic data setup.

## Prerequisites

1. Install [Node.js](https://nodejs.org/) (requires v. 22.18.0 or higher).
2. Install [VSCode](https://code.visualstudio.com) or [WebStorm](https://www.jetbrains.com/webstorm/) as IDE.
3. Clone this repository to your local machine.
4. Install the dependencies via `npm install`.
5. Install Playwright browsers (first run only): `npm run install:pw-browsers`.

## Usage

- Run all tests (headless): `npm test`
- Run with headed browsers: `npm run test:headed`
- Run in UI mode: `npm run test:ui`
- Debug a failing test: `npm run test:debug`
- Open the last HTML report: `npm run report`

Notes:

- CI uses list + GitHub + HTML reporters; locally a list + HTML (open on failure) reporter is used.
- On failures, screenshots and videos are retained; traces are captured on first retry for fast troubleshooting.

## Author

[Aliaksandr Yeutushkou](https://github.com/rimus), Senior Software Test Automation Engineer at EPAM Systems (my [LinkedIn](https://www.linkedin.com/in/rimus/) profile).

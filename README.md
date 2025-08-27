# Playwright Sandbox

## Table of Contents

[Description](#description)
[Prerequisites](#prerequisites)
[Usage](#usage)
[Docker](#docker)
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

- Run all tests (headless): `npm run test`
- Run with headed browsers: `npm run test:headed`
- Run in UI mode: `npm run test:ui`
- Debug a failing test: `npm run test:debug`
- Grep by test title: `npm run test:grep -- "coupon"`
- Open the last HTML report: `npm run report`

Notes:

- CI uses list + GitHub + HTML reporters; locally a list + HTML (open on failure) reporter is used.
- On failures, screenshots and videos are retained; traces are captured on first retry for fast troubleshooting.

## Docker

You can run the tests inside a Docker container using the provided `Dockerfile`, `docker-compose.yml`, or the helper script `docker.sh`.

Option A (`docker.sh` script):

- Build and test headless: `./docker.sh` (or `bash docker.sh` on Windows Git Bash)
- Headed mode: `./docker.sh --headed`
- UI mode: `./docker.sh --ui`
- Grep by test title: `./docker.sh --grep "coupon"`
- Open interactive shell inside container: `./docker.sh run`
- Clean dangling Docker artifacts: `./docker.sh clean`

Option B (docker compose, recommended for CI and reproducibility):

- Build the image: `docker compose build`
- Run all tests (uses default CMD from Dockerfile): `docker compose run --rm tests`
- Override the command (examples):
  - Headed: `docker compose run --rm tests npm run test:headed`
  - UI mode: `docker compose run --rm tests npm run test:ui`
  - Single file: `docker compose run --rm tests npx playwright test tests/order/order-with-coupon.spec.js`

Compose notes:

- The compose file mounts the repository into the container, so changes on the host reflect instantly.
- Logs and HTML report are persisted to ./docker-export so you can view them after the container exits.

Image notes:

- The image builds with cached layers (`npm ci` before copying sources) and ensures Playwright browsers are installed.
- Default working directory: `/usr/src/app`.
- Default command: `npm run test`.

## Author

[Aliaksandr Yeutushkou](https://github.com/rimus), Senior Software Test Automation Engineer at EPAM Systems (my [LinkedIn](https://www.linkedin.com/in/rimus/) profile).

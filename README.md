# PlayerTrack

Track leagues and play games.

## Quick Start

1. Install [Docker](https://docs.docker.com/docker-for-windows/install/) 

1. Check out repo.

1. Run `docker-compose up` in a terminal in the project.

## Viewing web app

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits in the `/web` folder.

The api server will restart if you make edits in the `/api_server` folder.

The api layer can be viewed at `localhost:3000/api`.

## Workflow
1. Run `docker-compose up` in a terminal to start the app.
1. `Ctrl+C` to stop the app.

## Troubleshooting

To rebuild images use:

- `docker-compose build --no-cache api_server`.
- `docker-compose build --no-cache db`.
- `docker-compose build --no-cache web`.

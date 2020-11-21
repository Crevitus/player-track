FROM rustlang/rust:nightly as builder

RUN cargo install diesel_cli --no-default-features --features postgres

RUN cargo install cargo-watch

WORKDIR /usr/src/app

EXPOSE 3001

VOLUME ["/usr/local/cargo"]

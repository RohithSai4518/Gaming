.PHONY: all install build run test dev clean docker-build docker-run

all: install test build

install:
	@echo "Installing project dependencies..."
	npm install

build:
	@echo "Building application assets..."
	npm run build

run:
	@echo "Starting Chamber Crawler server..."
	npm start

dev:
	@echo "Starting development server..."
	npm run dev

test:
	@echo "Executing unit test suite..."
	npm test

clean:
	@echo "Cleaning temporary artifacts..."
	rm -f chamber_crawler_game.zip

docker-build:
	docker build -t chamber-crawler:latest .

docker-run:
	docker run -p 8080:8080 chamber-crawler:latest

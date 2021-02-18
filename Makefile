# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help server

help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

setup: ## build/rebuild docker images and setup
	docker-compose build
	docker-compose run server sh -c "npm run db:migrate"

server: ## run server in watch mode
	docker-compose up

server-daemon: ## run server in background as daemon
	docker-compose up -d

stop: ## stopping running background servers
	docker-compose stop

clean: ## Stop and remove containers, networks, images, and volumes
	docker-compose down

test: ## run tests
	@echo '## Testing backend ##'
	docker-compose run server sh -c "npm test"
	@echo '## Testing frontend ##'
	docker-compose run client sh -c "npm run ci:test"
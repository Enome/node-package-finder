server-dev:
	@NODE_ENV=development forever -w -c node website.js

deploy-couchdb:
	node apps/couchdb/deploy.js

test:
	@NODE_ENV=test mocha $(shell find ./apps -type d -name "tests" | xargs -IDIR find DIR -name '*.js') -R spec --require should

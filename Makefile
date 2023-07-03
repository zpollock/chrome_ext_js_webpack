PROJECT = "Chrome Extension Tempate Project"

install: ;
	npm install

clean: ;
	rm -rf node_modules

webpack: ;@echo "Starting webpack for the ${PROJECT}....."; \
	export NODE_PATH=.; \
	npx webpack

.PHONY: run-local build install

install: 
	cd frontend && npm install

run-local:
	cd frontend && npm run dev

build:
	cd frontend && npm run build

build-preview:
	cd frontend && npm run build && npm run preview
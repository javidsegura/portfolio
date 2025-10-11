.PHONY: run-local build install

install: 
	cd frontend && npm install

run-local:
	cd frontend && npm run dev
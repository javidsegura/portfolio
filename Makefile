.PHONY: run-local build install


run-local:
	cd frontend && npm run dev

install: 
	python3 -m venv .venv && pip3 install -r requirements.txt
	cd frontend && npm install
build:
	cd frontend && npm run build

build-preview:
	cd frontend && npm run build && npm run preview
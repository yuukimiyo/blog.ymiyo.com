#!/usr/bin/make

# SOURCEDIR       := ./pdf

.PHONY: nodels
nodels:
	nvm ls

# run on shell
.PHONY: use
use:
	nvm use 14

.PHONY: install
install:
	npm install

.DEFAULT_GOAL := develop
.PHONY: develop
develop:
	npm run develop

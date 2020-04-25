all:
	yarn; \
	yarn build; \
	gh-pages -b master -d build; \
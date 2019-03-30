
# $ node --help
#   --experimental-modules      experimental ES Module support and
#                               caching modules
#   --experimental-repl-await   experimental await keyword support in
#                               REPL
#   --experimental-vm-modules   experimental ES Module support in vm
#                               module
#   --experimental-worker       experimental threaded Worker support
#   --no-warnings               silence all process warnings

SRC := $(shell find src -name '*.js')

.PHONY: $(SRC)
$(SRC):
	@node --no-warnings --experimental-modules $@

http:
	npx nodemon src/http.js

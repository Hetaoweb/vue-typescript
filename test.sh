set -e
yes "" | ./node_modules/.bin/vue init . test

cd test
yarn
# npm run lint
# npm test
yarn dll
yarn dev

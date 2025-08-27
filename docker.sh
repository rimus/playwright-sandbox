echo "Building an image"
docker compose build
echo "Running tests"
docker compose run --rm tests

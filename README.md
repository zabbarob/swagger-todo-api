# Skeleton project for Swagger

Based on tutorial at https://egghead.io/lessons/node-js-create-an-api-with-swagger.

# Initial Setup

```bash
# install swagger and create a new project
# select the `express` framework from swagger's menu
npm install -g swagger
swagger project create todo-api

# create a git repo
git init
git add .
git commit -m "initial commit of swagger project"

# start and test the server
swagger project start todo-api
curl http://127.0.0.1:10010/hello?name=Scott

# start the swagger editor (opens `api/swagger/swagger.yaml`)
swagger project edit
```

# Mock Mode

```bash
# start swagger in mock mode
swagger project start -m
```

Open http://localhost:10010 to test the API with mocked data objects.

# CORS

Without CORS enabled the Swagger editor will throw an error when accessing API resources ("Try this operation" button in editor).

```bash
npm install cors --save
```

Then activate cors in `app.js`:

```javascript
var cors = require('cors');
...
SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }
  app.use(cors());
...
```

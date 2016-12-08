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

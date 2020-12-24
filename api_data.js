define({ "api": [
  {
    "type": "DELETE",
    "url": "/user/:id",
    "title": "Hello World",
    "version": "0.0.0",
    "filename": "src/mynewfile1.js",
    "group": "/Users/ark/Documents/Work/roastme-api/src/mynewfile1.js",
    "groupTitle": "/Users/ark/Documents/Work/roastme-api/src/mynewfile1.js",
    "name": "DeleteUserId"
  },
  {
    "type": "${payload.method",
    "url": "}",
    "title": "${payload.path} ${payload.title}",
    "version": "0.0.0",
    "filename": "src/playground.js",
    "group": "/Users/ark/Documents/Work/roastme-api/src/playground.js",
    "groupTitle": "/Users/ark/Documents/Work/roastme-api/src/playground.js",
    "name": "${payload.method"
  },
  {
    "type": "POST",
    "url": "/register",
    "title": "Register New User",
    "version": "0.0.1",
    "name": "CreateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullName",
            "description": "<p>Mandatory Fullname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Mandatory Lastname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory Email.</p>"
          }
        ]
      }
    },
    "filename": "src/routers/v1/user.js",
    "groupTitle": "Users"
  }
] });

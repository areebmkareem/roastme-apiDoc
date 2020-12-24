define({ "api": [
  {
    "type": "GET",
    "url": "/contacts",
    "title": "Get User Contacts",
    "group": "Contacts",
    "name": "GetUserContacts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory users unique token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/v1/contacts.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "GET",
    "url": "/contacts/:userName",
    "title": "Search User By userName",
    "group": "Contacts",
    "name": "SearchUserByUserName",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory users unique token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/v1/contacts.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "POST",
    "url": "/register",
    "title": "Register New User",
    "group": "Users",
    "name": "CreateUser",
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
    "version": "0.0.0",
    "filename": "src/routers/v1/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user",
    "title": "Get User Details",
    "group": "Users",
    "name": "GetUserDetails",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory users unique token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/v1/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/logout",
    "title": "Logout User",
    "group": "Users",
    "name": "LogoutUser",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory users unique token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/v1/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "POST",
    "url": "/login",
    "title": "Login User With Email and Password",
    "group": "Users",
    "name": "SignInWithEmailAndPassword",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory Password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/v1/user.js",
    "groupTitle": "Users"
  },
  {
    "type": "POST",
    "url": "/verify-otp",
    "title": "Verify Email With OTP",
    "group": "Users",
    "name": "VerifyEmailByOTP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>Mandatory OTP.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory users unique token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/v1/user.js",
    "groupTitle": "Users"
  }
] });

define({ "api": [
  {
    "type": "GET",
    "url": "/contact-requests",
    "title": "Get User Contact Requests",
    "group": "Contacts",
    "name": "GetContactRequests",
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
    "url": "/contact-approve/:id",
    "title": "Get User Contact Approve",
    "group": "Contacts",
    "name": "GetContactapprove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "approved",
            "description": "<p>Mandatory Approved.</p>"
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
    "filename": "src/routers/v1/contacts.js",
    "groupTitle": "Contacts"
  },
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
    "title": "Search User By User Name",
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
    "description": "<p>This api is in beta state you have to enter the full keyword for proper search result.</p>",
    "version": "0.0.0",
    "filename": "src/routers/v1/contacts.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "POST",
    "url": "/transaction",
    "title": "Create A New Transaction",
    "group": "Transactions",
    "name": "CreateNewTransaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Mandatory Amount.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactionType",
            "description": "<p>Mandatory &quot;lend or borrow&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverId",
            "description": "<p>Mandatory Receiver user id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/v1/transaction.js",
    "groupTitle": "Transactions"
  },
  {
    "type": "GET",
    "url": "/transactions/:id",
    "title": "Get User Transactions",
    "group": "Transactions",
    "name": "GetUserTransactions",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory users unique token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory Transaction contact Id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/v1/transaction.js",
    "groupTitle": "Transactions"
  },
  {
    "type": "POST",
    "url": "/register",
    "title": "Create New User",
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

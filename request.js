"use strict";

Liferay.Loader.define("my-react-app@1.0.0/request", ['module', 'exports', 'require'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Liferay.Loader.define("my-react-app@1.0.0/request", ['module', 'exports', 'require'], function (module, exports, require) {
      undefined;
      window;

      {
        Liferay.Loader.define("my-react-app@1.0.0/request", ['module', 'exports', 'require'], function (module, exports, require) {
          undefined;
          window;

          {
            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            //# sourceMappingURL=request.js.map
            exports.addUser = function addUser(_ref) {
              var emailAddress = _ref.emailAddress,
                  familyName = _ref.familyName,
                  givenName = _ref.givenName,
                  userName = _ref.userName;

              var headers = new Headers();
              headers.append('Content-Type', 'application/json');
              var request = {
                body: JSON.stringify({
                  alternateName: userName,
                  emailAddress: emailAddress,
                  familyName: familyName,
                  givenName: givenName
                }),
                headers: headers,
                method: 'POST'
              };
              return Liferay.Util.fetch('/o/headless-admin-user/v1.0/user-accounts', request).then(function (res) {
                return res.json();
              });
            };
          }
        });
        //# sourceMappingURL=request.js.map
      }
    });
    //# sourceMappingURL=request.js.map
  }
});
//# sourceMappingURL=request.js.map
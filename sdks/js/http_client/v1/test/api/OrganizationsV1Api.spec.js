// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.6
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.OrganizationsV1Api();
  });

  describe('(package)', function() {
    describe('OrganizationsV1Api', function() {
      describe('createOrganization', function() {
        it('should call createOrganization successfully', function(done) {
          // TODO: uncomment, update parameter values for createOrganization call and complete the assertions
          /*
          var body = new PolyaxonSdk.V1Organization();
          body.user = "";
          body.user_email = "";
          body.name = "";
          body.is_public = "";
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.createOrganization(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Organization);
            expect(data.user).to.be.a('string');
            expect(data.user).to.be("");
            expect(data.user_email).to.be.a('string');
            expect(data.user_email).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.is_public).to.be.a('string');
            expect(data.is_public).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createOrganizationMember', function() {
        it('should call createOrganizationMember successfully', function(done) {
          // TODO: uncomment, update parameter values for createOrganizationMember call and complete the assertions
          /*
          var owner = "owner_example";
          var body = new PolyaxonSdk.V1OrganizationMember();
          body.user = "";
          body.user_email = "";
          body.email = "";
          body.role = "";
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.createOrganizationMember(owner, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1OrganizationMember);
            expect(data.user).to.be.a('string');
            expect(data.user).to.be("");
            expect(data.user_email).to.be.a('string');
            expect(data.user_email).to.be("");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.role).to.be.a('string');
            expect(data.role).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteOrganization', function() {
        it('should call deleteOrganization successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteOrganization call
          /*
          var owner = "owner_example";

          instance.deleteOrganization(owner, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteOrganizationMember', function() {
        it('should call deleteOrganizationMember successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteOrganizationMember call
          /*
          var owner = "owner_example";
          var user = "user_example";

          instance.deleteOrganizationMember(owner, user, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOrganization', function() {
        it('should call getOrganization successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrganization call and complete the assertions
          /*
          var owner = "owner_example";

          instance.getOrganization(owner, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Organization);
            expect(data.user).to.be.a('string');
            expect(data.user).to.be("");
            expect(data.user_email).to.be.a('string');
            expect(data.user_email).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.is_public).to.be.a('string');
            expect(data.is_public).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOrganizationMember', function() {
        it('should call getOrganizationMember successfully', function(done) {
          // TODO: uncomment, update parameter values for getOrganizationMember call and complete the assertions
          /*
          var owner = "owner_example";
          var user = "user_example";

          instance.getOrganizationMember(owner, user, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1OrganizationMember);
            expect(data.user).to.be.a('string');
            expect(data.user).to.be("");
            expect(data.user_email).to.be.a('string');
            expect(data.user_email).to.be("");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.role).to.be.a('string');
            expect(data.role).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listOrganizationMembers', function() {
        it('should call listOrganizationMembers successfully', function(done) {
          // TODO: uncomment, update parameter values for listOrganizationMembers call and complete the assertions
          /*
          var owner = "owner_example";
          var opts = {};
          opts.offset = 56;
          opts.limit = 56;
          opts.sort = "sort_example";
          opts.query = "query_example";

          instance.listOrganizationMembers(owner, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListOrganizationMembersResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1OrganizationMember);
                expect(data.user).to.be.a('string');
                expect(data.user).to.be("");
                expect(data.user_email).to.be.a('string');
                expect(data.user_email).to.be("");
                expect(data.email).to.be.a('string');
                expect(data.email).to.be("");
                expect(data.role).to.be.a('string');
                expect(data.role).to.be("");
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listOrganizationNames', function() {
        it('should call listOrganizationNames successfully', function(done) {
          // TODO: uncomment listOrganizationNames call and complete the assertions
          /*

          instance.listOrganizationNames(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListOrganizationsResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1Organization);
                expect(data.user).to.be.a('string');
                expect(data.user).to.be("");
                expect(data.user_email).to.be.a('string');
                expect(data.user_email).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.is_public).to.be.a('string');
                expect(data.is_public).to.be("");
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listOrganizations', function() {
        it('should call listOrganizations successfully', function(done) {
          // TODO: uncomment listOrganizations call and complete the assertions
          /*

          instance.listOrganizations(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListOrganizationsResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1Organization);
                expect(data.user).to.be.a('string');
                expect(data.user).to.be("");
                expect(data.user_email).to.be.a('string');
                expect(data.user_email).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.is_public).to.be.a('string');
                expect(data.is_public).to.be("");
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchOrganization', function() {
        it('should call patchOrganization successfully', function(done) {
          // TODO: uncomment, update parameter values for patchOrganization call and complete the assertions
          /*
          var owner = "owner_example";
          var body = new PolyaxonSdk.V1Organization();
          body.user = "";
          body.user_email = "";
          body.name = "";
          body.is_public = "";
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.patchOrganization(owner, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Organization);
            expect(data.user).to.be.a('string');
            expect(data.user).to.be("");
            expect(data.user_email).to.be.a('string');
            expect(data.user_email).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.is_public).to.be.a('string');
            expect(data.is_public).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchOrganizationMember', function() {
        it('should call patchOrganizationMember successfully', function(done) {
          // TODO: uncomment, update parameter values for patchOrganizationMember call and complete the assertions
          /*
          var owner = "owner_example";
          var member_user = "member_user_example";
          var body = new PolyaxonSdk.V1OrganizationMember();
          body.user = "";
          body.user_email = "";
          body.email = "";
          body.role = "";
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.patchOrganizationMember(owner, member_user, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1OrganizationMember);
            expect(data.user).to.be.a('string');
            expect(data.user).to.be("");
            expect(data.user_email).to.be.a('string');
            expect(data.user_email).to.be("");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.role).to.be.a('string');
            expect(data.role).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateOrganization', function() {
        it('should call updateOrganization successfully', function(done) {
          // TODO: uncomment, update parameter values for updateOrganization call and complete the assertions
          /*
          var owner = "owner_example";
          var body = new PolyaxonSdk.V1Organization();
          body.user = "";
          body.user_email = "";
          body.name = "";
          body.is_public = "";
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.updateOrganization(owner, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Organization);
            expect(data.user).to.be.a('string');
            expect(data.user).to.be("");
            expect(data.user_email).to.be.a('string');
            expect(data.user_email).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.is_public).to.be.a('string');
            expect(data.is_public).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateOrganizationMember', function() {
        it('should call updateOrganizationMember successfully', function(done) {
          // TODO: uncomment, update parameter values for updateOrganizationMember call and complete the assertions
          /*
          var owner = "owner_example";
          var member_user = "member_user_example";
          var body = new PolyaxonSdk.V1OrganizationMember();
          body.user = "";
          body.user_email = "";
          body.email = "";
          body.role = "";
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.updateOrganizationMember(owner, member_user, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1OrganizationMember);
            expect(data.user).to.be.a('string');
            expect(data.user).to.be("");
            expect(data.user_email).to.be.a('string');
            expect(data.user_email).to.be("");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.role).to.be.a('string');
            expect(data.role).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));

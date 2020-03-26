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

// Code generated by go-swagger; DO NOT EDIT.

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
)

// NewArchiveRunParams creates a new ArchiveRunParams object
// with the default values initialized.
func NewArchiveRunParams() *ArchiveRunParams {
	var ()
	return &ArchiveRunParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewArchiveRunParamsWithTimeout creates a new ArchiveRunParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewArchiveRunParamsWithTimeout(timeout time.Duration) *ArchiveRunParams {
	var ()
	return &ArchiveRunParams{

		timeout: timeout,
	}
}

// NewArchiveRunParamsWithContext creates a new ArchiveRunParams object
// with the default values initialized, and the ability to set a context for a request
func NewArchiveRunParamsWithContext(ctx context.Context) *ArchiveRunParams {
	var ()
	return &ArchiveRunParams{

		Context: ctx,
	}
}

// NewArchiveRunParamsWithHTTPClient creates a new ArchiveRunParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewArchiveRunParamsWithHTTPClient(client *http.Client) *ArchiveRunParams {
	var ()
	return &ArchiveRunParams{
		HTTPClient: client,
	}
}

/*ArchiveRunParams contains all the parameters to send to the API endpoint
for the archive run operation typically these are written to a http.Request
*/
type ArchiveRunParams struct {

	/*Owner
	  Owner of the namespace

	*/
	Owner string
	/*Project
	  Project

	*/
	Project string
	/*UUID
	  Uuid identifier of the entity

	*/
	UUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the archive run params
func (o *ArchiveRunParams) WithTimeout(timeout time.Duration) *ArchiveRunParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the archive run params
func (o *ArchiveRunParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the archive run params
func (o *ArchiveRunParams) WithContext(ctx context.Context) *ArchiveRunParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the archive run params
func (o *ArchiveRunParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the archive run params
func (o *ArchiveRunParams) WithHTTPClient(client *http.Client) *ArchiveRunParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the archive run params
func (o *ArchiveRunParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithOwner adds the owner to the archive run params
func (o *ArchiveRunParams) WithOwner(owner string) *ArchiveRunParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the archive run params
func (o *ArchiveRunParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithProject adds the project to the archive run params
func (o *ArchiveRunParams) WithProject(project string) *ArchiveRunParams {
	o.SetProject(project)
	return o
}

// SetProject adds the project to the archive run params
func (o *ArchiveRunParams) SetProject(project string) {
	o.Project = project
}

// WithUUID adds the uuid to the archive run params
func (o *ArchiveRunParams) WithUUID(uuid string) *ArchiveRunParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the archive run params
func (o *ArchiveRunParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *ArchiveRunParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param project
	if err := r.SetPathParam("project", o.Project); err != nil {
		return err
	}

	// path param uuid
	if err := r.SetPathParam("uuid", o.UUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

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

package queues_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new queues v1 API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for queues v1 API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientService is the interface for Client methods
type ClientService interface {
	CreateQueue(params *CreateQueueParams, authInfo runtime.ClientAuthInfoWriter) (*CreateQueueOK, *CreateQueueNoContent, error)

	DeleteQueue(params *DeleteQueueParams, authInfo runtime.ClientAuthInfoWriter) (*DeleteQueueOK, *DeleteQueueNoContent, error)

	GetQueue(params *GetQueueParams, authInfo runtime.ClientAuthInfoWriter) (*GetQueueOK, *GetQueueNoContent, error)

	ListOrganizationQueueNames(params *ListOrganizationQueueNamesParams, authInfo runtime.ClientAuthInfoWriter) (*ListOrganizationQueueNamesOK, *ListOrganizationQueueNamesNoContent, error)

	ListOrganizationQueues(params *ListOrganizationQueuesParams, authInfo runtime.ClientAuthInfoWriter) (*ListOrganizationQueuesOK, *ListOrganizationQueuesNoContent, error)

	ListQueueNames(params *ListQueueNamesParams, authInfo runtime.ClientAuthInfoWriter) (*ListQueueNamesOK, *ListQueueNamesNoContent, error)

	ListQueues(params *ListQueuesParams, authInfo runtime.ClientAuthInfoWriter) (*ListQueuesOK, *ListQueuesNoContent, error)

	PatchQueue(params *PatchQueueParams, authInfo runtime.ClientAuthInfoWriter) (*PatchQueueOK, *PatchQueueNoContent, error)

	UpdateQueue(params *UpdateQueueParams, authInfo runtime.ClientAuthInfoWriter) (*UpdateQueueOK, *UpdateQueueNoContent, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
  CreateQueue updates agent
*/
func (a *Client) CreateQueue(params *CreateQueueParams, authInfo runtime.ClientAuthInfoWriter) (*CreateQueueOK, *CreateQueueNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewCreateQueueParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "CreateQueue",
		Method:             "POST",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{agent}/queues",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &CreateQueueReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *CreateQueueOK:
		return value, nil, nil
	case *CreateQueueNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*CreateQueueDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  DeleteQueue syncs agent
*/
func (a *Client) DeleteQueue(params *DeleteQueueParams, authInfo runtime.ClientAuthInfoWriter) (*DeleteQueueOK, *DeleteQueueNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeleteQueueParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "DeleteQueue",
		Method:             "DELETE",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{agent}/queues/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &DeleteQueueReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *DeleteQueueOK:
		return value, nil, nil
	case *DeleteQueueNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*DeleteQueueDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  GetQueue patches agent
*/
func (a *Client) GetQueue(params *GetQueueParams, authInfo runtime.ClientAuthInfoWriter) (*GetQueueOK, *GetQueueNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewGetQueueParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "GetQueue",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{agent}/queues/{uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &GetQueueReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *GetQueueOK:
		return value, nil, nil
	case *GetQueueNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*GetQueueDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListOrganizationQueueNames lists agents names
*/
func (a *Client) ListOrganizationQueueNames(params *ListOrganizationQueueNamesParams, authInfo runtime.ClientAuthInfoWriter) (*ListOrganizationQueueNamesOK, *ListOrganizationQueueNamesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListOrganizationQueueNamesParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "ListOrganizationQueueNames",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/queues/names",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListOrganizationQueueNamesReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ListOrganizationQueueNamesOK:
		return value, nil, nil
	case *ListOrganizationQueueNamesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListOrganizationQueueNamesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListOrganizationQueues lists agents
*/
func (a *Client) ListOrganizationQueues(params *ListOrganizationQueuesParams, authInfo runtime.ClientAuthInfoWriter) (*ListOrganizationQueuesOK, *ListOrganizationQueuesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListOrganizationQueuesParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "ListOrganizationQueues",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/queues",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListOrganizationQueuesReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ListOrganizationQueuesOK:
		return value, nil, nil
	case *ListOrganizationQueuesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListOrganizationQueuesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListQueueNames creates agent
*/
func (a *Client) ListQueueNames(params *ListQueueNamesParams, authInfo runtime.ClientAuthInfoWriter) (*ListQueueNamesOK, *ListQueueNamesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListQueueNamesParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "ListQueueNames",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{agent}/queues/names",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListQueueNamesReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ListQueueNamesOK:
		return value, nil, nil
	case *ListQueueNamesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListQueueNamesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  ListQueues gets agent
*/
func (a *Client) ListQueues(params *ListQueuesParams, authInfo runtime.ClientAuthInfoWriter) (*ListQueuesOK, *ListQueuesNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewListQueuesParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "ListQueues",
		Method:             "GET",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{agent}/queues",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &ListQueuesReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *ListQueuesOK:
		return value, nil, nil
	case *ListQueuesNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*ListQueuesDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  PatchQueue gets state queues runs
*/
func (a *Client) PatchQueue(params *PatchQueueParams, authInfo runtime.ClientAuthInfoWriter) (*PatchQueueOK, *PatchQueueNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewPatchQueueParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "PatchQueue",
		Method:             "PATCH",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{queue.agent}/queues/{queue.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &PatchQueueReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *PatchQueueOK:
		return value, nil, nil
	case *PatchQueueNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*PatchQueueDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

/*
  UpdateQueue deletes agent
*/
func (a *Client) UpdateQueue(params *UpdateQueueParams, authInfo runtime.ClientAuthInfoWriter) (*UpdateQueueOK, *UpdateQueueNoContent, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewUpdateQueueParams()
	}

	result, err := a.transport.Submit(&runtime.ClientOperation{
		ID:                 "UpdateQueue",
		Method:             "PUT",
		PathPattern:        "/api/v1/orgs/{owner}/agents/{queue.agent}/queues/{queue.uuid}",
		ProducesMediaTypes: []string{"application/json"},
		ConsumesMediaTypes: []string{"application/json"},
		Schemes:            []string{"http", "https"},
		Params:             params,
		Reader:             &UpdateQueueReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	})
	if err != nil {
		return nil, nil, err
	}
	switch value := result.(type) {
	case *UpdateQueueOK:
		return value, nil, nil
	case *UpdateQueueNoContent:
		return nil, value, nil
	}
	// unexpected success response
	unexpectedSuccess := result.(*UpdateQueueDefault)
	return nil, nil, runtime.NewAPIError("unexpected success response: content available as default response in error", unexpectedSuccess, unexpectedSuccess.Code())
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}

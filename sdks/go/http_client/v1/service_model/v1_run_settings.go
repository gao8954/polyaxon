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

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1RunSettings Run Settings specification
//
// swagger:model v1RunSettings
type V1RunSettings struct {

	// Agent
	Agent *V1RunSettingsCatalog `json:"agent,omitempty"`

	// Artifacts Store
	ArtifactsStore *V1RunSettingsCatalog `json:"artifacts_store,omitempty"`

	// Connections
	Connections []*V1RunSettingsCatalog `json:"connections"`

	// Queue
	Queue *V1RunSettingsCatalog `json:"queue,omitempty"`
}

// Validate validates this v1 run settings
func (m *V1RunSettings) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAgent(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateArtifactsStore(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateConnections(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateQueue(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1RunSettings) validateAgent(formats strfmt.Registry) error {

	if swag.IsZero(m.Agent) { // not required
		return nil
	}

	if m.Agent != nil {
		if err := m.Agent.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("agent")
			}
			return err
		}
	}

	return nil
}

func (m *V1RunSettings) validateArtifactsStore(formats strfmt.Registry) error {

	if swag.IsZero(m.ArtifactsStore) { // not required
		return nil
	}

	if m.ArtifactsStore != nil {
		if err := m.ArtifactsStore.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("artifacts_store")
			}
			return err
		}
	}

	return nil
}

func (m *V1RunSettings) validateConnections(formats strfmt.Registry) error {

	if swag.IsZero(m.Connections) { // not required
		return nil
	}

	for i := 0; i < len(m.Connections); i++ {
		if swag.IsZero(m.Connections[i]) { // not required
			continue
		}

		if m.Connections[i] != nil {
			if err := m.Connections[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("connections" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

func (m *V1RunSettings) validateQueue(formats strfmt.Registry) error {

	if swag.IsZero(m.Queue) { // not required
		return nil
	}

	if m.Queue != nil {
		if err := m.Queue.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("queue")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1RunSettings) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1RunSettings) UnmarshalBinary(b []byte) error {
	var res V1RunSettings
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

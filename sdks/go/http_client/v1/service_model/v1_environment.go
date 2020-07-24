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
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1Environment Environment specification
//
// swagger:model v1Environment
type V1Environment struct {

	// Optional Affinity sets the scheduling constraints.
	Affinity V1Affinity `json:"affinity,omitempty"`

	// Optional Metadata annotations to pass to the k8s
	Annotations map[string]string `json:"annotations,omitempty"`

	// PodDNSConfig defines the DNS parameters of a pod in addition to
	// those generated from DNSPolicy.
	DNSConfig V1PodDNSConfig `json:"dns_config,omitempty"`

	// Set DNS policy for the pod.
	// Defaults to "ClusterFirst".
	// Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'.
	// DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy.
	// To have DNS options set along with hostNetwork, you have to specify DNS policy
	// explicitly to 'ClusterFirstWithHostNet'.
	DNSPolicy string `json:"dns_policy,omitempty"`

	// Use the host's pid namespace. Default to false.
	HostPID string `json:"hostPID,omitempty"`

	// Optional HostAliases is an optional list of hosts and IPs that will be injected into the pod spec.
	HostAliases []V1HostAlias `json:"host_aliases"`

	// Host networking requested for this workflow pod. Default to false.
	HostNetwork bool `json:"host_network,omitempty"`

	// Optional image pull secrets to use for this run
	// ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images
	// in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets
	// can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet.
	// More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
	ImagePullSecrets []string `json:"image_pull_secrets"`

	// Optional Metadata labels to pass to the k8s
	Labels map[string]string `json:"labels,omitempty"`

	// Optional NodeName is a request to schedule this pod onto a specific node. If it is non-empty,
	// the scheduler simply schedules this pod onto that node, assuming that it fits resource
	// requirements.
	NodeName string `json:"node_name,omitempty"`

	// Optional NodeSelector is a selector which must be true for the pod to fit on a node.
	// Selector which must match a node's labels for the pod to be scheduled on that node.
	// More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
	NodeSelector map[string]string `json:"node_selector,omitempty"`

	// The priority value. Various system components use this field to find the
	// priority of the pod. When Priority Admission Controller is enabled, it
	// prevents users from setting this field. The admission controller populates
	// this field from PriorityClassName.
	// The higher the value, the higher the priority.
	Priority int32 `json:"priority,omitempty"`

	// If specified, indicates the pod's priority. "system-node-critical" and
	// "system-cluster-critical" are two special keywords which indicate the
	// highest priorities with the former being the highest priority. Any other
	// name must be defined by creating a PriorityClass object with that name.
	// If not specified, the pod priority will be default or zero if there is no
	// default.
	PriorityClassName string `json:"priority_class_name,omitempty"`

	// A valid restart policy
	RestartPolicy string `json:"restart_policy,omitempty"`

	// If specified, the pod will be dispatched by specified scheduler.
	// Or it will be dispatched by workflow scope scheduler if specified.
	// If neither specified, the pod will be dispatched by default scheduler.
	// +optional
	SchedulerName string `json:"scheduler_name,omitempty"`

	// PodSecurityContext holds pod-level security attributes and common container settings.
	// Some fields are also present in container.securityContext.  Field values of
	// container.securityContext take precedence over field values of PodSecurityContext.
	SecurityContext V1PodSecurityContext `json:"security_context,omitempty"`

	// Optional service account name to use for this run
	ServiceAccountName string `json:"service_account_name,omitempty"`

	// Optional Tolerations to apply.
	Tolerations []V1Toleration `json:"tolerations"`
}

// Validate validates this v1 environment
func (m *V1Environment) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V1Environment) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1Environment) UnmarshalBinary(b []byte) error {
	var res V1Environment
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}

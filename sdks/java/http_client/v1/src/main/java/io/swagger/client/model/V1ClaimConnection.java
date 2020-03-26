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
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * V1ClaimConnection
 */

public class V1ClaimConnection {
  @SerializedName("volume_claim")
  private String volumeClaim = null;

  @SerializedName("mount_path")
  private String mountPath = null;

  @SerializedName("read_only")
  private Boolean readOnly = null;

  @SerializedName("kind")
  private Object kind = null;

  public V1ClaimConnection volumeClaim(String volumeClaim) {
    this.volumeClaim = volumeClaim;
    return this;
  }

   /**
   * Get volumeClaim
   * @return volumeClaim
  **/
  @ApiModelProperty(value = "")
  public String getVolumeClaim() {
    return volumeClaim;
  }

  public void setVolumeClaim(String volumeClaim) {
    this.volumeClaim = volumeClaim;
  }

  public V1ClaimConnection mountPath(String mountPath) {
    this.mountPath = mountPath;
    return this;
  }

   /**
   * Get mountPath
   * @return mountPath
  **/
  @ApiModelProperty(value = "")
  public String getMountPath() {
    return mountPath;
  }

  public void setMountPath(String mountPath) {
    this.mountPath = mountPath;
  }

  public V1ClaimConnection readOnly(Boolean readOnly) {
    this.readOnly = readOnly;
    return this;
  }

   /**
   * Get readOnly
   * @return readOnly
  **/
  @ApiModelProperty(value = "")
  public Boolean isReadOnly() {
    return readOnly;
  }

  public void setReadOnly(Boolean readOnly) {
    this.readOnly = readOnly;
  }

  public V1ClaimConnection kind(Object kind) {
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @ApiModelProperty(value = "")
  public Object getKind() {
    return kind;
  }

  public void setKind(Object kind) {
    this.kind = kind;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1ClaimConnection v1ClaimConnection = (V1ClaimConnection) o;
    return Objects.equals(this.volumeClaim, v1ClaimConnection.volumeClaim) &&
        Objects.equals(this.mountPath, v1ClaimConnection.mountPath) &&
        Objects.equals(this.readOnly, v1ClaimConnection.readOnly) &&
        Objects.equals(this.kind, v1ClaimConnection.kind);
  }

  @Override
  public int hashCode() {
    return Objects.hash(volumeClaim, mountPath, readOnly, kind);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1ClaimConnection {\n");
    
    sb.append("    volumeClaim: ").append(toIndentedString(volumeClaim)).append("\n");
    sb.append("    mountPath: ").append(toIndentedString(mountPath)).append("\n");
    sb.append("    readOnly: ").append(toIndentedString(readOnly)).append("\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}


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
import org.threeten.bp.OffsetDateTime;

/**
 * V1IntervalSchedule
 */

public class V1IntervalSchedule {
  @SerializedName("kind")
  private String kind = "interval";

  @SerializedName("start_at")
  private OffsetDateTime startAt = null;

  @SerializedName("end_at")
  private OffsetDateTime endAt = null;

  @SerializedName("frequency")
  private Integer frequency = null;

  @SerializedName("depends_on_past")
  private Boolean dependsOnPast = null;

  public V1IntervalSchedule kind(String kind) {
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @ApiModelProperty(value = "")
  public String getKind() {
    return kind;
  }

  public void setKind(String kind) {
    this.kind = kind;
  }

  public V1IntervalSchedule startAt(OffsetDateTime startAt) {
    this.startAt = startAt;
    return this;
  }

   /**
   * Get startAt
   * @return startAt
  **/
  @ApiModelProperty(value = "")
  public OffsetDateTime getStartAt() {
    return startAt;
  }

  public void setStartAt(OffsetDateTime startAt) {
    this.startAt = startAt;
  }

  public V1IntervalSchedule endAt(OffsetDateTime endAt) {
    this.endAt = endAt;
    return this;
  }

   /**
   * Get endAt
   * @return endAt
  **/
  @ApiModelProperty(value = "")
  public OffsetDateTime getEndAt() {
    return endAt;
  }

  public void setEndAt(OffsetDateTime endAt) {
    this.endAt = endAt;
  }

  public V1IntervalSchedule frequency(Integer frequency) {
    this.frequency = frequency;
    return this;
  }

   /**
   * Get frequency
   * @return frequency
  **/
  @ApiModelProperty(value = "")
  public Integer getFrequency() {
    return frequency;
  }

  public void setFrequency(Integer frequency) {
    this.frequency = frequency;
  }

  public V1IntervalSchedule dependsOnPast(Boolean dependsOnPast) {
    this.dependsOnPast = dependsOnPast;
    return this;
  }

   /**
   * Get dependsOnPast
   * @return dependsOnPast
  **/
  @ApiModelProperty(value = "")
  public Boolean isDependsOnPast() {
    return dependsOnPast;
  }

  public void setDependsOnPast(Boolean dependsOnPast) {
    this.dependsOnPast = dependsOnPast;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1IntervalSchedule v1IntervalSchedule = (V1IntervalSchedule) o;
    return Objects.equals(this.kind, v1IntervalSchedule.kind) &&
        Objects.equals(this.startAt, v1IntervalSchedule.startAt) &&
        Objects.equals(this.endAt, v1IntervalSchedule.endAt) &&
        Objects.equals(this.frequency, v1IntervalSchedule.frequency) &&
        Objects.equals(this.dependsOnPast, v1IntervalSchedule.dependsOnPast);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, startAt, endAt, frequency, dependsOnPast);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1IntervalSchedule {\n");
    
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    startAt: ").append(toIndentedString(startAt)).append("\n");
    sb.append("    endAt: ").append(toIndentedString(endAt)).append("\n");
    sb.append("    frequency: ").append(toIndentedString(frequency)).append("\n");
    sb.append("    dependsOnPast: ").append(toIndentedString(dependsOnPast)).append("\n");
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


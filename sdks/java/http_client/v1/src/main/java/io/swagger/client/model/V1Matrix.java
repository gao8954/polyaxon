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
import io.swagger.client.model.V1HpChoice;
import io.swagger.client.model.V1HpGeomSpace;
import io.swagger.client.model.V1HpLinSpace;
import io.swagger.client.model.V1HpLogNormal;
import io.swagger.client.model.V1HpLogSpace;
import io.swagger.client.model.V1HpLogUniform;
import io.swagger.client.model.V1HpNormal;
import io.swagger.client.model.V1HpPChoice;
import io.swagger.client.model.V1HpQLogNormal;
import io.swagger.client.model.V1HpQLogUniform;
import io.swagger.client.model.V1HpQNormal;
import io.swagger.client.model.V1HpQUniform;
import io.swagger.client.model.V1HpRange;
import io.swagger.client.model.V1HpUniform;
import java.io.IOException;

/**
 * V1Matrix
 */

public class V1Matrix {
  @SerializedName("choice")
  private V1HpChoice choice = null;

  @SerializedName("pchoice")
  private V1HpPChoice pchoice = null;

  @SerializedName("range")
  private V1HpRange range = null;

  @SerializedName("linspace")
  private V1HpLinSpace linspace = null;

  @SerializedName("logspace")
  private V1HpLogSpace logspace = null;

  @SerializedName("geomspace")
  private V1HpGeomSpace geomspace = null;

  @SerializedName("uniform")
  private V1HpUniform uniform = null;

  @SerializedName("quniform")
  private V1HpQUniform quniform = null;

  @SerializedName("loguniform")
  private V1HpLogUniform loguniform = null;

  @SerializedName("qloguniform")
  private V1HpQLogUniform qloguniform = null;

  @SerializedName("normal")
  private V1HpNormal normal = null;

  @SerializedName("qnormal")
  private V1HpQNormal qnormal = null;

  @SerializedName("lognormal")
  private V1HpLogNormal lognormal = null;

  @SerializedName("qlognormal")
  private V1HpQLogNormal qlognormal = null;

  public V1Matrix choice(V1HpChoice choice) {
    this.choice = choice;
    return this;
  }

   /**
   * Get choice
   * @return choice
  **/
  @ApiModelProperty(value = "")
  public V1HpChoice getChoice() {
    return choice;
  }

  public void setChoice(V1HpChoice choice) {
    this.choice = choice;
  }

  public V1Matrix pchoice(V1HpPChoice pchoice) {
    this.pchoice = pchoice;
    return this;
  }

   /**
   * Get pchoice
   * @return pchoice
  **/
  @ApiModelProperty(value = "")
  public V1HpPChoice getPchoice() {
    return pchoice;
  }

  public void setPchoice(V1HpPChoice pchoice) {
    this.pchoice = pchoice;
  }

  public V1Matrix range(V1HpRange range) {
    this.range = range;
    return this;
  }

   /**
   * Get range
   * @return range
  **/
  @ApiModelProperty(value = "")
  public V1HpRange getRange() {
    return range;
  }

  public void setRange(V1HpRange range) {
    this.range = range;
  }

  public V1Matrix linspace(V1HpLinSpace linspace) {
    this.linspace = linspace;
    return this;
  }

   /**
   * Get linspace
   * @return linspace
  **/
  @ApiModelProperty(value = "")
  public V1HpLinSpace getLinspace() {
    return linspace;
  }

  public void setLinspace(V1HpLinSpace linspace) {
    this.linspace = linspace;
  }

  public V1Matrix logspace(V1HpLogSpace logspace) {
    this.logspace = logspace;
    return this;
  }

   /**
   * Get logspace
   * @return logspace
  **/
  @ApiModelProperty(value = "")
  public V1HpLogSpace getLogspace() {
    return logspace;
  }

  public void setLogspace(V1HpLogSpace logspace) {
    this.logspace = logspace;
  }

  public V1Matrix geomspace(V1HpGeomSpace geomspace) {
    this.geomspace = geomspace;
    return this;
  }

   /**
   * Get geomspace
   * @return geomspace
  **/
  @ApiModelProperty(value = "")
  public V1HpGeomSpace getGeomspace() {
    return geomspace;
  }

  public void setGeomspace(V1HpGeomSpace geomspace) {
    this.geomspace = geomspace;
  }

  public V1Matrix uniform(V1HpUniform uniform) {
    this.uniform = uniform;
    return this;
  }

   /**
   * Get uniform
   * @return uniform
  **/
  @ApiModelProperty(value = "")
  public V1HpUniform getUniform() {
    return uniform;
  }

  public void setUniform(V1HpUniform uniform) {
    this.uniform = uniform;
  }

  public V1Matrix quniform(V1HpQUniform quniform) {
    this.quniform = quniform;
    return this;
  }

   /**
   * Get quniform
   * @return quniform
  **/
  @ApiModelProperty(value = "")
  public V1HpQUniform getQuniform() {
    return quniform;
  }

  public void setQuniform(V1HpQUniform quniform) {
    this.quniform = quniform;
  }

  public V1Matrix loguniform(V1HpLogUniform loguniform) {
    this.loguniform = loguniform;
    return this;
  }

   /**
   * Get loguniform
   * @return loguniform
  **/
  @ApiModelProperty(value = "")
  public V1HpLogUniform getLoguniform() {
    return loguniform;
  }

  public void setLoguniform(V1HpLogUniform loguniform) {
    this.loguniform = loguniform;
  }

  public V1Matrix qloguniform(V1HpQLogUniform qloguniform) {
    this.qloguniform = qloguniform;
    return this;
  }

   /**
   * Get qloguniform
   * @return qloguniform
  **/
  @ApiModelProperty(value = "")
  public V1HpQLogUniform getQloguniform() {
    return qloguniform;
  }

  public void setQloguniform(V1HpQLogUniform qloguniform) {
    this.qloguniform = qloguniform;
  }

  public V1Matrix normal(V1HpNormal normal) {
    this.normal = normal;
    return this;
  }

   /**
   * Get normal
   * @return normal
  **/
  @ApiModelProperty(value = "")
  public V1HpNormal getNormal() {
    return normal;
  }

  public void setNormal(V1HpNormal normal) {
    this.normal = normal;
  }

  public V1Matrix qnormal(V1HpQNormal qnormal) {
    this.qnormal = qnormal;
    return this;
  }

   /**
   * Get qnormal
   * @return qnormal
  **/
  @ApiModelProperty(value = "")
  public V1HpQNormal getQnormal() {
    return qnormal;
  }

  public void setQnormal(V1HpQNormal qnormal) {
    this.qnormal = qnormal;
  }

  public V1Matrix lognormal(V1HpLogNormal lognormal) {
    this.lognormal = lognormal;
    return this;
  }

   /**
   * Get lognormal
   * @return lognormal
  **/
  @ApiModelProperty(value = "")
  public V1HpLogNormal getLognormal() {
    return lognormal;
  }

  public void setLognormal(V1HpLogNormal lognormal) {
    this.lognormal = lognormal;
  }

  public V1Matrix qlognormal(V1HpQLogNormal qlognormal) {
    this.qlognormal = qlognormal;
    return this;
  }

   /**
   * Get qlognormal
   * @return qlognormal
  **/
  @ApiModelProperty(value = "")
  public V1HpQLogNormal getQlognormal() {
    return qlognormal;
  }

  public void setQlognormal(V1HpQLogNormal qlognormal) {
    this.qlognormal = qlognormal;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Matrix v1Matrix = (V1Matrix) o;
    return Objects.equals(this.choice, v1Matrix.choice) &&
        Objects.equals(this.pchoice, v1Matrix.pchoice) &&
        Objects.equals(this.range, v1Matrix.range) &&
        Objects.equals(this.linspace, v1Matrix.linspace) &&
        Objects.equals(this.logspace, v1Matrix.logspace) &&
        Objects.equals(this.geomspace, v1Matrix.geomspace) &&
        Objects.equals(this.uniform, v1Matrix.uniform) &&
        Objects.equals(this.quniform, v1Matrix.quniform) &&
        Objects.equals(this.loguniform, v1Matrix.loguniform) &&
        Objects.equals(this.qloguniform, v1Matrix.qloguniform) &&
        Objects.equals(this.normal, v1Matrix.normal) &&
        Objects.equals(this.qnormal, v1Matrix.qnormal) &&
        Objects.equals(this.lognormal, v1Matrix.lognormal) &&
        Objects.equals(this.qlognormal, v1Matrix.qlognormal);
  }

  @Override
  public int hashCode() {
    return Objects.hash(choice, pchoice, range, linspace, logspace, geomspace, uniform, quniform, loguniform, qloguniform, normal, qnormal, lognormal, qlognormal);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Matrix {\n");
    
    sb.append("    choice: ").append(toIndentedString(choice)).append("\n");
    sb.append("    pchoice: ").append(toIndentedString(pchoice)).append("\n");
    sb.append("    range: ").append(toIndentedString(range)).append("\n");
    sb.append("    linspace: ").append(toIndentedString(linspace)).append("\n");
    sb.append("    logspace: ").append(toIndentedString(logspace)).append("\n");
    sb.append("    geomspace: ").append(toIndentedString(geomspace)).append("\n");
    sb.append("    uniform: ").append(toIndentedString(uniform)).append("\n");
    sb.append("    quniform: ").append(toIndentedString(quniform)).append("\n");
    sb.append("    loguniform: ").append(toIndentedString(loguniform)).append("\n");
    sb.append("    qloguniform: ").append(toIndentedString(qloguniform)).append("\n");
    sb.append("    normal: ").append(toIndentedString(normal)).append("\n");
    sb.append("    qnormal: ").append(toIndentedString(qnormal)).append("\n");
    sb.append("    lognormal: ").append(toIndentedString(lognormal)).append("\n");
    sb.append("    qlognormal: ").append(toIndentedString(qlognormal)).append("\n");
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


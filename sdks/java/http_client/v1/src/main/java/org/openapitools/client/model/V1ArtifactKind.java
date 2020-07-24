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
 * The version of the OpenAPI document: 1.1.5-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import io.swagger.annotations.ApiModel;
import com.google.gson.annotations.SerializedName;

import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * - model: model  - audio: audio  - video: vidio  - histogram: histogram  - image: image  - tensor: tensor  - dataframe: dataframe  - chart: plotly/bokeh/vega chart  - csv: Comma  - tsv: Tab  - psv: Pipe  - ssv: Space  - metric: Metric  - env: Env  - html: HTML  - text: Text  - file: File  - dir: Dir  - dockerfile: Dockerfile  - docker_image: docker image  - data: data  - coderef: coderef  - table: table  - tensorboard: tensorboard  - curve: curve
 */
@JsonAdapter(V1ArtifactKind.Adapter.class)
public enum V1ArtifactKind {
  
  MODEL("model"),
  
  AUDIO("audio"),
  
  VIDEO("video"),
  
  HISTOGRAM("histogram"),
  
  IMAGE("image"),
  
  TENSOR("tensor"),
  
  DATAFRAME("dataframe"),
  
  CHART("chart"),
  
  CSV("csv"),
  
  TSV("tsv"),
  
  PSV("psv"),
  
  SSV("ssv"),
  
  METRIC("metric"),
  
  ENV("env"),
  
  HTML("html"),
  
  TEXT("text"),
  
  FILE("file"),
  
  DIR("dir"),
  
  DOCKERFILE("dockerfile"),
  
  DOCKER_IMAGE("docker_image"),
  
  DATA("data"),
  
  CODEREF("coderef"),
  
  TABLE("table"),
  
  TENSORBOARD("tensorboard"),
  
  CURVE("curve");

  private String value;

  V1ArtifactKind(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static V1ArtifactKind fromValue(String value) {
    for (V1ArtifactKind b : V1ArtifactKind.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }

  public static class Adapter extends TypeAdapter<V1ArtifactKind> {
    @Override
    public void write(final JsonWriter jsonWriter, final V1ArtifactKind enumeration) throws IOException {
      jsonWriter.value(enumeration.getValue());
    }

    @Override
    public V1ArtifactKind read(final JsonReader jsonReader) throws IOException {
      String value = jsonReader.nextString();
      return V1ArtifactKind.fromValue(value);
    }
  }
}


/*
 * Copyright The Cryostat Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as React from 'react';
import '@app/app.css';
import { Card, CardBody, Grid, GridItem, Spinner, Stack, StackItem, Text, TextContent, TextVariants } from '@patternfly/react-core';
import { ServiceContext } from '@app/Shared/Services/Services';
import { AnalysisPage } from './Analysis';
import * as d3 from 'd3';
import { flamegraph } from 'd3-flame-graph';

const FlamegraphTab = () => {
  const context = React.useContext(ServiceContext);
  const [events, setEvents] = React.useState('');

  React.useEffect(() => {
    context.target.recording().subscribe(recording => {
      var jvmId = '';
      if (!recording?.metadata.labels) {
        return;
      }
      for (const label of recording?.metadata.labels){
        if (label.key === 'jvmId') {
          jvmId = label.value;
        }
      }
      context.api.getEventsForRecording(jvmId, recording.name, AnalysisPage.FLAMEGRAPH).subscribe(events => {
        setEvents(events);
      })
    })
  }, []);

  if (!events) {
    return(
      <Spinner></Spinner>
    )
  }

  function createFlamegraph(data) {
    const flame = flamegraph()
      .width(600)
      .cellHeight(15)
      .transitionDuration(320)
      .minFrameSize(1)
      .sort(true)
      .title("")
      .inverted(true);
    const chart = document.createElement("div");
    chart.setAttribute("id", "chart");
    chart.setAttribute("class", ".d3-flame-graph");
    d3.select(chart)
      .datum(data)
      .call(flame);
    // NOTE: this doesn't work out of the box with d3-flame-graph, as the svg rects have 0 width
    // requires: g.select('rect')
    //              .attr('width', function (d) { return width(d); })
    // to be added in d3-flamegraph.js
    // this is also really janky, more of a poc than anything.
    return ({__html: chart.innerHTML});
  }


  return (
    <Grid hasGutter>
      <GridItem span={12}>
        <Card>
          <CardBody>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.h1}>
                    Flamegraph
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem>
                <div dangerouslySetInnerHTML={createFlamegraph(events)}></div>
              </StackItem>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default FlamegraphTab;
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
import { Card, CardBody, Grid, GridItem, Spinner, Stack, StackItem, Text, TextContent, TextList, TextListItem, TextListItemVariants, TextListVariants, TextVariants } from '@patternfly/react-core';
import { ServiceContext, Services } from '@app/Shared/Services/Services';
import { AnalysisPage } from './Analysis';

const GarbageCollectorTab = () => {
  const context: Services = React.useContext(ServiceContext);
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
      context.api.getEventsForRecording(jvmId, recording.name, AnalysisPage.GC).subscribe(events => {
        setEvents(events);
      })
    })
  }, []);

  if (!events) {
    return(
      <Spinner></Spinner>
    )
  }

  return (
    <Grid hasGutter>
      <GridItem span={4}>
        <Card>
          <CardBody>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.h1}>
                    GC Configuration
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem isFilled>
                <TextContent>
                  <TextList component={TextListVariants.dl}>
                    <TextListItem component={TextListItemVariants.dt}>Young Garbage Collector</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['GC_CONFIG_SECTION']['YOUNG_COLLECTOR']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Old Garbage Collector</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['GC_CONFIG_SECTION']['OLD_COLLECTOR']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Concurrent GC Threads</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['GC_CONFIG_SECTION']['CONCURRENT_GC_THREAD_COUNT_MIN']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Parallel GC Threads</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['GC_CONFIG_SECTION']['PARALLEL_GC_THREAD_COUNT_MIN']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Concurrent Explicit GC</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['GC_CONFIG_SECTION']['EXPLICIT_GC_CONCURRENT']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Disabled Explicit GC</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['GC_CONFIG_SECTION']['EXPLICIT_GC_DISABLED']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Uses Dynamic GC Threads</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['GC_CONFIG_SECTION']['USE_DYNAMIC_GC_THREADS']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>GC Time Ratio</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['GC_CONFIG_SECTION']['GC_TIME_RATIO_MIN']}</TextListItem>
                  </TextList>
                </TextContent>
              </StackItem>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem span={4}>
        <Card>
        <CardBody>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.h1}>
                    Heap Configuration
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem isFilled>
                <TextContent>
                  <TextList component={TextListVariants.dl}>
                      <TextListItem component={TextListItemVariants.dt}>Initial Heap Size</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['HEAP_CONFIG_SECTION']['HEAP_CONF_INITIAL_SIZE_MIN']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Minimum Heap Size</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['HEAP_CONFIG_SECTION']['HEAP_CONF_MIN_SIZE']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Maximum Heap Size</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['HEAP_CONFIG_SECTION']['HEAP_CONF_MAX_SIZE']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>If Compressed Oops Are Used</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['HEAP_CONFIG_SECTION']['USE_COMPRESSED_OOPS']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Compressed Oops Mode</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['HEAP_CONFIG_SECTION']['COMPRESSED_OOPS_MODE']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Heap Address Size</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['HEAP_CONFIG_SECTION']['HEAP_ADDRESS_SIZE_MIN']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Object Allignment</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['HEAP_CONFIG_SECTION']['HEAP_OBJECT_ALIGNMENT_MIN']}</TextListItem>
                    </TextList>
                  </TextContent>
              </StackItem>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem span={4}>
        <Card>
        <CardBody>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.h1}>
                    Young Generation Configuration
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem isFilled>
                <TextContent>
                  <TextList component={TextListVariants.dl}>
                      <TextListItem component={TextListItemVariants.dt}>Minimum Young Generation Size</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['YC_CONFIG_SECTION']['YOUNG_GENERATION_MIN_SIZE']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Maximum Young Generation Size</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['YC_CONFIG_SECTION']['YOUNG_GENERATION_MAX_SIZE']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>New Ratio</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['YC_CONFIG_SECTION']['NEW_RATIO_MIN']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Initial Tenuring Threshold</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['YC_CONFIG_SECTION']['TENURING_THRESHOLD_INITIAL_MIN']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Maximum Tenuring Threshold</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['YC_CONFIG_SECTION']['TENURING_THRESHOLD_MAX']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>TLABs Used</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['YC_CONFIG_SECTION']['USE_TLABS']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Minimum TLAB Size</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['YC_CONFIG_SECTION']['TLAB_MIN_SIZE']}</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>TLAB Refill Waste Limit</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>{events['GC_CONFIGURATION']['YC_CONFIG_SECTION']['TLAB_REFILL_WASTE_LIMIT_MIN']}</TextListItem>
                    </TextList>
                  </TextContent>
              </StackItem>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default GarbageCollectorTab;
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
import { ServiceContext } from '@app/Shared/Services/Services';
import { AnalysisPage } from './Analysis';

const JvmInternalsTab = () => {
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
      context.api.getEventsForRecording(jvmId, recording.name, AnalysisPage.JVM_INTERNALS).subscribe(events => {
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
      <GridItem span={12}>
        <Card>
          <CardBody>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.h1}>
                    JVM Internals
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem isFilled>
                <TextContent>
                  <TextList component={TextListVariants.dl}>
                    <TextListItem component={TextListItemVariants.dt}>JVM Start Time</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['JVM_INTERNALS']['JVM_START_TIME']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>JVM Name</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['JVM_INTERNALS']['JVM_NAME']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>JVM PID</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['JVM_INTERNALS']['PID']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>JVM Version</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['JVM_INTERNALS']['JVM_VERSION']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>JVM Arguments</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['JVM_INTERNALS']['JVM_ARGUMENTS']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>JVM Application Arguments</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['JVM_INTERNALS']['JAVA_ARGUMENTS']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Shutdown Time</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['JVM_INTERNALS']['JVM_SHUTDOWN_TIME'] || 'N/A'}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Shutdown Reason</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['JVM_INTERNALS']['JVM_SHUTDOWN_REASON'] || 'N/A'}</TextListItem>
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

export default JvmInternalsTab;
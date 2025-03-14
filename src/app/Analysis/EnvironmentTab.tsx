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
import { AnalysisPage } from './Analysis';
import { ServiceContext } from '@app/Shared/Services/Services';

const EnvironmentTab = () => {
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
      context.api.getEventsForRecording(jvmId, recording.name, AnalysisPage.ENVIRONMENT).subscribe(events => {
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
                    Environment
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem isFilled>
                <TextContent>
                  <TextList component={TextListVariants.dl}>
                    <TextListItem component={TextListItemVariants.dt}>OS Version</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['ENVIRONMENT']['OS_VERSION']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Available physical memory</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['ENVIRONMENT']['MIN_TOTAL_MEMORY']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>CPU Type</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['ENVIRONMENT']['CPU_TYPE']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Number of Cores</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['ENVIRONMENT']['MIN_NUMBER_OF_CORES']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Number of Hardware Threads</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['ENVIRONMENT']['MIN_HW_THREADS']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Number of Sockets</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['ENVIRONMENT']['MIN_NUMBER_OF_SOCKETS']}</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>CPU Description</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>{events['ENVIRONMENT']['CPU_DESCRIPTION']}</TextListItem>
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

export default EnvironmentTab;
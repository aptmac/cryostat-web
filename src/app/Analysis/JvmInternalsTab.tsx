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
import { Card, CardBody, Grid, GridItem, Stack, StackItem, Text, TextContent, TextList, TextListItem, TextListItemVariants, TextListVariants, TextVariants } from '@patternfly/react-core';
import { Caption, Table, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';

const columnNames = {
  name: 'Name',
  value: 'Value',
  origin: 'Origin'
}

const dummyFlagData = [
  { name: 'ActiveProcessorCount', value: '-1', origin: 'Default' },
  { name: 'AdaptiveSizeDecrementScaleFactor', value: '4', origin:	'Default' },
  { name: 'AdaptiveSizeMajorGCDecayTimeScale', value: '10', origin:	'	Default' },
  { name: 'AdaptiveSizePolicyCollectionCostMargin', value: '50', origin:	'	Default' },
  { name: 'AdaptiveSizePolicyGCTimeLimitThreshold', value: '5', origin:	'	Default' },
  { name: 'AdaptiveSizePolicyInitializingSteps', value: '20', origin:	'	Default' },
  { name: 'AdaptiveSizePolicyOutputInterval', value: '0', origin:	'	Default' },
  { name: 'AdaptiveSizePolicyReadyThreshold', value: '5', origin:	'	Default' },
  { name: 'AdaptiveSizePolicyWeight', value: '10', origin:	'	Default' },
  { name: 'AdaptiveSizeThroughPutPolicy', value: '0',	origin: 'Default' },
  { name: 'AdaptiveTimeWeight', value: '25', origin:	'Default' },
  { name: 'AggressiveHeap', value: 'false', origin:	'Default' }
];

export default function JvmInternalsTab() {
  return (
    <Grid hasGutter>
      <GridItem span={6}>
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
                    <TextListItem component={TextListItemVariants.dd}>4/15/19, 12:15:39.317 PM</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>JVM Name</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>OpenJDK 64-Bit Server VM</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>JVM PID</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>N/A</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>JVM Version</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>OpenJDK 64-Bit Server VM (11.0.1+13) for linux-amd64 JRE (11.0.1+13), built on Nov  1 2018 12:02:30 by "mockbuild" with gcc 7.3.1 20180712 (Red Hat 7.3.1-6)</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>JVM Arguments</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>N/A</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>JVM Application Arguments</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>DuplicateThreadNames</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Shutdown Time</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>N/A</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Shutdown Reason</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>N/A</TextListItem>
                  </TextList>
                </TextContent>
              </StackItem>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem span={6}>
        <Card>
        <CardBody>
            <Stack hasGutter>
            <StackItem>
                <TextContent>
                  <Text component={TextVariants.h1}>
                    JVM Flags
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem isFilled>
                <Table
                  aria-label="Simple table"
                >
                  <Thead>
                    <Tr>
                      <Th>{columnNames.name}</Th>
                      <Th>{columnNames.value}</Th>
                      <Th>{columnNames.origin}</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {dummyFlagData.map((repo) => (
                      <Tr key={repo.name}>
                        <Td dataLabel={columnNames.name}>{repo.name}</Td>
                        <Td dataLabel={columnNames.value}>{repo.value}</Td>
                        <Td dataLabel={columnNames.origin}>{repo.origin}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </StackItem>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}
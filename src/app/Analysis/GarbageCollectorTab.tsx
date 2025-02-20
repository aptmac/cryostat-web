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

export default function GarbageCollectorTab() {
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
                    <TextListItem component={TextListItemVariants.dd}>G1New</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Old Garbage Collector</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>G1Old</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Concurrent GC Threads</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>1</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Parallel GC Threads</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>4</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Concurrent Explicit GC</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>false</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Disabled Explicit GC</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>false</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>Uses Dynamic GC Threads</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>true</TextListItem>
                    <TextListItem component={TextListItemVariants.dt}>GC Time Ratio</TextListItem>
                    <TextListItem component={TextListItemVariants.dd}>12</TextListItem>
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
                      <TextListItem component={TextListItemVariants.dd}>250 MiB</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Minimum Heap Size</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>6.5 MiB</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Maximum Heap Size</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>3.89 GiB</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>If Compressed Oops Are Used</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>true</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Compressed Oops Mode</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>Zero based</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Heap Address Size</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>32</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Object Allignment</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>8 B</TextListItem>
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
                      <TextListItem component={TextListItemVariants.dd}>1.3 MiB</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Maximum Young Generation Size</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>2.33 GiB</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>New Ratio</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>2</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Initial Tenuring Threshold</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>7</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Maximum Tenuring Threshold</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>15</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>TLABs Used</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>true</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>Minimum TLAB Size</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>2 KiB</TextListItem>
                      <TextListItem component={TextListItemVariants.dt}>TLAB Refill Waste Limit</TextListItem>
                      <TextListItem component={TextListItemVariants.dd}>64 B</TextListItem>
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
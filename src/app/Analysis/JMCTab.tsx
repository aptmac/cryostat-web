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
import { Button, Card, CardBody, CodeBlock, Grid, GridItem, PageSection, Stack, StackItem, Text, TextContent, TextList, TextListItem, TextListItemVariants, TextListVariants, TextVariants } from '@patternfly/react-core';
import { ServiceContext } from '@app/Shared/Services/Services';
import { NullableRecording } from '@app/Shared/Services/api.types';

const JMCTab = () => {
  const context = React.useContext(ServiceContext);
  const [recording, setRecording] = React.useState<NullableRecording>(undefined);
    React.useEffect(() => {
      context.target.target().subscribe(target => {
        context.target.recording().subscribe(recording => {
            setRecording(recording);
          })
      })
    }, []);

  return (
    <Grid hasGutter>
      <GridItem span={12}>
        <Card>
          <CardBody>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.h1}>
                    Send recording to JDK Mission Control
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem>
                <Button
                  onClick={() => context.api.sendRecordingToJmc(recording)}
                  >
                  Send
                </Button>
              </StackItem>
            </Stack>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem span={12}>
        <Card>
          <CardBody>
            <Stack hasGutter>
              <StackItem>
                <TextContent>
                  <Text component={TextVariants.h1}>
                    Setting up the Cryostat Plugin for JDK Mission Control
                  </Text>
                </TextContent>
              </StackItem>
              <StackItem isFilled>
                <TextContent>
                  <TextList>
                    <TextListItem>
                      Clone the sources for the Cryostat Mission Control Plugin from <a href="https://github.com/aptmac/cryostat-mission-control-plugin">https://github.com/aptmac/cryostat-mission-control-plugin</a>
                    </TextListItem>
                    <TextListItem>
                      Build the project running: <CodeBlock>mvn clean verify</CodeBlock>
                    </TextListItem>
                    <TextListItem>
                      Place the resulting jar in the "dropins" folder of your JMC application ("jmc/dropins")
                    </TextListItem>
                    <TextListItem>
                      Run JDK Mission Control. For the initial launch after placing the plugin jar, run JMC using the "-clean" flag in-order to ensure a clean OSGi environment so the plugin can be loaded
                      <CodeBlock>./jmc -clean</CodeBlock>
                    </TextListItem>
                    <TextListItem>
                      Note: The plugin currently hardcodes 8029 as the websocket port by default, so keep it free on your machine
                    </TextListItem>
                    <TextListItem>
                      Use the button shown above to send the selected Recording into JDK Mission Control
                    </TextListItem>
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

export default JMCTab;
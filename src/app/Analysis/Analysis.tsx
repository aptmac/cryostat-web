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
import { AutomatedAnalysisCard } from '@app/Dashboard/AutomatedAnalysis/AutomatedAnalysisCard';
import { RecordingView } from '@app/RecordingView/RecordingView';
import { ServiceContext } from '@app/Shared/Services/Services';
import { useSubscriptions } from '@app/utils/hooks/useSubscriptions';
import { getActiveTab, switchTab } from '@app/utils/utils';
import { Card, CardBody, CardTitle, Tab, Tabs, TabTitleText } from '@patternfly/react-core';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom-v5-compat';
import JMCTab from './JMCTab';
import EventBrowserTab from './EventBrowserTab';
import EnvironmentTab from './EnvironmentTab';
import GarbageCollectorTab from './GarbageCollectorTab';
import JvmInternalsTab from './JvmInternalsTab';

enum AnalysisTab {
  AUTOMATED_ANALYSIS = 'jfr-automated-analysis',
  EVENT_BROWSER = 'jfr-event-browser',
  JVM_INTERNALS = 'jfr-jvm-internals',
  ENVIRONMENT = 'jfr-environment',
  GC_INFO = 'jfr-garbage-collection',
  JMC = 'jfr-jmc'
}

export enum AnalysisPage {
  JVM_INTERNALS = 'jvm-internals',
  ENVIRONMENT = 'environment',
  GC = 'gc',
}

export interface AnalysisProps {}

export const Analysis: React.FC<AnalysisProps> = ({ ...props }) => {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const context = React.useContext(ServiceContext);
  const addSubscription = useSubscriptions();

  const activeTab = React.useMemo(() => {
    return getActiveTab(search, 'tab', Object.values(AnalysisTab), AnalysisTab.AUTOMATED_ANALYSIS);
  }, [search]);

  const [archiveEnabled, setArchiveEnabled] = React.useState(false);

  React.useEffect(() => {
    addSubscription(context.api.isArchiveEnabled().subscribe(setArchiveEnabled));
  }, [context.api, addSubscription, setArchiveEnabled]);

  const onTabSelect = React.useCallback(
    (_: React.MouseEvent, key: string | number) =>
      switchTab(navigate, pathname, search, { tabKey: 'tab', tabValue: `${key}` }),
    [navigate, pathname, search],
  );

  const cardBody = React.useMemo(() => {
    return archiveEnabled ? (
      <Tabs id="Analysis" activeKey={activeTab} onSelect={onTabSelect} unmountOnExit>
        <Tab
          id="jfr-automated-analysis"
          eventKey={AnalysisTab.AUTOMATED_ANALYSIS}
          title={<TabTitleText>Automated Analysis</TabTitleText>}
        >
          <AutomatedAnalysisCard span={0} dashboardId={0}></AutomatedAnalysisCard>
        </Tab>
        <Tab
          id="jfr-jvm-internals"
          eventKey={AnalysisTab.JVM_INTERNALS}
          title={<TabTitleText>JVM Internals</TabTitleText>}
        >
            <JvmInternalsTab></JvmInternalsTab>
        </Tab>
        <Tab
          id="jfr-garbage-collector"
          eventKey={AnalysisTab.GC_INFO}
          title={<TabTitleText>GC</TabTitleText>}
        >
            <GarbageCollectorTab></GarbageCollectorTab>
        </Tab>
        <Tab
          id="jfr-environment"
          eventKey={AnalysisTab.ENVIRONMENT}
          title={<TabTitleText>Environment</TabTitleText>}
        >
            <EnvironmentTab></EnvironmentTab>
        </Tab>
        <Tab
          id="jfr-event-browser"
          eventKey={AnalysisTab.EVENT_BROWSER}
          title={<TabTitleText>Event Browser</TabTitleText>}
        >
          <EventBrowserTab></EventBrowserTab>
        </Tab>
        <Tab
          id="jfr-jmc"
          eventKey={AnalysisTab.JMC}
          title={<TabTitleText>JDK Mission Control</TabTitleText>}
        >
          <JMCTab></JMCTab>
        </Tab>
      </Tabs>
    ) : (
      <>
        <CardTitle>Active Analysis</CardTitle>
      </>
    );
  }, [archiveEnabled, activeTab, onTabSelect]);

  return (
    <RecordingView {...props} pageTitle="JFR Analysis">
      <Card isFullHeight>
        <CardBody isFilled>{cardBody}</CardBody>
      </Card>
    </RecordingView>
  );
};

export default Analysis;

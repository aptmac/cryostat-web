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

import { ServiceContext } from '@app/Shared/Services/Services';
import { useCryostatTranslation } from '@i18n/i18nextUtil';
import { Checkbox, TextInput } from '@patternfly/react-core';
import * as React from 'react';
import { SettingTab, UserSetting } from '../types';
import { FeatureLevel } from '@app/Shared/Services/service.types';

const defaultPreferences = {
  jmcPluginEnabled: true,
  jmcPluginPort: 8029,
};

const Component = () => {
  const { t } = useCryostatTranslation();
  const context = React.useContext(ServiceContext);
  const [state, setState] = React.useState(defaultPreferences);

  React.useLayoutEffect(() => {
    setState({
      jmcPluginEnabled: context.settings.jmcPluginEnabled(),
      jmcPluginPort: context.settings.jmcPluginPort(),
    });
  }, [setState, context.settings]);

  const handleJmcPluginEnabledChange = React.useCallback(
    (_, jmcPluginEnabled) => {
      setState((state) => ({ ...state, jmcPluginEnabled }));
      context.settings.setJmcPluginEnabled(jmcPluginEnabled);
    },
    [setState, context.settings],
  );

  const handleJmcPluginPortChange = React.useCallback(
    (jmcPluginPort) => {
      setState((state) => ({ ...state, jmcPluginPort }));
      context.settings.setJmcPluginPort(jmcPluginPort);
    },
    [setState, context.settings],
  );

  return (
    <>
      <TextInput
        isDisabled={!state.jmcPluginEnabled}
        value={state.jmcPluginPort}
        type="number"
        onChange={(_event, p) => handleJmcPluginPortChange(p)}
      />
      <Checkbox
        id="jmc-plugin-enabled"
        label={t('SETTINGS.JMC_PLUGIN.CHECKBOX_LABEL')}
        isChecked={state.jmcPluginEnabled}
        onChange={handleJmcPluginEnabledChange}
        data-quickstart-id="settings-connectivity-tab-jmc-plugin"
      />
    </>
  );
};

export const JmcPluginControl: UserSetting = {
  titleKey: 'SETTINGS.JMC_PLUGIN.TITLE',
  descConstruct: 'SETTINGS.JMC_PLUGIN.DESCRIPTION',
  content: Component,
  category: SettingTab.CONNECTIVITY,
  featureLevel: FeatureLevel.DEVELOPMENT,
};

import * as React from 'react';
import cryostatLogo from '@app/assets/cryostat_icon_rgb_default.svg';

const logo = () => {
    return (
        <img src={cryostatLogo}></img>
    );
};

export const icon = { default: logo};

export const getLandingPageURL = () => '/about';

export const getImportRedirectURL = (namespace: string) => `/about`;

import { create } from '@storybook/theming/create';
import brandImage from '!!url-loader!./logo.svg';
import { addons } from '@storybook/addons';

const theme = create({
    base: 'dark',
    brandImage,
    colorPrimary: '#ffde3e',
    colorSecondary: '#54c0e8',
    textMutedColor: '#ffde3e',
    appBg: '#061a40',
    appContentBg: 'rgba(255, 255, 255, 0.05)',
    barBg: 'rgba(255, 255, 255, 0.05)',
});

addons.setConfig({
    theme,
});

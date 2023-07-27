import { FC, ReactElement } from 'react';
import { HeaderContainer, HeaderTextWrapper } from './style';

/**
 * This component is responsible to render header with serach text box
 * @returns ReactElement
 */
export const Header: FC = (): ReactElement => <HeaderContainer area-label='app header is here'>
    <HeaderTextWrapper>Product Site</HeaderTextWrapper>
</HeaderContainer>;
import { css } from '@emotion/css';
import { Spin as AntdSpin } from 'antd';
import 'antd/dist/antd.css';

export const spinStyles = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spin = () => <AntdSpin className={spinStyles} size="large" />;

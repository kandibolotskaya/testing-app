import React, { ReactNode } from 'react';
import css from './style.module.css';

export interface IProps {
    children?: ReactNode 
};

const Page: React.FC = (props: IProps) => {
  return (
    <div className={css.pageWrapper}>
        {props.children}
    </div>
  );
}

export default Page;
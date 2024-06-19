import React from 'react';
import { useRouteError, useNavigate } from "react-router-dom";
import style from './ErrorPage.module.scss';
import { Button } from 'antd';

type Props = {};

const ErrorPage = ({}: Props) => {
    const nav = useNavigate();
    const error: unknown = useRouteError();
    // console.error(error);
    
    return (
        <div className={style['error-page']}>
            <div className={style['error-page__message']}>
                <h1>ErrorPage</h1>

                <i>{(error as Error)?.message || (error as { data?: string })?.data}</i>

                <Button type="primary" danger ghost onClick={() => nav('/')}>Go Back!</Button>
            </div>
        </div>
    )
}

export default ErrorPage;
import React from 'react';
import { useRouteError, useNavigate } from "react-router-dom";

type Props = {};

export default function ErrorPage({}: Props) {
    const nav = useNavigate();
    const error: unknown = useRouteError();
    console.error(error);
    
    return (
        <div>
            <h1>ErrorPage</h1>

            <i>{(error as Error)?.message || (error as { statusText?: string })?.statusText}</i>

            <button type="button" onClick={() => nav('/')}>Go Back!</button>
        </div>
    )
}
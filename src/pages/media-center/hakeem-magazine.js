import React from 'react'
import Head from "src/components/layout/head";
import Content from "src/components/MediaCenter/HakeemMagazine";

export default function index() {
    return (
        <div className="hakeem-magazine">
            <Head title="Almoosa Hospital"></Head>
            <Content />
        </div>
    )
}

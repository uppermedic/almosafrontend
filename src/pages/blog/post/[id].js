import React from 'react';
import { withRouter  } from 'next/router';
import { i18n, Link, withTranslation,Router } from "root/i18n";
import Head from "src/components/layout/head";
import Content from "src/components/Blog/SinglePost";
const Post = ({
    router
}) =>{
    console.log(router.query);
    return (
        <div className="_single-post-page">
            <Head title="Almoosa Hospital"></Head>
            <Content />
        </div>
    )
}
export default withRouter(Post)

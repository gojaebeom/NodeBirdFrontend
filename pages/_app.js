import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';

import wrapper from '../store/configureStore';

//next에서 redux를 자동으로 provider로 감싸주기 때문에 감쌀 필요가 없다.
const NodeBird = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>
    )
}

NodeBird.propTypes = {
    Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);
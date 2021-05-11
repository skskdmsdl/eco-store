import React from 'react';
import Head from 'next/head';
import { List, Avatar, Button } from 'antd';

import AppLayout from '../../components/AppLayout';
import { ContentWrapper } from './styles';

const Company = () => {
    return (
        <AppLayout>
            <Head>
                <title>1:1 문의</title>
            </Head>
            <div>
                <span>1:1 문의</span>
                <Button shape="round">문의 등록</Button>
                <List
                    itemLayout="horizontal"
                    // dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                    )}
                />
            </div>
        </AppLayout>
    );
};

export default Company;
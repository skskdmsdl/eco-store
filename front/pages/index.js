import React, { useEffect } from 'react';

import AppLayout from '../components/AppLayout';
import ShopList from '../components/ShopList';
import ItemList from '../components/ItemList';

const Home = () => {
    return (
        <AppLayout>
            <ShopList />
        </AppLayout>
    );
};

export default Home;
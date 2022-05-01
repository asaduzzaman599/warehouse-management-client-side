import React from 'react';
import useItems from '../../hooks/useItems';
import Header from '../Shared/Header/Header';
import InventoryItems from './InventoryItems/InventoryItems';
import Loading from './../Shared/Loading/Loading';
import WarehouseAnalysis from './WarehouseAnalysis/WarehouseAnalysis';
import Banner from './Banner/Banner';

const Home = () => {
    const [items, setItems, loading] = useItems()

    if (loading) {
        return (<Loading></Loading>)
    }
    console.log(items)
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <WarehouseAnalysis items={items}></WarehouseAnalysis>
        </div>
    );
};

export default Home;
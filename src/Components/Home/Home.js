import React from 'react';
import useItems from '../../hooks/useItems';
import Header from '../Shared/Header/Header';
import InventoryItems from './InventoryItems/InventoryItems';
import Loading from './../Shared/Loading/Loading';
import WarehouseAnalysis from './WarehouseAnalysis/WarehouseAnalysis';
import Banner from './Banner/Banner';
import TopSellingItem from './TopSellingItem/TopSellingItem';

const Home = () => {
    const [items, setItems, loading] = useItems()

    if (loading) {
        return (<Loading></Loading>)
    }
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <hr />
            <WarehouseAnalysis items={items}></WarehouseAnalysis>
            <hr />
            <TopSellingItem items={items.slice(0, 3)}></TopSellingItem>
        </div>
    );
};

export default Home;
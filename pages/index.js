import Layout from '../components/Layout'
/* eslint-disable @next/next/no-img-element */

import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react'
import ReactDOM from 'react-dom'
import db from '../utils/db';
import Product from '../models/Product';
import data from '../utils/data';
import NextLink from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../utils/Store';
// // import Carousel from 'react-material-ui-carousel';
// import useStyles from '../utils/styles';
import ProductItem from '../components/ProductItem';

import Featured from "../components/Featured.js"

export default function Home(props) {
  // const classes = useStyles();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const {products} = props;

  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };
  return (
    <Layout>
        <Featured/>

     <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.name}>
              <ProductItem
                product={product}
                addToCartHandler={addToCartHandler}
              />
            </Grid>
          ))}
        </Grid>
      </div>
  
          </Layout>
  );
          }
          export async function getServerSideProps() {
            await db.connect();
            const products = await Product.find({}, '-reviews').lean();
            // const featuredProductsDocs = await Product.find(
            //   { isFeatured: true },
            //   '-reviews'
            // )
            //   .lean()
            //   .limit(3);
            // const topRatedProductsDocs = await Product.find({}, '-reviews')
            //   .lean()
            //   .sort({
            //     rating: -1,
            //   })
            //   .limit(6);
            await db.disconnect();
            return {
              props: {
                // featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
                //  topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),

                products: products.map(db.convertDocToObj),
                 
              },
            };
          }
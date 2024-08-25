/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import usePagination from '@mui/material/usePagination';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';
import { styled } from '@mui/material/styles';


const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const classes = useStyles();


  // useEffect(() => {
  //   if (page) {
  //     dispatch(getPosts(page));
  //   }
  // }, [dispatch, page]);

  return (
    
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      // count={5}
      page={Number(page) || 1}
      // variant="outlined"
      color="primary"
      size="small"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/contents?page=${item.page}`} />
      )}
    />

    
    
  );
};

export default Paginate;

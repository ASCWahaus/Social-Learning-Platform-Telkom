import { Container, Grid, Grow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { getPosts, getByCategory } from "../actions/posts";
import Navbar from "../component/navbar/navbar";
import Pagination from "../component/Posts/Pagination";
import Posts from "../component/Posts/Posts";
import { Text } from "react-native";
import { Icon } from "@iconify/react";
import "./homepage.css";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Konten = (props) => {
  const { category } = useParams();
  const [currentId, setCurrentId] = useState(0);
  const [searchValue, setSearchValue] = useState(null);
  const [showSearchResult, setShowSearchResult] = useState(props?.location?.searchQuery?.search || false);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  // const [search, setSearch] = useState("");
  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!searchValue && page && !category) {
      console.log(`hyyy`);
      dispatch(getPosts(page));
    } else if (category) {
      if (category === "isSearch") {
        console.log("category", category);
      } else {
        let categorySplit = category.split("-").join(" ");
        console.log(`categorySplit`, categorySplit);
        dispatch(getByCategory(categorySplit));
      }
    }
    // }else if(category){
    //   let categorySplit = category.split('-').join(' ')
    //   console.log(`categorySplit`, categorySplit)
    //   dispatch(getByCategory(categorySplit))
    // }
  }, [searchValue, dispatch, page]);

  const numbContent = isLoading ? "" : posts.length ?? 0;

  return (
    <>
      <div>
        <div style={{ marginBottom: "100px" }}>
          {/* <Navbar
            searchValue={searchValue}
            setValue={(val) => setSearchValue(val)}
            enterPress={() => setShowSearchResult(searchValue)}
          /> */}
          <Navbar searchValue={searchValue} setValue={(val) => setSearchValue(val)} enterPress={() => setShowSearchResult(searchValue)} />
        </div>
        <div className="backcursor"
        // style={{
        //   marginTop: "3%",
        //   marginLeft: "1%",
        //   position: "absolute",
        //   zIndex: 8,
        //   cursor:"pointer"
        // }}
      >
        <a onClick={() => history.goBack()} className="backpostdetails">
          {" "}
          <Icon icon="eva:arrow-back-outline" width="40px" />
        </a>
      </div>
        <Container maxWidth="xl">
          {((showSearchResult && searchValue) || category === "isSearch") && (
            <div>
              {/* {isLoading ? (
                <p className="search">fetch your search</p>
              ) : ( */}
                <p className="search">
                  Showing {numbContent} results for <Text style={{fontWeight:"bold", fontSize:"19px", fontFamily:"Quicksand"}}>"{showSearchResult}"</Text>{" "}
                </p>
            </div>
          )}

          <Grow in>
            <Container>
              <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                {" "}
                <Grid item xs={12} sm={12}>
                  <Posts setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Container>
          </Grow>
          <div style={{ height: "20px" }}></div>
          <Container>
            {/* <div style={{ width: "30%", float: "right" }}>
              {!showSearchResult && !searchValue && !searchQuery && <Pagination page={page} />}
            </div> */}
            <div style={{ width: "30%", float: "right" }}>{!showSearchResult && !searchValue && !searchQuery && <Pagination page={page} />}</div>
            <div style={{ height: "70px" }}></div>
          </Container>
        </Container>
      </div>
    </>
  );
};
export default Konten;

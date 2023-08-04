// import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import Newsitem from './Newsitem';
// import Spinner from './Spinner';

// export class News extends Component {
//     static defaultProps = {

//         country: 'in',
//         pagesize: 9,
//         category: 'general'

//     }

//     static propTypes = {
//         country: PropTypes.string,
//         pagesize: PropTypes.number,
//         category: PropTypes.string
//     }
// }


// // constructor(){
// //     super();
// //     console.log("hello i am a constructor")
// //     this.state = {
// //         articles: [],
// //         loading: false,
// //         page: 1
// //     }
// // }

// constructor() {
//     super();
//     console.log("constructor from news component");
//     this.state = {
//         articles: [],
//         loading: false,
//         page: 1,

//     }

// }

// handleprevclick = async () => {
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4cb9ec7a0ee84021ad05d27590ce9973&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
//     this.setState({ loading: true })
//     let data = await fetch(url);
//     let parseddata = await data.json();
//     console.log(parseddata);

//     this.setState({
//         page: this.state.page - 1,
//         articles: parseddata.articles,
//         loading: false

//     })

// }
// handlenextclick = async () => {
//     if (this.state.page + 1 > Math.ceil(this.state.totalresults / this.props.pagesize)) {

//     }
//     else {
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4cb9ec7a0ee84021ad05d27590ce9973&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
//         this.setState({ loading: true })
//         let data = await fetch(url);
//         let parseddata = await data.json();
//         console.log(parseddata);

//         this.setState({
//             page: this.state.page + 1,
//             articles: parseddata.articles,
//             loading: false

//         })
//     }

// }
//     async componentDidMount(){
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4cb9ec7a0ee84021ad05d27590ce9973&page=1&pageSize=${this.props.pagesize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parseddata = await data.json();
//     console.log(parseddata);
//     this.setState({
//         articles: parseddata.articles,
//         totalresults: parseddata.totalResults,
//         loading: false

//     })
// }
// render() {
//     return (
//         <div className='container my-3'>
//             <h1 className="text-center" style={{ margin: '35px 0px' }}>News Monkey-Top Headlines</h1>
//             {this.state.loading && <Spinner />}

//             <div className="row">
//                 {!this.state.loading && this.state.articles.map((element) => {
//                     return (<div className="col-md-4" key={element.url}>
//                         <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage ? element.urlToImage : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/06-26-2022/t_64956dea819944d79ac66b65849c28e3_name_ColombiaThumb.jpg&w=1440"} newsurl={element.url} />
//                     </div>)
//                 })}

//             </div>
//             <div className="container d-flex justify-content-between">
//                 <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handleprevclick}> &larr; Previous</button>
//                 <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalresults / this.props.pagesize)} className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr; </button>
//             </div>
//         </div>

//     )
// }


// export default News








import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 9,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }


    capitalize = (string) => {
        const lower = string.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    constructor(props) {
        super(props);
        console.log("constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalize(this.props.category)} - Newz`

    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&
        s&apiKey=cb0d2e2ebddc4cacaabc09cce5301a63&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4cb9ec7a0ee84021ad05d27590ce9973&page=1&pagesize=${this.props.pagesize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData= await data.json()
        // this.setState({
        //     articles: parsedData.articles, 
        //     totalresults: parsedData.totalresults,
        //     loading:false
        // })
        this.updateNews()


    }

    // handleprevclick = async () => {
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4cb9ec7a0ee84021ad05d27590ce9973&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;

        //  this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData= await data.json()
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading:false
        // })

        // this.setState({ page: this.state.page - 1 })
    //     this.updateNews()
    // }

    // handlenextclick = async () => {
    //     //     if( this.state.page+1>Math.ceil(this.state.totalresults/this.props.pagesize)){

    //     //     }
    //     //     else{
    //     //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4cb9ec7a0ee84021ad05d27590ce9973&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
    //     //      this.setState({loading:true});
    //     //     let data = await fetch(url);
    //     //     let parsedData= await data.json()
    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parsedData.articles,
    //     //         loading:false
    //     //     })
    //     // }
    //     this.setState({ page: this.state.page + 1 })
    //     this.updateNews()

    // }

    fetchMoreData=async ()=>{
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&
        s&apiKey=cb0d2e2ebddc4cacaabc09cce5301a63&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
        
    }
    

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center" style={{ margin: '35px 0px' }}>Newz - Top Headlines - {this.capitalize(this.props.category)}</h1>
                {/* {this.state.loading && <Spinner/> } */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >

                    <div className="row">
                        {this.state.articles.map((element) => {
                            return (<div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage ? element.urlToImage : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/06-26-2022/t_64956dea819944d79ac66b65849c28e3_name_ColombiaThumb.jpg&w=1440"} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>)
                        })}

                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handleprevclick}> &larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr; </button>
                </div> */}
            </div>

        )

    }
}





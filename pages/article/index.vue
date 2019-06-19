<template>
  <div class="wrapper">
    <div class="sj-content">
      <div class="left-nav">
        <div class="float-nav" id="float-nav">
          <ul class="sui-nav nav-tabs nav-xlarge tab-navbar tab-vertical">
            <li class="active"><a>热门</a></li>
            <li v-for="(item,index) in columnList" :key="index">
              <a href="#" @click="updateArticle(item.id)">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right-content">
        <div class="fl middle">
          <!--<div class="carousel">
            <div id="myCarousel" data-ride="carousel" data-interval="4000" class="sui-carousel slide">
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="active item">
                  <img src="~/assets/img/widget-banner01.png" />
                </div>
                <div class="item">
                  <img src="~/assets/img/widget-banner02.png" />
                </div>
                <div class="item">
                  <img src="~/assets/img/widget-banner01.png" />
                </div>
              </div>
            </div>
          </div>-->
          <!--轮播图组件-->
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(banner,index) in banners" :key="index">
                <img :src="banner.url">
                <!--<img src="~/assets/img/widget-banner01.png">-->
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
          </div>

          <div class="data-list">
            <!--<el-table  border style="width: 100%">&lt;!&ndash;:data="list"&ndash;&gt;
              <el-table-column >-->
            <!--<ul class="headline fixed">
			  <li class="headline-item" v-for="(item,index) in list" :key="index">
				<div class="fl indexImg">
				  <img src=""/>
				</div>
				<div class="words">
				  <h3>{{item.content}}<span><img src="" class="vip"/></span></h3>
				  <h5 class="author">
					<div class="fl">
					  <span class="authorName"> <img src="~/assets/img/widget-photo.png" alt=""/> 玻璃通 </span>
					  <span>6月22日 12:01</span>
					</div>
					<div class="fr attention">
					  <span class="attentionText">关注</span>
					  <span class="beforeclose"> <i class="fa fa-times delete" aria-hidden="true"></i> <i
						class="nolike">不感兴趣</i> </span>
					</div>
					<div class="clearfix"></div>
				  </h5>
				</div>
				<p class="content">
				  滴滴与360都开源了各自的插件化框架，VirtualAPK与RePlugin,作为一个插件化方面的狂热研究者，在周末就迫不及待的下载了Virtualapk框架来进行研究，本篇博客带的……</p>
			  </li>
			</ul>-->
            <el-table :data="list" border style="width: 100%">
              <el-table-column
                style="width: 100%">
                <template slot-scope="scope">
                  <ul class="headline fixed">
                    <li class="headline-item">
                      <div class="words">
                        <router-link :to="'/article/'+scope.row.id"><a>{{scope.row.title}}</a></router-link><!--<span><img src="" class="vip"/></span>-->
                        <h5 class="author">
                          <div class="fl">
                            <span class="authorName"> <img src="~/assets/img/widget-photo.png" alt=""/> {{scope.row.userid}} </span>
                            <span>{{scope.row.createtime}}</span>
                          </div>
                          <div class="fr attention">
                            <span class="attentionText">关注</span>
                            <span class="beforeclose">
                              <i class="fa fa-times delete" aria-hidden="true"></i>
                              <i class="nolike">不感兴趣</i>
                            </span>
                          </div>
                          <div class="clearfix"></div>
                        </h5>
                      </div>
                       <p class="content">{{scope.row.content}}</p>
                    </li>
                  </ul>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- </el-table-column>
		 </el-table>-->
          <el-pagination
            @size-change="fetchData"
            @current-change="fetchData"
            :current-page="currentPage"
            :page-sizes="[5,10,20]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>

        </div>
        <div class="fl right">
          <!--<div class="activity">
            <div class="acti">
              <img src="~/assets/img/widget-activity01.png" alt="活动一"/>
            </div>
            <div class="acti">
              <img src="~/assets/img/widget-activity02.png" alt="活动一"/>
            </div>
          </div>
          <div class="block-btn">
            <p>今天，有什么好东西要和大家分享么?</p>
            <a class="sui-btn btn-block btn-share" href="~/assets/headline-submit.html" target="_blank">发布分享</a>
          </div>-->
          <div class="question-list">
            <h3 class="title">热门回答</h3>
            <div class="lists">
              <ul>
                <li class="list-item" v-for="(item,index) in problemList" :key="index" v-show="index<4">
                  <p class="list-title">
                    <router-link :to="'/qa/'+item.id">{{item.title}}</router-link>
                  </p>
                  <p class="authorInfo">
                    <span class="authorName">{{item.nickname}}</span><!--<img :src="item.user.avatar" alt=""/>-->
                    <span>{{item.createtime}}</span></p>
                </li>
              </ul>
              <a class="sui-btn btn-block btn-bordered btn-more" href="/qa">查看更多</a>
            </div>
          </div>
          <div class="activity-list">
            <h3 class="title">活动日历</h3>
            <div class="list">
              <ul>
                <li class="list-item" v-for="(item,index) in gatheringList" :key="index" v-show="index<4">
                  <p class="list-time"> {{item.createtime}}</p>
                  <div class="list-content clearfix">
                    <router-link :to="'/gathering/item/'+item.id">
                      <div class="fl img">
                        <img :src="item.image" height="34" width="60" alt=""/>
                      </div>
                      <div>
                        <p>{{item.summary}}</p>
                      </div>
                    </router-link>
                  </div>
                </li>
              </ul>
              <a class="sui-btn btn-block btn-bordered btn-more" href="/gathering">查看更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '~/assets/css/page-headline-logined.css'
  import articleApi from '../../api/article'
  import columnApi from '../../api/column'
  import gatheringApi from '../../api/gathering'
  import problemApi from '../../api/problem'
  import axios from 'axios'

  export default {
    data() {
      return {
        list: [],
        total: 0, // 总记录数
        currentPage: 1, // 当前页
        pageSize: 10, // 每页大小
        searchMap: {state: '1'},
        pojo: {}, // 编辑表单绑定的实体对象
        id: '', // 当前用户修改的ID
        banners: [
          {
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560882456001&di=d6265ce9bba5b0136165e71c6cfad1ee&imgtype=0&src=http%3A%2F%2Fdata.useit.com.cn%2Fforum%2F201711%2F17%2F112957ovxxh3fj3kbifvkt.jpg',
            id: 1
          },
          {
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560882413283&di=25d7f3788a6f4d520ce156ff193c0a0b&imgtype=0&src=http%3A%2F%2Fdata.useit.com.cn%2Fuseitdata%2Fforum%2F201711%2F17%2F112947inx0ee11lx47ly3e.jpg',
            id: 2
          },
          {
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560882535374&di=904c4443268c8bc9d35d700a1e923425&imgtype=0&src=http%3A%2F%2Fdata.useit.com.cn%2Fforum%2F201711%2F17%2F111219hr0ubb1u0u9r1fbe.jpg',
            id: 3
          }
          /*{url:'http://sy0.img.it168.com/article/0/970/970154.png_i-730x550',id:1},
          {url:'http://sy1.img.it168.com/article/0/970/970063.jpg_i-730x550',id:2},
          {url:'http://img.blog.itpub.net/blog/2019/06/17/abeb40e84e667ec8.jpeg?x-oss-process=style/bb',id:3}
        */],
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          speed: 800,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        }
      }
    },
    created() {
      this.fetchData()
    },
    asyncData({params}) {
      return axios.all([problemApi.list('hotlist', params.label, 1, 4),
        gatheringApi.search(1, 4, {'state': '1'}),
        columnApi.getList()]).then(
        axios.spread(function (problemList, gatheringList, columnList) {
          return {
            problemList: problemList.data.data.rows,
            gatheringList: gatheringList.data.data.rows,
            columnList: columnList.data.data
          }
        })
      )
    },
    methods: {
      fetchData() {
        articleApi.search(this.currentPage, this.pageSize, this.searchMap).then(response => {
          this.list = response.data.data.rows
          this.total = response.data.data.total
        })
      },
      updateArticle(columnId){
        articleApi.search(this.currentPage, this.pageSize, {'columnid':columnId}).then(res =>{
          this.list = res.data.data.rows,
            this.total = res.data.data.total
        })
      }
    },
    mounted() {
      // console.log('app init', this)
      /* setTimeout(() => {
		 this.banners.push('/5.jpg')
		 console.log('banners update')
	   }, 3000)
	   console.log(
		 'This is current swiper instance object', this.mySwiper,
		 'I will slideTo banners 3')
	   this.mySwiper.slideTo(3)*/
    }
  }
</script>

<style lang="scss" scoped>
  .my-swiper {
    height: 300px;
    width: 100%;

  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination {

  > .swiper-pagination-bullet {
    background-color: red;
  }

  }
  }
</style>

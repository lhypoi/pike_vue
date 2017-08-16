<template>
	<div>
		<headbox title="关注"></headbox>
		<ul v-infinite-scroll="load" infinite-scroll-distance="10">
			<li v-for="item in follow_list">
				<router-link to="/detail">
					<list item="item"></list>
				</router-link>
			</li>
		</ul>
		<footbox active=1></footbox>
	</div>
</template>

<script type="es6">
import headbox from '../components/header'
import footbox from '../components/footer'
import list from '../components/list'
import Axios from 'axios'
export default {
  data() {
    return {
	  follow_list: [],
	  page: 1
	}
  },
  components: {
    headbox, list, footbox
  },
  mounted() {

  },
  methods: {
    load: function() {
	  Axios.get('/api/works', {params:{page:this.page}}).then((rtnData) => {
	    this.list.push(...rtnData.data.data)
		this.page ++
	  })
	}
  }
}
</script>
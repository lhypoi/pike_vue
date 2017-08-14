<template>
	<div>
		<headbox title="关注"></headbox>
		<list></list>
		<footbox active=1></footbox>
	</div>
</template>

<script type="es6">
import headbox from '../components/header'
import footbox from '../components/footer'
import list from '../components/list'
export default {
  components: {
    headbox, list, footbox
  }
}
</script>
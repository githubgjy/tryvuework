<script src="../../../../vuebig/vue2-elm-master/src/main.js"></script>
<template>
   <div class="goods">这个是主页</div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';
.goods{
  @include shadow;
}
</style>

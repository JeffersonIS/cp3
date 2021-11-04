<template lang="html">
  <div class="card-container">
    <img :src="'/imgs/Piece'+item.id+'.png'" alt="no image to show yet">
      <div class="card-details">
        <h6>{{item.name}}</h6>
        <div><strong>Collection:</strong> {{item.parentPiece}}</div>
        <div><strong>Price:</strong> ${{item.price}}</div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: Object,
  }
}
</script>

<style lang="css" scoped>
.router-link-active{
  color: black;
}

.card-container{
  width: 250px;
  margin: 1em .6em;
  border-radius: 4px;
  box-shadow: 1px 1px 10px 1px lightgrey;
  text-align: left;
}

.card-container:hover{
  box-shadow: .5px .5px 2px 1px lightgrey;
  cursor: pointer;
}

.card-container img{
  width: 249.5px;
  height: 200px;
  border-radius: 4px;
  min-height:200px;
}

.card-details{
  padding: 12px 0px 12px 10px;
}

.card-details h6{
  font-weight: bold;
  color: #289EF3;
  text-decoration: none;
}

.card-details h6:hover{
  color: #289EF3;
  text-decoration: none;
}

.card-details div{
  padding-top: 2px;
  text-decoration: none;
  color: black;
}
</style>

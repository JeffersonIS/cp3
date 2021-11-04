<template lang="html">
  <div class="">
    <div class="breadcrumb">
      <router-link :to="'/'">&#8592; Browse</router-link>
    </div>

    <div class="wrapper">
      <div class="img-col">
        <img :src="'/imgs/Piece'+item.id+'.png'" alt="picture">
      </div>

      <div class="item-details-col">
        <div class="item-details">
          <h1>{{this.item.name}}</h1>
          <hr>
          <div class="detail-item"><strong>Sponsor: </strong> {{this.item.owner}}</div>
          <div class="detail-item"><strong>Current Price: </strong> ${{this.item.price}}</div>
          <div class="detail-item"><strong>Description: </strong> {{this.item.description}}</div>
          <div class="detail-item"><strong>Collection: </strong> {{this.item.parentPiece}}</div>
          <div class="detail-item"><strong>Collection Location: </strong> {{this.item.parentLocation}}</div>
          <div class="detail-item"><strong>Location in Collection: </strong> {{this.item.locationInParent}}</div>
        </div>
        <div class="purchase">
          <button
            type="button"
            name="button"
            class="btn btn-primary btn-blue"
            href="/join.html">
            Learn More</button>
            <div class="">
              <small>See what you get &#8594;</small>
            </div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <div class="wrapper">
      <div class="item-location">
        <h2>Within the Collection</h2>
        {{this.item.locationInParentDescription}}.{{this.item.locationInParentDescription}}

      </div>
      <div class="img-location">
        <img  src="/imgs/PillarsOfHumanity.jpg" alt="">
      </div>
    </div>
    <div class="spacer"></div>
    <div class="wrapper" style="margin: 0em 15em;">
      <h5>Each NFT purchase helps fund new stained glass projects and provides  the donater with a certified digital asset that can increase in value. Thank you for your support!</h5>
    </div>
    <div class="spacer"></div>
    <div class="wrapper">
      <table class="first-table" >
        <th class="">
          What Do You Get with a Roots of Humanity NFT?
        </th>
        <tr class="first-table-row">
          <td>
            You will get a certified, digital asset that is unique and transferable. This will be sent by .... once you purchase it from the third party market place........
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </td>
        </tr>
      </table>

    </div>
    <div class="spacer"></div>
  </div>
</template>

<script>
export default {
  name: 'Assets',
  data() {
     return {
       item: {},
     }
   },
   created() {
     this.item = this.$root.$data.nftList.find(item => item.id === parseInt(this.$route.params.id));
   },
  }
</script>

<style lang="css" scoped>
.first-table{
  text-align: left;
}

.first-table-row{
  background-color: rgba(0, 0, 0, 0.1);
}

.first-table-row td{
  padding: 10px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

}

.first-table th{
  background-color: rgba(0, 0, 0, 0.3);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 10px;

}

.spacer{
  height: 70px;
}
.btn-blue{
  width: 200px;
  background-color: #7CC26B;
  border: none;
}

.btn-blue:hover{
  background-color: #7CC26B;
  opacity: .8;
}

.purchase{
  margin-left: auto;
  margin-top: 3em;
}

.purchase div{
  margin-top: .5em;
  margin-left: .25em;
}

.purchase div:hover{
  text-decoration: underline;
  cursor: pointer;
}

.img-col{
  min-width: 35vw;
}

.img-col img{
  padding: 8px;
  box-shadow: 1px 1px 10px 1px grey;
}

.item-location{
  max-width: 30vw;
  display: flex;
  color: black;
  text-align: left;
  flex-direction: column;

}

.img-location img{
  height: 400px;
}



.item-details-col{
  display: flex;
  width: 65vw;
  color: black;
  text-align: left;
  flex-direction: column;
}

.item-details div{
  margin-top: 1em;
}

.router-link-active{
  color: black;
}

.breadcrumb{
  text-decoration: none;
  background-color: white;
}
.wrapper{
  display: flex;
  justify-content: space-around;
  margin: 0em 4em;
}

@media only screen and (max-width: 1100px) {
  .wrapper {
    flex-direction: column;
  }

  .item-details-col{
    margin-top: 2em;
  }

  .img-location{
    margin-top: 2em;
  }

}

</style>

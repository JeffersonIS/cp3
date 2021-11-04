<template lang="html">
  <div class="page-container">

    <h2>What to Know About NFTs</h2>
    <small>Published: Nov 2021</small>

  <div class="wrapper">
    <div class="question-col">
        <h4>What is an NFT?</h4>
    </div>
    <div class="answer-col">
      <p>NFT stands for ‘Non-fungible token’. An NFT is a digital asset that is bought and sold online. It is a unique digital identifier that cannot be copied. It is recorded in a blockchain and used to certify authenticity and ownership. NFTs are used to verify proof of ownership of digital assets such as images, video clips, music, and gifs.</p>
      <p>NFTs are unique, or at least part of a limited group, which creates digital scarcity. When an item is scarce and in-demand, the value of that item increases.</p>
      <p>NFTs make it possible for one person to have ownership rights of a digital asset. For example, as of writing this article, NBA Top Shot NFT Marketplace is selling a 22 second video of Kevin Durant finishing a masterful alle-oup in the 2020 NBA playoffs for $2,899. </p>
      <img src="/imgs/nftimg.jpg" alt="piece">
    </div>
  </div>

    <div class="wrapper">
      <div class="question-col">
          <h4>Why is Roots of Humanity Using NFTs?</h4>
      </div>
      <div class="answer-col">
        <p>Roots of Humanity is looking to enter the NFT market because it sees an immense opportunity for others to help further the cause of education and learning throughout the world. Roots has created hundreds of digital stained glass assets from their many pieces of art. These digital assets have been made into NFTs and are available for purchase through the website.</p>
        <p>By purchasing an NFT, any supporter of Roots’ cause can directly fund their projects throughout the world. A percentage of the purchase price of a Roots digital asset will go directly to Roots to fund their mission worldwide.</p>
        <p>To learn more about Roots of Humanity’s cause, <a href="/organization">click here.</a> </p>
      </div>
    </div>

    <div class="wrapper">
      <div class="question-col">
          <h4>How are NFTs created?</h4>
      </div>
      <div class="answer-col">
        <p>NFTs are essentially like physical collectors items. When you buy an NFT, you get a digital file instead of a painting to hang on your wall. These items can increase or decrease in value depending on demand or interest. </p>
        <p>NFTs are created when an artist or publisher makes some type of digital asset and then ‘mints’ the item through one of the many NFT marketplaces that exist online, such as foundation.app, solanart.io, or opensea.io. Minting consists of the following:</p>
        <ol>
          <li>Uploading the digital artwork through an NFT marketplace</li>
          <li>Adding a title and description</li>
          <li>Setting the reserve price</li>
          <li>Signing your NFT</li>
          <li>Waiting for it to be deployed to the blockchain</li>
        </ol>
        <img src="/imgs/createAnNFT.png" alt="">
        <p>After an NFT is created it is made a part of the blockchain. All subsequent purhcases and sales of the NFT are recorded on the blockchain with the owner. Because this information is recorded on the blockchain it cannot be changed, copied, divided or modified. NFTs are secure because they are built into the blockchain.</p>

      </div>
    </div>


</div>

</template>

<script>
export default {
  name: 'aboutNFTs',

}
</script>

<style lang="css" scoped>
.wrapper{
  display: flex;
  justify-content: space-around;
  margin: 1.5em 4em;
  align-content: flex-end;
}


.question-col{
  width: 25vw;
  text-align: left;
  padding-right: 2em;
}

.answer-col{
  width: 100%;
  text-align: left;
 }

 .answer-col img{
   width: 50vw;
   height: auto;
 }

 .page-container{
   margin-top: 4em;
   margin-left: 8em;
   margin-right: 8em;
 }
</style>

<template>
  <layout background="landing" class="landing">
    <template v-slot:header>
      <Header />
    </template>
    <template v-slot:content>
      <div class="landing">
        <div class="landing-element" />
        <MainContainer class="content">
          <div class="title">
            <h1 class="title">SocialFi <br> platform</h1>
          </div>
          <h2 class="description">Degen Gram - Social network based on smart contracts BNB Smart Chain. Leave a request to participate in the testnet</h2>
          <div class="info">
            <p>
              Imagine if Twitter ran on blockchain — no ban for Trump
            </p>
          </div>
          <div class="cart-list">
            <info-cart
              v-for="item in cartList"
              :key="item"
              :name="item.name"
              :info="item.info"
            />
          </div>
          <time-line />
        </MainContainer>
      </div>
    </template>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout, MainContainer } from '@/shared/ui'
import { Header } from '@/widgets/header'
import InfoCart from '@/entities/landing/info-cart/info-cart.vue'
import TimeLine from '@/entities/landing/time-line/timeline.vue'

export default defineComponent({
  name: 'Landing',
  components: {
    TimeLine,
    InfoCart,
    MainContainer,
    Header,
    Layout
  },
  computed: {
    cartList () {
      return [
        {
          name: 'No censorship',
          info: 'We store all posts in the blockchain so you can’t delete or edit anything.'
        },
        {
          name: 'No spam',
          info: 'Posts are paid, so spam won’t be cost-effective.'
        },
        {
          name: 'No surveillance',
          info: 'You can’t be tracked — we don’t collect your data.'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.landing {
  background-color: #142723;

  .content {
    z-index: 1;
    position: relative;

    .title {
      text-transform: uppercase;
      text-align: center;
      color: #FFFF;
      font-size: 140px;
      position: relative;
      display: block;

      ::after {
        content: '';
        position: absolute;
        width: 60%;
        height: 34px;
        background: #5FE453;
        left: 60%;
        transform: translate(-65%, -9px) rotate(-5deg);
      }
    }

    .description {
      font-size: 24px;
      font-weight: 400;
      color: #FFFF;
      text-align: center;
      width: 50%;
      margin: 0 auto 200px;
    }

    .info {
      width: 50%;
      margin: 0 auto 80px;
      font-size: 48px;
      text-align: center;
      color: #FFFF;
      font-weight: 400;
    }

    .cart-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 24px;
      margin-bottom: 200px;
    }
  }

  .landing-element {
    margin: 0 auto;
    height: 3000px;
    position: absolute;
    width: 950px;
    background: #243F3A;
    z-index: 0;
    transform: rotate(-17.99deg);
    left: 50%;
    top: -300px;
  }
}
</style>

<template>
  <div class="carousel">
    <div class="carousel-controls">
      <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
      <div class="card-carousel-wrapper">
        <div class="card-carousel">
          <div class="card-carousel--overflow-container">
            <div
              class="card-carousel-cards"
              :style="{ transform: 'translateX' + '(' + currentOffset + 'rem' + ')'}"
            >
              <div class="card-carousel--card" v-for="(item, index) in items" :key="index">
                <span>{{ item.month }}</span>
                <p>{{ item.number }}</p>
                <span>{{ item.day }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      currentOffset: 0,
      windowSize: 10,
      paginationFactor: 10,
      items: [
        { month: "Nov", day: "Sab", number: "20" },
        { month: "Nov", day: "Dom", number: "21" },
        { month: "Nov", day: "Lun", number: "22" },
        { month: "Nov", day: "Mar", number: "23" },
        { month: "Nov", day: "Mie", number: "24" },
        { month: "Nov", day: "Jue", number: "25" },
        { month: "Nov", day: "Vie", number: "26" },
        { month: "Nov", day: "Sab", number: "27" },
        { month: "Nov", day: "Dom", number: "28" },
        { month: "Nov", day: "Lun", number: "29" },
        { month: "Nov", day: "Mar", number: "30" },
        { month: "Dic", day: "Dom", number: "1" },
        { month: "Dic", day: "Lun", number: "2" },
        { month: "Dic", day: "Mar", number: "3" },
        { month: "Dic", day: "Mie", number: "4" },
        { month: "Dic", day: "Jue", number: "5" },
        { month: "Dic", day: "Vie", number: "6" },
        { month: "Dic", day: "Sab", number: "7" },
        { month: "Dic", day: "Dom", number: "8" },
        { month: "Dic", day: "Lun", number: "9" },
        { month: "Dic", day: "Mar", number: "10" }
      ]
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    }
  },
  methods: {
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";
.carousel {
  display: flex;
  height: 100%;
  min-height: 12rem;
  width: 100%;
  position: relative;

  &-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 10;
  }

  .card-carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    color: $grey;
    overflow: hidden;
  }

  .card-carousel {
    display: flex;
    justify-content: center;
    width: 100%;

    &--overflow-container {
      overflow: hidden;
    }

    &--nav__left,
    &--nav__right {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      padding: 1rem;
      box-sizing: border-box;
      border-top: 0.8rem solid $grey-lite;
      border-right: 0.8rem solid $grey-lite;
      margin: 0;
      transition: transform 150ms linear;
      cursor: pointer;
      &[disabled] {
        opacity: 0;
        border-color: $grey;
      }
      position: relative;
    }

    &--nav__left {
      transform: rotate(-135deg);
      &:active {
        transform: rotate(-135deg) scale(0.9);
      }
    }

    &--nav__right {
      transform: rotate(45deg);
      &:active {
        transform: rotate(45deg) scale(0.9);
      }
    }
  }

  .card-carousel-cards {
    display: flex;
    transition: transform 150ms ease-out;
    transform: translatex(0rem);

    .card-carousel--card {
      background-color: $clear;
      border: 0.1rem solid $grey-lite;
      border-radius: 0.2rem;
      display: flex;
      padding: 0.8rem;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin: 0 1rem;
      min-width: 5.2rem;
      cursor: pointer;
      z-index: 3;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      p {
        padding: 0.3rem 0;
        margin: 0;
        margin-bottom: 0.2rem;
        font-size: $big-size;
        font-weight: 500;
        color: $blackio;
        user-select: none;
      }

      span {
        font-size: $small-size;
      }
    }
  }
}
</style>

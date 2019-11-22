<template>
  <div style="width: 100%">
    <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
    <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>

    <div class="card-carousel-wrapper">
      <div class="card-carousel">
        <div class="card-carousel--overflow-container">
          <div
            class="card-carousel-cards"
            :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
          >
            <div class="card-carousel--card" v-for="(item, index) in items" :key="index">
              <div class="card-carousel--card--footer">
                <span>{{ item.month }}</span>
                <p>{{ item.number }}</p>
                <span>{{ item.day }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "Carousel",
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 10,
      items: [
        { month: "Ene", day: "Lunes", number: "1" },
        { month: "Ene", day: "Martes", number: "2" },
        { month: "Ene", day: "Miercoles", number: "3" },
        { month: "Ene", day: "Jueves", number: "4" },
        { month: "Ene", day: "Viernes", number: "5" },
        { month: "Ene", day: "Sábado", number: "6" },
        { month: "Ene", day: "Domingo", number: "7" },
        { month: "Ene", day: "Lunes", number: "8" },
        { month: "Ene", day: "Martes", number: "9" },
        { month: "Ene", day: "Miercoles", number: "10" },
        { month: "Ene", day: "Jueves", number: "11" },
        { month: "Ene", day: "Viernes", number: "12" },
        { month: "Ene", day: "Sábado", number: "13" },
        { month: "Ene", day: "Domingo", number: "14" },
        { month: "Ene", day: "Lunes", number: "15" },
        { month: "Ene", day: "Martes", number: "16" },
        { month: "Ene", day: "Miercoles", number: "17" },
        { month: "Ene", day: "Jueves", number: "18" },
        { month: "Ene", day: "Viernes", number: "19" },
        { month: "Ene", day: "Sábado", number: "10" },
        { month: "Ene", day: "Domingo", number: "21" },
        { month: "Ene", day: "Lunes", number: "22" },
        { month: "Ene", day: "Martes", number: "23" },
        { month: "Ene", day: "Miercoles", number: "24" },
        { month: "Ene", day: "Jueves", number: "25" },
        { month: "Ene", day: "Viernes", number: "26" },
        { month: "Ene", day: "Sábado", number: "27" },
        { month: "Ene", day: "Domingo", number: "28" },
        { month: "Ene", day: "Lunes", number: "29" },
        { month: "Ene", day: "Martes", number: "30" },
        { month: "Ene", day: "Miercoles", number: "31" }
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
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
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
    width: 15px;
    height: 15px;
    padding: 10px;
    box-sizing: border-box;
    border-top: 2px solid $primary;
    border-right: 2px solid $primary;
    cursor: pointer;
    margin: 0 20px;
    transition: transform 150ms linear;
    &[disabled] {
      opacity: 0.2;
      border-color: black;
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
  transform: translatex(0px);

  .card-carousel--card {
    margin: 0 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
      0 2px 2px 0 rgba(40, 44, 53, 0.08);
    background-color: #fff;
    border-radius: 4px;
    z-index: 3;
    margin-bottom: 2px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &--footer {
      border-top: 0;
      padding: 7px 15px;

      p {
        padding: 3px 0;
        margin: 0;
        margin-bottom: 2px;
        font-size: 19px;
        font-weight: 500;
        color: $grey;
        user-select: none;

        &:nth-of-type(2) {
          font-size: 12px;
          font-weight: 300;
          padding: 6px;
          background: rgba(40, 44, 53, 0.06);
          display: inline-block;
          position: relative;
          margin-left: 4px;
          color: $grey;

          &:before {
            content: "";
            float: left;
            position: absolute;
            top: 0;
            left: -12px;
            width: 0;
            height: 0;
            border-color: transparent rgba(40, 44, 53, 0.06) transparent
              transparent;
            border-style: solid;
            border-width: 12px 12px 12px 0;
          }

          &:after {
            content: "";
            position: absolute;
            top: 10px;
            left: -1px;
            float: left;
            width: 4px;
            height: 4px;
            border-radius: 2px;
            background: $clear;
          }
        }
      }
    }
  }
}

h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: $primary;
}
</style>

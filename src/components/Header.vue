<template>
  <header>
    <nav>
      <ul class="row left" :class="{ 'open' : isOpen }">
        <li>
          <a href="/">
            <img src="../assets/tu-canton_logo.svg" alt="tu canton" height="40" />
          </a>
        </li>
        <li class="hide-on-mobile" :class="{ 'open' : isOpen }">
          <a href="/">Comprar</a>
        </li>
        <li class="hide-on-mobile" :class="{ 'open' : isOpen }">
          <a href="/">Precalifícate</a>
        </li>
      </ul>
      <div class="right">
        <button class="hide-on-mobile">Iniciar sesión</button>
        <div @click.prevent="toggle" class="burger show-on-mobile" :class="{ 'open' : isOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
@import "../scss/index.scss";
@import "../scss/shared/_mixins.scss";

header {
  border-bottom: 0.1rem solid $grey-lite;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.6rem;
    flex-wrap: wrap;

    ul {
      display: flex;
      margin: 0 auto;
      padding: 0;
      justify-content: flex-start;
      align-items: center;
      list-style-type: none;
      width: 100%;

      &.open {
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        height: 20vh;
      }

      & > li {
        display: flex;
        margin: 0 2.4rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &:nth-child(2) {
          margin-left: 4.8rem;
        }

        & > a {
          text-decoration: none;
          font-weight: $regular;
          color: $blackio;
        }
      }
    }

    .left {
      width: 70%;
    }

    & > .right {
      .burger {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 4rem;
        width: 4rem;
        & > span {
          background-color: $blackio;
          border-radius: 0.8rem;
          height: 0.4rem;
          width: 90%;
        }

        &:active {
          background-color: $secondary;
          border-radius: 100%;
          padding: 4px;
        }

        &.open {
          span {
            &:first-child {
              transform: rotate(135deg);
            }
            transform: rotate(-135deg);
            &:nth-child(2) {
              display: none;
            }
            &:last-child {
              position: absolute;
              top: 107px;
              width: 38px;
            }
          }
        }
      }
    }
  }

  .open {
    display: flex;
  }
}
</style>

<script>
export default {
  data: () => ({
    isOpen: false
  }),
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
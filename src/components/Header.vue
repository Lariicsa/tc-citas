<template>
  <header>
    <nav>
      <ul class="row md">
        <li>
          <a href="/">
            <img src="../assets/tu-canton_logo.svg" alt="tu canton" />
          </a>
        </li>
        <li>
          <a href="/">Comprar</a>
        </li>
        <li>
          <a href="/">Precalifícate</a>
        </li>
      </ul>
      <div class="right">
        <button>Iniciar sesión</button>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "../scss/index.scss";
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

      @include mobile(700px) {
        display: none;
      }
    }
  }
}
</style>

<template>
  <footer>
    <div class="container in">
      <div class="row md">
        <p>Visita nuestras redes sociales</p>
      </div>
      <div class="row md right">
        <ul>
          <li class="social fb"></li>
          <li class="social yt"></li>
          <li class="social ig"></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../scss/index.scss";

footer {
  display: flex;
  height: 8vh;
  background-color: $primary;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  * {
    font-size: $regular-size;
    color: $clear;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;

    & > li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 1.8rem;
      &:last-child {
        margin-right: 0;
      }

      & > a {
        color: $clear;
        text-decoration: none;
      }
    }
  }
}
</style>

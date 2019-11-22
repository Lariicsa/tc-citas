<template>
  <label class="radio-wrap">
    <input
      type="radio"
      ref="input"
      :value="value"
      :checked="checked"
      @change="updateValue()"
      :id="id"
      :name="name"
    />
    <span :for="name">
      <slot />
    </span>
  </label>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: ["name", "checked", "value", "id"],
  methods: {
    updateValue() {
      this.$emit("change", this.$refs.input.checked);
    }
  }
};
</script>

<style lang="scss">
@import "../scss/index.scss";
.radio-wrap {
  background-color: $clear;
  margin: 4% 0 4% 3.2rem;
  &:first-child {
    margin-left: 0;
  }

  span {
    border: 0.1rem solid $grey-lite;
    border-radius: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    width: 140px;
    text-align: center;

    &:hover {
      border: 0.1rem solid $primary;
      cursor: pointer;
    }
  }

  & > [type="radio"] {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  & > [type="radio"]:checked + span {
    background-color: $clear;
    border: 0.2rem solid $secondary;
    position: relative;
    display: inline-block;
    transition: 0.1s ease;
    user-select: none;
  }
  & > [type="radio"]:checked + span {
    background-color: $secondary;
  }
}
</style>
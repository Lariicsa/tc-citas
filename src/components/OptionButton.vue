<template>
  <label class="radioSelect">
        <input type="radio" :value="label" :name="name" v-model="radioButtonValue">
        <span>{{ label }}</span>
    </label>
</template>

<script>
export default {
  props: ["value", "name", 'label'],
  computed: {
        radioButtonValue: {
            get() {
                return this.value
            },
            set() {
                this.$emit("change", this.label)
            }
        }
    }
}
</script>

<style lang="scss">
@import "../scss/index.scss";
.radioSelect {
	border-bottom: 0.1rem solid $blackio;
	display: flex;
	width: 100%;
	flex-direction: column;
	&:last-child {
		border-bottom: none;
	}
	& > li{
		color: $grey;
		display: flex;
		position: relative;
		width: 100%;
		height: 3rem;
		z-index: 0;
		&:hover {
			background-color: $primary;
		}
	}
	& > li input[type=radio]{
		position: absolute;
		visibility: hidden;
	}

	li label{
		display: block;
    position: relative;
    color: $primary;
    font-size: 1.1rem;
    line-height: 3.2rem;
    padding: 0rem 3rem;
    margin: 0 2rem;
    width: 100%;
    height: 100%;
    z-index: 9;
    cursor: pointer;
	}

	li:hover label{
		font-weight: 700;
		cursor: pointer;
	}

	li .check{
		display: flex;
		position: absolute;
		background-color: #eef2f3;
		border: 0.2rem solid #818997;
		border-radius: 100%;
		height: 1.4rem;
		width: 1.4rem;
		top: 0.9rem;
		left: 3rem;
		z-index: 2;
	}

	li:hover .check {
		border: 0.3rem solid #818997;
		cursor: pointer;
	}

	li .check::before {
		display: block;
		position: absolute;
		content: '';
		border-radius: 100%;
		width: 6px;
		height: 6px;
		top: -0.1rem;
		left: -0.1rem;
		margin: auto;
	}

	input[type=radio]:checked ~ .check {
		border: 0.4rem solid $grey;
	}

	input[type=radio]:checked ~ .check::before{
		background: #25B01B;
		border: 0.1rem solid #eef2f3;

	}

	input[type=radio]:checked ~ label{
		font-weight: 700;
	}
}

.radioGroup {
	background-color: white;
	border: 0.1rem solid $grey;
	border-radius: 0.2rem;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	position: relative;
	top: -2.5rem;
	left: 0rem;
	width: 100%;
	z-index: 3;

	& > ul {
		padding: 0;
		margin: 0;
	}
}

</style>
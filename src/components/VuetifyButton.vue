
<template>
	<!-- Source of code -->
	<v-btn :color="color" block depressed>
		<v-icon>{{icon}}</v-icon>
		<!-- @slot Text for the button -->
		<slot name="text">Default button</slot>
	</v-btn>
</template>
<script>

/**
* The only true button.
*/
export default {
	name: 'VuetifyButton',	
	props: {
		/**
		* The color for the button.
		* @values primary, secondary, accent, error, info, success, warning
		*
		*/
		color: {
			type: String,
			default: 'success'
		},
		/**
		* The size of the button
		* @values small, normal, large
		*/
		size: {
			type: String,
			default: 'normal'
		},
		/**
		* The icon for component
		* @values All icons for mdi
		*/
		icon: {
			type: String,
			default: 'mdi-account-star'
		}			
	}
}
</script>

<docs>
Source code: 

```jsx
<template>
	<!-- Source of code -->
	<v-btn :color="color" block depressed>
		<v-icon>{{icon}}</v-icon>
		<!-- @slot Text for the button -->
		<slot name="text">Default button</slot>
	</v-btn>
</template>
<script>

/**
* The only true button.
*/
export default {
	name: 'VuetifyButton',	
	props: {
		/**
		* The color for the button.
		* @values primary, secondary, accent, error, info, success, warning
		*
		*/
		color: {
			type: String,
			default: 'success'
		},
		/**
		* The size of the button
		* @values small, normal, large
		*/
		size: {
			type: String,
			default: 'normal'
		},
		/**
		* The icon for component
		* @values All icons for mdi
		*/
		icon: {
			type: String,
			default: 'mdi-account-star'
		}			
	}
}
</script>
```

Prymary Button :
```jsx
<VuetifyButton color="primary" icon="mdi-air-conditioner"><template slot="text">Primary Button</template></VuetifyButton>
```
</docs>

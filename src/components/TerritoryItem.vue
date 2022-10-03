<template>
    <li>
        <a href="#">{{ territory.name }}</a>
    </li>
</template>

<script>
export default {
    props: {
        territory: {
            type: Object,
            default: {},
        },
    },
    data() {
        return {
            isInactive: false
        }
    },
    methods: {
        toggleSublist(e) {
            console.log(e.srcElement.checked);

            this.isInactive = !e.srcElement.checked;

            console.log(e.srcElement.id);
        },
    }
}    
</script>
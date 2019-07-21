<template>
    <div>
        <ul v-for="fruit in fruitList">
            <li>
                <div class="name">{{fruit.name}}</div>
                <div class="price">{{fruit.price}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                fruitList:[]
            }
        },
        mounted() {
            let temp = {
                name:"苹果",
                price:90,
                unit:"斤"
            }
            this.fruitList.push(temp);
        }
    }
</script>
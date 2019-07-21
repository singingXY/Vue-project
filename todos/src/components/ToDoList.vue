<template>
    <div class="Todolist">
        <h1 v-html="title"></h1>
        <div>
            <input type="text" v-model="newItem">
            <button @click="addNewItem">添加</button>
        </div>
        <ul>
            <li
                v-for="item in items"
                :key="item.id">
                <!-- 待办 -->
                <span v-text="item.title"></span>
                <!-- 完成btn -->
                <button v-on:click="toggleFinish(item.id)">完成</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ToDolist',
    data () {
        return {
            id: 2,
            newItem: '',
            title: 'ToDo list',
            items: [
                {
                    id: 1,
                    title: '吃饭'
                }
            ]
        }
    },
    methods: {
        toggleFinish (recycleItem) {
            this.items.map((item, index) => {
                if (item.id === recycleItem) {
                    // 删除对应事项
                    this.items.splice(index, 1)
                }
            })
        },
        addNewItem (newItem) {
            this.items.push({
                id: this.id,
                title: this.newItem
            })
            this.id++
            this.newItem = ''
        }
    }
}
</script>

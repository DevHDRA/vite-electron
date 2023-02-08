<script setup>
import { getCharacters } from '../api/rickAndMorty'
import { onMounted, ref } from 'vue'
const characters = ref([])
const show = ref(true)

onMounted(async () => {
    const { results } = await getCharacters()
    console.warn(results)
    characters.value = results
})

const showCharacter = (character) => {
    console.log('este personaje', character)
}

</script>

<template>
    <div>
        <div v-show="show">
            <h1>aqui va la puta info en forma de modal</h1>
        </div>
        <div class="char-list">
            <div class="list-obj" v-for="character in characters" >
                <button @click="showCharacter(character)">{{ character.name }}</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.char-list {
    display: flex;
    flex-direction: row;
    margin: 15px;
    flex-wrap: wrap;
}

.list-obj {
    padding: 5px;
}

.list-obj button {
    background-color: azure;
    border: 1px solid rgb(94, 209, 255);
    border-radius: 20px;
    width: 220px;
    height: 50px;
    cursor: pointer;
}
.list-obj button:hover {
    background-color: rgb(62, 138, 138);
    color: white;
}
</style>

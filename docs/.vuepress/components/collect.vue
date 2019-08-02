<template>
    <div>
        <br><br>
        <div v-for="page in this.pages">
            <a class="cqf_a" v-if="list.indexOf(page.frontmatter.ct) >= 0 || list.indexOf(page.frontmatter.ut) >= 0" @click="toPage(page)">{{page.title}}</a>
        </div>
    </div>    
</template>

<script>

const data = {
    'css':[
        {
            title:'css加载会造成阻塞吗',
            link:'https://segmentfault.com/a/1190000018130499'
        }
    ]
}

module.exports = {
    created (){
        this.list = list;
    },
    data:function(){
        return data
    },
    methods:{
        toPage(page){
            this.$router.push(page.regularPath)
        }
    }
}

</script>

<style>
.cqf_a{
    cursor: pointer;
}

</style>



<template>
    <div>
        <br><br>
        <div v-for="page in this.pages">
            <a class="cqf_a" v-if="list.indexOf(page.frontmatter.ct) >= 0" @click="toPage(page)">{{page.title}}</a>
        </div>
    </div>    
</template>

<script>

module.exports = {
    props: ['pages'],
    created (){
        let list = [
            moment(new Date()).subtract(1, 'days').format('YYYY/MM/DD'),
            moment(new Date()).subtract(2, 'days').format('YYYY/MM/DD'),
            moment(new Date()).subtract(4, 'days').format('YYYY/MM/DD'),
            moment(new Date()).subtract(7, 'days').format('YYYY/MM/DD'),
            moment(new Date()).subtract(15, 'days').format('YYYY/MM/DD'),
            moment(new Date()).subtract(30, 'days').format('YYYY/MM/DD'),
            moment(new Date()).subtract(60, 'days').format('YYYY/MM/DD'),
        ]
        this.list = list;
    },
    data:function(){
        return {
            count:0,
            list:[]
        }
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



const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootk8269671/",
            name: "springbootk8269671",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootk8269671/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信美食点餐系统小程序的设计与实现"
        } 
    }
}
export default base
